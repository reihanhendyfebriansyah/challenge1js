bmi = (bb, tb) => {
    const a =bb/ Math.pow((tb / 100), 2);
    var s;
    if (a < 18.5) {
        return s = "ga pernah makan ya"
    }else if (a >=18.5 && a<= 24.9) {
        return s ="ideal";
    }else if (a >= 25 && a <= 29.9) {
        return s ="kelebihan berat badan"
    }else {
        return s = "obesitas"
    }
}

console.log("3.ukuran BMI : " + bmi(60,170));