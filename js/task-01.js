const categoriesList = categories.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.children;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItems.length}`);
});