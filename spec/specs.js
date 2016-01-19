describe('triangle', function() {
  it("NOT a triangle: the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.", function() {
    expect(triangle(2,4,2)).to.equal(false);
  });

  it("all three sides of an equilateral triangle are equal.", function() {
    expect(triangle(2,2,2)).to.equal("equilateral");
  });
  it("two sides of an isosceles triangle are equal.", function() {
    expect(triangle(2,2,1)).to.equal("isosceles");
  });
  it("no sides of a scalene triangle are equal.", function() {
    expect(triangle(2,3,4)).to.equal("scalene");
  });
});
