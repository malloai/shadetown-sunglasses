export const sunglassesOptions = {
    models: [
        {
            name: "aviator",
            price: 300,
            thumbImg: "thumb-aviator.png",
            cssClass: "frame-aviator",
        },
        {      
            name: "demie",
            price: 200,
            thumbImg: "thumb-half-frame.png",
            cssClass: "frame-half",
        },
        {
            name: "rondes",  
            price: 250,
            thumbImg: "thumb-round.png",
            cssClass: "frame-round",
        },
        {  
            name: "voyageur",
            price: 250,
            thumbImg: "thumb-wayfarer.png",
            cssClass: "frame-wayfarer",
        }],
    lenses: [
        {
            color: "sepia",
            price: 20,
            cssClass: "color-sepia",
        },
        {
            color: "rainbow",
            price: 50,
            cssClass: "color-rainbow",
        },
        {
            color: "iridescent",
            price: 30,
            cssClass: "color-iridescent",
        }],
    frames: [
        {
            color: "charcoal",
            price: 0,
            cssClass: "color-charcoal",
        },
        {
            color: "tan",
            price: 0,
            cssClass: "color-tan",
        },
        {
            color: "rose",
            price: 0,
            cssClass: "color-rose",
        },
    ],
}

export const sunglasses = {
    model: {
        name: "aviator",
        price: 300,
        thumbImg: "./images/thumb-aviator.png",
        cssClass: "frame-aviator",
    },
    lenses: {
        color: "sepia",
        price: 20,
        cssClass: "color-sepia",
    },
    frame: {
        color: "charcoal",
        price: 0,
        cssClass: "color-charcoal",
    }     
}

export const productDetailsEl = document.getElementById("productDetails")
export const productImage = document.getElementById("productImage")
export const productFrames = document.getElementsByClassName("product-image_frame")[0]
export const productLenses = document.getElementsByClassName("product-image_lenses")[0]

export const setSunglasses = (sunglassesNew = sunglasses) => {
    return sunglassesNew
}

export const render = (sunglassesNew) => {
    
    let price = `€ ${sunglassesNew.model.price + sunglassesNew.lenses.price + sunglassesNew.frame.price}`
    
    var sunglassesNew = {
        model: { name, price,
            thumbImg: sunglassesNew.model.thumbImg,
            cssClass: sunglassesNew.model.cssClass,
        },
        lenses: {
            color: sunglassesNew.lenses.color,
            price: sunglassesNew.lenses.price,
            cssClass: sunglassesNew.lenses.cssClass,
        },
        frame: {
            color: sunglassesNew.frame.color,
            price: sunglassesNew.frame.price,
            cssClass: sunglassesNew.frame.cssClass,
        }     
    }
    
    productDetailsEl.innerHTML = 
    `<h1>${sunglassesNew.model.name}</h1><p>Caractéristiques: ${sunglassesNew.lenses.color} lenses,  ${sunglassesNew.frame.color} frames</p> <p>${price}</p>`
    
    const currClass = productImage.classList[1]
    productImage.classList.replace(currClass, sunglassesNew.model.cssClass)
    
    const currFramesClass = productFrames.classList[1]
    productFrames.classList.replace(currFramesClass, sunglassesNew.frame.cssClass)
    
    const currLensesClass = productLenses.classList[1]
    productLenses.classList.replace(currLensesClass, sunglassesNew.lenses.cssClass)
    
}

//Highlight current selection
export const addHighlight = (clickedItem) => {
    if (clickedItem.classList.contains("product-thumb")) {
        Array.from(document.getElementsByClassName("product-thumb"))
            .forEach(function(thumb) {
               thumb.classList.remove("selected") 
            }) 
    } else if (clickedItem.classList.contains("product-color-swatch")) {
        const siblings = clickedItem.closest("ul").querySelectorAll("button")
        Array.from(siblings)
            .forEach(function(swatch) {
               swatch.classList.remove("selected") 
            })
    }
    clickedItem.classList.add("selected") 
}
