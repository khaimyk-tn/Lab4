fetch('../src/Pizza.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Помилка при виконанні запиту');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => createPizza(item))
        updateOverallQuantity()
    })
    .catch(error => {
        console.error('Помилка:', error);
    });

function createPizza(data) {
    const pizzaCard = document.createElement("div")
    pizzaCard.className = "pizza-card"
    // add css for new and popular pizza
    if (data.is.new && data.is.popular) {
        const twoBadgesDiv = document.createElement("div")
        twoBadgesDiv.className = "all-bages"
    }
    //add images of pizza
    const imgPizza = document.createElement("img")
    imgPizza.className = "image"
    imgPizza.src = data.icon
    imgPizza.alt = "photo of pizza"

    pizzaCard.appendChild(imgPizza)
       const pizzaItemDiv = document.createElement("div")
    pizzaItemDiv.className = "pizza-item"

    const pizzaNameH1 = document.createElement("h1")
    pizzaNameH1.className = "pizza-name"

    const strongPizzaName = document.createElement("strong")
    strongPizzaName.textContent = data.title

    pizzaNameH1.appendChild(strongPizzaName)
    pizzaItemDiv.appendChild(pizzaNameH1)

    //type of pizza
    const pizzaType = document.createElement("h6")
    pizzaType.className = "pizza-type"
    pizzaType.textContent = data.type
    pizzaType.dataset.meat = false
    pizzaType.dataset.pineapple = false
    pizzaType.dataset.mushroom = false
    pizzaType.dataset.seafood = false
    pizzaType.dataset.vega = data.type === "Вега піца"

    pizzaItemDiv.appendChild(pizzaType)

    //fill info about pizza
    const content = document.createElement("p")
    content.className = "pizza-text"
    let allContent = ""
    for (const contentKey in data.content) {
          if (data.type !== "Вега піца") {
            if(contentKey === "meat" || contentKey === "chicken"){
                pizzaType.dataset.meat = true
            }
            if(contentKey === "pineapple") {
                pizzaType.dataset.pineapple = true
            }
            if(contentKey === "mushroom") {
                pizzaType.dataset.mushroom = true
            }
            if(contentKey === "ocean") {
                pizzaType.dataset.seafood = true
            }
        }
    }

    content.textContent = allContent[0].toUpperCase() + allContent.slice(1, allContent.length - 2)
    pizzaItemDiv.appendChild(content)
    
    const pizzaBuyContainers = document.createElement("div")
    pizzaBuyContainers.className = "pizza-buy-containers"
      if (data.small_size !== undefined) {
        const pizzaBuyDiv = document.createElement("div")
        pizzaBuyDiv.className = "pizza-buy-container"

        const sizeDiv = document.createElement("div")

        const imgSize = document.createElement("img")
        imgSize.alt = "size"
        imgSize.src = "assets/images/size-icon.svg"

        sizeDiv.appendChild(imgSize)

        const spanSize = document.createElement("span")
        spanSize.textContent = data.small_size.size

        sizeDiv.appendChild(spanSize)

        pizzaBuyDiv.appendChild(sizeDiv)

        const weightDiv = document.createElement("div")

        const imgWeight = document.createElement("img")
        imgWeight.alt = "weight"
        imgWeight.src = "assets/images/weight.svg"

        weightDiv.appendChild(imgWeight)

        const spanWeight = document.createElement("span")
        spanWeight.textContent = data.small_size.weight

        weightDiv.appendChild(spanWeight)

        pizzaBuyDiv.appendChild(weightDiv)

        const strongPrice = document.createElement("strong")
        strongPrice.className = "pizza-price"
        strongPrice.textContent = data.small_size.price

        pizzaBuyDiv.appendChild(strongPrice)

        const justCurrency = document.createElement("strong")
        justCurrency.textContent = "грн."

        pizzaBuyDiv.appendChild(justCurrency)

        const buyButton = document.createElement("button")
        buyButton.className = "pizza-buy-button"
        buyButton.textContent = "Купити"
        buyButton.type = "submit"
        buyButton.dataset.size = "small"
        buyButton.addEventListener("click", addBasketButton)

        pizzaBuyDiv.appendChild(buyButton)
        pizzaBuyContainers.appendChild(pizzaBuyDiv)
    }
    if (data.big_size !== undefined) {
        const pizzaBuyDiv = document.createElement("div")
        pizzaBuyDiv.className = "pizza-buy-container"

        const sizeDiv = document.createElement("div")

        const imgSize = document.createElement("img")
        imgSize.alt = "size"
        imgSize.src = "assets/images/size-icon.svg"

        sizeDiv.appendChild(imgSize)

        const spanSize = document.createElement("span")
        spanSize.textContent = data.big_size.size

        sizeDiv.appendChild(spanSize)

        pizzaBuyDiv.appendChild(sizeDiv)

        const weightDiv = document.createElement("div")

        const imgWeight = document.createElement("img")
        imgWeight.alt = "weight"
        imgWeight.src = "assets/images/weight.svg"

        weightDiv.appendChild(imgWeight)

        const spanWeight = document.createElement("span")
        spanWeight.textContent = data.big_size.weight

        weightDiv.appendChild(spanWeight)

        pizzaBuyDiv.appendChild(weightDiv)

        const strongPrice = document.createElement("strong")
        strongPrice.className = "pizza-price"
        strongPrice.textContent = data.big_size.price

        pizzaBuyDiv.appendChild(strongPrice)

        const justCurrency = document.createElement("strong")
        justCurrency.textContent = "грн."

        pizzaBuyDiv.appendChild(justCurrency)

        const buyButton = document.createElement("button")
        buyButton.className = "pizza-buy-button"
        buyButton.textContent = "Купити"
        buyButton.type = "submit"
        buyButton.dataset.size = "big"
        buyButton.addEventListener("click", addBasketButton)

        pizzaBuyDiv.appendChild(buyButton)
        pizzaBuyContainers.appendChild(pizzaBuyDiv)
    }

    pizzaItemDiv.appendChild(pizzaBuyContainers)
    pizzaCard.appendChild(pizzaItemDiv)
    document.querySelector(".pizza-allCards").appendChild(pizzaCard)
}



function clear() {
    
}
function updateOverallQuantity() {
    let boughtCount = 0
    let numberOfPizza = 0
}

