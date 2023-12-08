import { sunglassesOptions, sunglasses, setSunglasses, render, addHighlight, productDetailsEl, productImage, productFrames, productLenses } from "./sunglasses.js"

let sunglassesNew = ''

document.body.addEventListener("click", function(event) {
    const clickedItem = event.target
    //if sunglassesNew defined take variable from updates 
        //else use original sunglasses object
    if (!sunglassesNew) {
        sunglassesNew = sunglasses
    }
    
    // update model
    if (clickedItem.classList.contains("product-thumb")) {

        const currName = clickedItem.dataset.name

        const modelOptions = sunglassesOptions.models
        .filter(function(item) {
            return item.name === currName
        })[0]
        
        const name = modelOptions.name
        const price = modelOptions.price
        const thumbImg = modelOptions.thumbImg
        const cssClass = modelOptions.cssClass
        
        sunglassesNew = {
            model: {
                name: name,
                price: price,
                thumbImg: sunglassesNew.model.thumbImg,
                cssClass: cssClass,
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
       
        addHighlight(clickedItem)
        setSunglasses(sunglassesNew)
        render(sunglassesNew)
    }
    
    // update colors for frames / lenses
    if (clickedItem.classList.contains("product-color-swatch")) {
        const currColor = clickedItem.dataset.color
        
        // check nearest parent div
            //lenses
        if (clickedItem.closest("div").classList[0] === "product-lenses") {
            let colorOptions = sunglassesOptions.lenses
            .filter(function(item) {
                return item.color === currColor
            })[0]
            
            let color = colorOptions.color
            let price = colorOptions.price
            let cssClass = colorOptions.cssClass
        
            sunglassesNew = {
                model: {
                    name: sunglassesNew.model.name,
                    price: sunglassesNew.model.price,
                    thumbImg: sunglassesNew.model.price,
                    cssClass: sunglassesNew.model.cssClass,
                },
                lenses: {
                    color: color,
                    price: price,
                    cssClass: cssClass,
                },
                frame: {
                    color: sunglassesNew.frame.color,
                    price: sunglassesNew.frame.price,
                    cssClass: sunglassesNew.frame.cssClass,
                }     
            }
        } 
        
        //frames
        else {
            let colorOptions = sunglassesOptions.frames
            .filter(function(item) {
                return item.color === currColor
            })[0]
            
            let color = colorOptions.color
            let price = colorOptions.price
            let cssClass = colorOptions.cssClass
            
            sunglassesNew = {
                model: {
                    name: sunglassesNew.model.name,
                    price: sunglassesNew.model.price,
                    thumbImg: sunglassesNew.model.price,
                    cssClass: sunglassesNew.model.cssClass,
                },
                lenses: {
                    color: sunglassesNew.lenses.color,
                    price: sunglassesNew.lenses.price,
                    cssClass: sunglassesNew.lenses.cssClass,
                },
                frame: {
                    color: color,
                    price: price,
                    cssClass: cssClass,
                }     
            }
        }

        addHighlight(clickedItem)
        setSunglasses(sunglassesNew)
        render(sunglassesNew)
    }
})

render(sunglasses)