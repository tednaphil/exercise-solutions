const chai = require("chai");
const expect = chai.expect;
const { moveRobot,
        paliSum,
        factorize,
        steps,
        classify,
        findMatches,
        translate
       } = require('../javascript/index')

describe('JavaScript Exercises', () => {
    describe('MoveRobot', () => {
        it('doesn\'t end at starting position', () => {
            expect(moveRobot("GRGL")).to.equal(false);
        });
        it('ends at starting position', () => {
            expect(moveRobot("GRGRGRG")).to.equal(true);
        });
    });
    describe('PaliSum', () => {
        it('returns an array of twenty-five integers where the number plus its inverse equals a palindrome greater than 1,000', () => {
            const arrayONumbers = paliSum();
            expect(arrayONumbers).to.deep.equal([
                209,  308,  407,  506,  605,
                704,  803,  902, 1000, 1001,
               1002, 1003, 1004, 1005, 1006,
               1007, 1008, 1010, 1011, 1012,
               1013, 1014, 1015, 1016, 1017
             ]);
        });
    });
    describe('Factorize', () => {
        it('returns an array of factors for a provided whole number', () => {
            expect(factorize(12)).to.deep.equal([1, 2, 3, 4, 6, 12]);
        });
        it('returns an array of factors for another provided whole number', () => {
            expect(factorize(4)).to.deep.equal([1, 2, 4]);
        });
        it('returns an array of factors for a prime number', () => {
            expect(factorize(17)).to.deep.equal([1, 17]);
        });
    });
    describe('Steps - Collatz Conjecture', () => {
        it('zero steps for one', () => {
          expect(steps(1)).to.equal(0);
        });
        it('divide if even', () => {
          expect(steps(16)).to.equal(4);
        });
        it('even and odd steps', () => {
          expect(steps(12)).to.equal(9);
        });
        it('large number of even and odd steps', () => {
          expect(steps(1000000)).to.equal(152);
        });
        it('zero is an error', () => {
          expect(() => {
            steps(0);
          }).to.throw('Only positive numbers are allowed');
        });
        it('negative value is an error', () => {
          expect(() => {
            steps(-15);
          }).to.throw('Only positive numbers are allowed');
        });
    });
    describe('Classify - Perfect Numbers', () => {
      describe('Invalid Inputs', () => {
        it('Zero is rejected (not a natural number)', () => {
          expect(() => {classify(0)}).to.throw('Classification is only possible for natural numbers.');
        });
        it('Negative integer is rejected (not a natural number)', () => {
          expect(() => classify(-1)).to.throw('Classification is only possible for natural numbers.');
        });
      });
      describe('Perfect Numbers', () => {
        it('Smallest perfect number is classified correctly', () => {
          expect(classify(6)).to.equal('perfect');
        });
        it('Medium perfect number is classified correctly', () => {
          expect(classify(28)).to.equal('perfect');
        });
        it('Large perfect number is classified correctly', () => {
          expect(classify(33550336)).to.equal('perfect');
        });
      });
      describe('Abundant Numbers', () => {
        it('Smallest abundant number is classified correctly', () => {
          expect(classify(12)).to.equal('abundant');
        });
        it('Medium abundant number is classified correctly', () => {
          expect(classify(30)).to.equal('abundant');
        });
        it('Large abundant number is classified correctly', () => {
          expect(classify(33550335)).to.equal('abundant');
        });
      });
      describe('Deficient Numbers', () => {
        it('Edge case (no factors other than itself) is classified correctly', () => {
          expect(classify(1)).to.equal('deficient');
        });
        it('Smallest prime deficient number is classified correctly', () => {
          expect(classify(2)).to.equal('deficient');
        });
        it('Smallest non-prime deficient number is classified correctly', () => {
          expect(classify(4)).to.equal('deficient');
        });
        it('Medium deficient number is classified correctly', () => {
          expect(classify(32)).to.equal('deficient');
        });
        it('Large deficient number is classified correctly', () => {
          expect(classify(33550337)).to.equal('deficient');
        });
      });
    });
    describe('Find Matches', () => {
      it('Returns an array of numbers present in all 3 arrays', () => {
        const nums1 = [1, 2, 4, 5, 8]
        const nums2 = [2, 3, 5, 7, 9]
        const nums3 = [1, 2, 5, 8, 9]
        expect(findMatches(nums1, nums2, nums3)).to.deep.equal([2, 5])
      });
      it('Returns an empty array if no matches found', () => {
        expect(findMatches([1, 2, 3], [4, 5, 6], [7, 8, 9])).to.deep.equal([])
      });
    });
    describe('ProteinTranslation', () => {
      it('Empty RNA has no proteins', () => {
        expect(translate()).to.deep.equal([]);
      });
      describe('Single codons', () => {
        const mapping = [
          ['Methionine', ['AUG']],
          ['Phenylalanine', ['UUU', 'UUC']],
          ['Leucine', ['UUA', 'UUG']],
          ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
          ['Tyrosine', ['UAU', 'UAC']],
          ['Cysteine', ['UGU', 'UGC']],
          ['Tryptophan', ['UGG']],
        ];
        mapping.forEach(([protein, codons]) => {
          codons.forEach((codon, index) => {
            const seq = index + 1;
            it(`${protein} RNA sequence ${seq} translates into ${protein}`, () => {
              expect(translate(codon)).to.deep.equal([protein]);
            });
          });
        });
        const stopCodons = ['UAA', 'UAG', 'UGA'];
        stopCodons.forEach((codon, index) => {
          it(`STOP codon RNA sequence ${index + 1}`, () => {
            expect(translate(codon)).to.deep.equal([]);
          });
        });
      });
      describe('Multiple codons', () => {
        it('Sequence of two protein codons translates into proteins', () => {
          expect(translate('UUUUUU')).to.deep.equal(['Phenylalanine', 'Phenylalanine']);
        });
        it('Sequence of two different protein codons translates into proteins', () => {
          expect(translate('UUAUUG')).to.deep.equal(['Leucine', 'Leucine']);
        });
        it('Translate RNA strand into correct protein list', () => {
          expect(translate('AUGUUUUGG')).to.deep.equal([
            'Methionine',
            'Phenylalanine',
            'Tryptophan',
          ]);
        });
        it('Translation stops if STOP codon at beginning of sequence', () => {
          expect(translate('UAGUGG')).to.deep.equal([]);
        });
        it('Translation stops if STOP codon at end of three-codon sequence', () => {
          expect(translate('AUGUUUUAA')).to.deep.equal(['Methionine', 'Phenylalanine']);
        });
        it('Translation stops if STOP codon in middle of three-codon sequence', () => {
          expect(translate('UGGUAGUGG')).to.deep.equal(['Tryptophan']);
        });
        it('Translation stops if STOP codon in middle of six-codon sequence', () => {
          expect(translate('UGGUGUUAUUAAUGGUUU')).to.deep.equal([
            'Tryptophan',
            'Cysteine',
            'Tyrosine',
          ]);
        });
      });
      describe('Unexpected strands', () => {
        it("Non-existing codon can't translate", () => {
          expect(() => translate('AAA')).to.throw('Invalid codon');
        });
        it("Unknown amino acids, not part of a codon, can't translate", () => {
          expect(() => translate('XYZ')).to.throw('Invalid codon');
        });
        it("Incomplete RNA sequence can't translate", () => {
          expect(() => translate('AUGU')).to.throw('Invalid codon');
        });
        it('Incomplete RNA sequence can translate if valid until a STOP codon', () => {
          expect(translate('UUCUUCUAAUGGU')).to.deep.equal([
            'Phenylalanine',
            'Phenylalanine',
          ]);
        });
      });
    });
    
})
