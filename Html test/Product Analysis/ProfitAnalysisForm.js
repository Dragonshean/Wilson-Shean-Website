const date = document.getElementById('date')
const note = document.getElementById('note')
const piElement = document.getElementById('Product item');
const pcElement = document.getElementById('Product code');
const scElement = document.getElementById('Spec');
const spElement = document.getElementById('Selling price');
const mcElement = document.getElementById('Material cost');
const qtElement = document.getElementById('Quantity');
const fcElement = document.getElementById('Freight cost');
const ccElement = document.getElementById('Commission cost');
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')



class profitAndCost {
    TotalProfit() {
        return (spElement.value - mcElement.value) * qtElement.value - fcElement.value - ccElement.value;
    }
    TotalCost() {
        return mcElement.value * qtElement.value - fcElement.value - ccElement.value;
    }
}
function ProfitPercent(){
    let showCost = new profitAndCost;
    showCost.TotalProfit / showCost.TotalCost;
}

const listContent = []

//記錄前告知利潤
function profitline() {
    let showProfit = new profitAndCost
    document.getElementById('profit').innerHTML = '此訂單利潤為:"' + showProfit.TotalProfit() + '"USD'
    //紀錄時通知是否賺賠錢
    if (ProfitPercent() < 0.2) {
        alert('賠錢, 利潤低於2成,請重新計算價格')
    } else if (ProfitPercent() == 0.2) {
        alert('賺錢, 利潤2成 請注意原物料成本波動!')
    } else if (ProfitPercent() > 0.2 && i < 0.3) {
        alert('賺錢, 利潤2成~3成 請注意原物料成本波動!')
    } else if (ProfitPercent() >= 0.4) {
        alert('賺錢, 利潤4成以上 很好!正常報價利潤')
    } else if (ProfitPercent() >= 0.3 && i < 0.4) {
        alert('賺錢, 利潤3成以上 請注意原物料成本波動!')
    }
}


//記錄每項
function render() {

    let htmlStr = ''

    listContent.forEach(function (item) {
        htmlStr = htmlStr + `
        <div class="item">
            <div>
                <fieldset>
                    <legend>Record</legend> 
                    <p>Product item:"${item.piElement}" Product code:"${item.pcElement}" Spec:"${item.scElement}"</p>
                    <p>Selling price:"${item.spElement}"USD</p>
                    <p>Material cost:"${item.mcElement}"USD</p>
                    <p>Quantity:"${item.qtElement}"</p>
                    <p>Freight cost:"${item.fcElement}"USD</p>
                    <p>Commission cost:"${item.ccElement}"USD</p>
                    <p>Date:"${item.date}"</p>
                    <p>此訂單利潤為:"${item.profit}" 美金</p>
                    <p>備註:${item.note}</p>
                </fieldset>
            </div>
        </div>
        `
    })
    list.innerHTML = htmlStr
}
//執行增加及刪除紀錄
addedBtn.addEventListener('click', () => {
    let recordProfit = new profitAndCost
    listContent.unshift({
        date: date.value,
        note: note.value,
        piElement: piElement.value,
        pcElement: pcElement.value,
        scElement: scElement.value,
        spElement: spElement.value,
        mcElement: mcElement.value,
        qtElement: qtElement.value,
        fcElement: fcElement.value,
        ccElement: ccElement.value,
        profit: recordProfit.TotalProfit()
    })
    render()
})

deletedBtn.addEventListener('click', function () {
    listContent.shift()

    render()
})


//新增商品品項
function addNew() {
    let ProductItem = document.getElementById('Product item'),               //或是 let ProductItem = document.getElementById('Product item'), 
        inputValue = document.getElementById('addNewProduct').value,         //     let newOption = document.createElement('option')
        newOption = document.createElement('option')                         //     let inputValue = document.getElementById('addNewProduct')
    newOptionValue = document.createTextNode(inputValue)                 //     newOption.value = inputValue.value
    //     newOption.text = inputValue.value
    newOption.appendChild(newOptionValue)                                    //     ProductItem.add(newOption)
    ProductItem.insertBefore(newOption, ProductItem.lastChild)               //     inputValue.value = ""
}
function addNew2() {
    let ProductItem2 = document.getElementById('Product code'),
        inputValue2 = document.getElementById('addNewProduct2').value,
        newOption2 = document.createElement('option')
    newOptionValue2 = document.createTextNode(inputValue2)

    newOption2.appendChild(newOptionValue2)
    ProductItem2.insertBefore(newOption2, ProductItem2.lastChild)
}
function addNew3() {
    let ProductItem3 = document.getElementById('Spec'),
        inputValue3 = document.getElementById('addNewProduct3').value,
        newOption3 = document.createElement('option')
    newOptionValue3 = document.createTextNode(inputValue3)

    newOption3.appendChild(newOptionValue3)
    ProductItem3.insertBefore(newOption3, ProductItem3.lastChild)
}
//刪除商品Item
function deleteLast() {
    let ProductItem = document.getElementById('Product item')
    ProductItem.remove(ProductItem.selectedIndex)
}
//刪除商品Code
function deleteLast2() {
    let ProductCode = document.getElementById('Product code')
    ProductCode.remove(ProductItem.selectedIndex)
}
//刪除商品Spec
function deleteLast3() {
    let Specification = document.getElementById('Spec')
    Specification.remove(ProductItem.selectedIndex)
}
