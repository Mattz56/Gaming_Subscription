
// ----------------------------- BUTTON BACK & NEXT

function nextPage(pageNumber) {
    const currentPage = document.getElementById(`page${pageNumber}`);
    const nextPage = document.getElementById(`page${pageNumber + 1}`);

    if (nextPage) {
        currentPage.style.display = "none";
        nextPage.style.display = "block";
        console.log(`page${pageNumber}`);
    }
}

function previousPage(pageNumber) {
    const currentPage = document.getElementById(`page${pageNumber}`);
    const previousPage = document.getElementById(`page${pageNumber - 1}`);

    if (previousPage) {
        currentPage.style.display = "none";
        previousPage.style.display = "block";
        console.log(`page${pageNumber}`);
    }
}

// ----------------------------- Fonction ajout d'un style page2

const divs = document.querySelectorAll(".divs");

divs.forEach(function(div) {
    div.addEventListener("click", function() {
        divs.forEach(function(d) {
            d.classList.remove("clickee");
        });
         div.classList.add("clickee");
    });
});

// --------------------------- Fonction ajout d'un style page3


const divsp3 = document.querySelectorAll(".divsp3");
const checkboxes = document.querySelectorAll("input[type='checkbox']");


checkboxes.forEach(function(checkbox, index) {
    checkbox.addEventListener("change", function() {

        if (checkbox.checked) {
            divsp3[index].classList.add("clickee");
        } else {
            divsp3[index].classList.remove("clickee");
        }
    });
});


// --------------------------- Fonction calcul du total a la fin

// -------- Page 2
document.getElementById('div_click1').addEventListener('click', function() {
    const selectedValue = 9;
    document.getElementById('arcade_p').textContent = 'Arcade (Monthly)';
    document.getElementById('arcade_price').textContent = '$' + selectedValue + '/mo';

    calculateTotal();
});

document.getElementById('div_click2').addEventListener('click', function() {
    const selectedValue = 12;
    document.getElementById('arcade_p').textContent = 'Advanced (Monthly)';
    document.getElementById('arcade_price').textContent = '$' + selectedValue + '/mo';

   calculateTotal();
});

document.getElementById('div_click3').addEventListener('click', function() {
    const selectedValue = 15;
    document.getElementById('arcade_p').textContent = 'Pro (Monthly)';
    document.getElementById('arcade_price').textContent = '$' + selectedValue + '/mo';

    calculateTotal();
});


// -------- Page 3


document.getElementById('online_services').addEventListener('change', function() {
    const onlinePrice = this.checked ? 1 : 0;
    document.getElementById('online_price').textContent = '+$' + onlinePrice + '/mo';
    calculateTotal();
});
document.getElementById('larger_storage').addEventListener('change', function() {
    const onlinePrice = this.checked ? 2 : 0;
    document.getElementById('larger_price').textContent = '+$' + onlinePrice + '/mo';
    calculateTotal();
});
document.getElementById('customizable_profile').addEventListener('change', function() {
    const onlinePrice = this.checked ? 2 : 0;
    document.getElementById('custom_price').textContent = '+$' + onlinePrice + '/mo';
    calculateTotal();
});

// -------- Page 4

function calculateTotal() {
    const arcadePrice = parseFloat(document.getElementById('arcade_price').textContent.match(/\d+/)[0]);
    const onlinePrice = parseFloat(document.getElementById('online_price').textContent.match(/\d+/)[0]);
    const largerPrice = parseFloat(document.getElementById('larger_price').textContent.match(/\d+/)[0]);
    const customPrice = parseFloat(document.getElementById('custom_price').textContent.match(/\d+/)[0]);

    let totalPrice = arcadePrice + onlinePrice + largerPrice + customPrice;

    document.getElementById('total_price').textContent = '+$' + totalPrice + '/mo';
}

calculateTotal();


// ------- Button navigation entre les pages + ajout de la class active

const btnPage1 = document.getElementById('btn_page1');
const btnPage2 = document.getElementById('btn_page2');
const btnPage3 = document.getElementById('btn_page3');
const btnPage4 = document.getElementById('btn_page4');
const btnPage5 = document.getElementById('btn_page5');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');

btnPage1.classList.add('active');

function showPage(pageToShow) {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'none';

    pageToShow.style.display = 'block';
}

btnPage1.addEventListener('click', function() {
    showPage(page1);

    btnPage1.classList.add('active');
    btnPage2.classList.remove('active');
    btnPage3.classList.remove('active');
    btnPage4.classList.remove('active');
});

btnPage2.addEventListener('click', function() {
    showPage(page2);

    btnPage2.classList.add('active');
    btnPage1.classList.remove('active');
    btnPage3.classList.remove('active');
    btnPage4.classList.remove('active');
});
btnPage3.addEventListener('click', function() {
    showPage(page3);

    btnPage3.classList.add('active');
    btnPage1.classList.remove('active');
    btnPage2.classList.remove('active');
    btnPage4.classList.remove('active');
});
btnPage4.addEventListener('click', function() {
    showPage(page4);

    btnPage4.classList.add('active');
    btnPage1.classList.remove('active');
    btnPage2.classList.remove('active');
    btnPage3.classList.remove('active');
});

showPage(page1);



