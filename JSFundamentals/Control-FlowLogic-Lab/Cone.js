function cone(radius , height) {

    let volume = (1/3)* Math.PI * radius * radius * height;
    let slantHeight = Math.sqrt(radius * radius + height * height)
    let literalSurface = Math.PI * radius * slantHeight
    let baseSurface = Math.PI * radius * radius;
    let totalSurface = literalSurface + baseSurface;

    console.log(`volume = ${volume}`)
    console.log(`area = ${totalSurface}`)
}

cone(3 ,5)