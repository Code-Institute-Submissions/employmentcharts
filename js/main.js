var employmentData = [
    { "Category": "Full time", "Year": "2017", "Sectors": "Chemicals", "Employees": 26868 },
    { "Category": "Part time", "Year": "2017", "Sectors": "Chemicals", "Employees": 4109 },
    { "Category": "Full time", "Year": "2017", "Sectors": "Clothing", "Employees": 1221 },
    { "Category": "Part time", "Year": "2017", "Sectors": "Clothing", "Employees": 290 },
    { "Category": "Full time", "Year": "2017", "Sectors": "Electronic Eqp.", "Employees": 22382 },
    { "Category": "Part time", "Year": "2017", "Sectors": "Electronic Eqp.", "Employees": 1778 },
    { "Category": "Full time", "Year": "2017", "Sectors": "C/E/W/W", "Employees": 14825 },
    { "Category": "Part time", "Year": "2017", "Sectors": "C/E/W/W", "Employees": 1006 },
    { "Category": "Full time", "Year": "2017", "Sectors": "Tobacco/Drinks", "Employees": 3737 },
    { "Category": "Part time", "Year": "2017", "Sectors": "Tobacco/Drinks", "Employees": 422 },
    { "Category": "Full time", "Year": "2017", "Sectors": "Food", "Employees": 45341 },
    { "Category": "Part time", "Year": "2017", "Sectors": "Food", "Employees": 6379 },
    { "Category": "Full time", "Year": "2017", "Sectors": "Medical Eqp.", "Employees": 27642 },
    { "Category": "Part time", "Year": "2017", "Sectors": "Medical Eqp.", "Employees": 4024 },
    { "Category": "Full time", "Year": "2017", "Sectors": "Coding", "Employees": 29958 },
    { "Category": "Part time", "Year": "2017", "Sectors": "Coding", "Employees": 1599 },
    { "Category": "Full time", "Year": "2017", "Sectors": "Finance", "Employees": 28349 },
    { "Category": "Part time", "Year": "2017", "Sectors": "Finance", "Employees": 2062 },

];

queue()

.await(makeGraphs);

function makeGraphs(error, salaryData){

    var ndx = crossfilter(employmentData);

    showTypeSelector(ndx);

    showEmploymentData(ndx);

    dc.renderAll();

}

function showTypeSelector(ndx){
    category_dim = ndx.dimension(dc.pluck("Category"));
    employmentType = category_dim.group();

    dc.selectMenu("#typeSelector")
    .dimension(category_dim)
    .group(employmentType);
}

function showEmploymentData(ndx){
    var sectors_dim = ndx.dimension(dc.pluck("Sectors"));
    var employmentSector = sectors_dim.group().reduceSum(dc.pluck("Employees"));

    dc.barChart("#employmentSector")
    .width(700)
    .height(500)
    .margins({top: 10, right: 50, bottom: 40, left: 50})
    .dimension(sectors_dim)
    .group(employmentSector)
    .transitionDuration(500)
    .x(d3.scaleOrdinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("Sectors")
    .yAxis().ticks(7)
}




