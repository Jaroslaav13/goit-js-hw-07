const sumCat = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${sumCat.length}`);
sumCat.forEach(category => {
    const nameCat = category.querySelector('h2').textContent;
    const totalSubcategory = category.querySelectorAll('li')
    console.log(`Category: ${nameCat}`);
    console.log(`Elements: ${totalSubcategory.length}`);
})