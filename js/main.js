var employmentData = [
{"Category": "Full time", "Year": "2017", "Sectors": "Chemicals", "Employees": 26868},
{"Category": "Part time", "Year": "2017", "Sectors": "Chemicals", "Employees": 4109},
{"Category": "Full time", "Year": "2017", "Sectors": "Clothing", "Employees": 1221},
{"Category": "Part time", "Year": "2017", "Sectors": "Clothing", "Employees": 290},
{"Category": "Full time", "Year": "2017", "Sectors": "Electronic Eqp.", "Employees": 22382},
{"Category": "Part time", "Year": "2017", "Sectors": "Electronic Eqp.", "Employees": 1778},
{"Category": "Full time", "Year": "2017", "Sectors": "C/E/W/W", "Employees": 14825},
{"Category": "Part time", "Year": "2017", "Sectors": "C/E/W/W", "Employees": 1006},
{"Category": "Full time", "Year": "2017", "Sectors": "Drink and Tobacco", "Employees": 3737},
{"Category": "Part time", "Year": "2017", "Sectors": "Drink and Tobacco", "Employees": 422},
{"Category": "Full time", "Year": "2017", "Sectors": "Food", "Employees": 45341},
{"Category": "Part time", "Year": "2017", "Sectors": "Food", "Employees": 6379},
{"Category": "Full time", "Year": "2017", "Sectors": "Medical Eqp.", "Employees": 27642},
{"Category": "Part time", "Year": "2017", "Sectors": "Medical Eqp.", "Employees": 4024},
{"Category": "Full time", "Year": "2017", "Sectors": "Coding", "Employees": 29958},
{"Category": "Part time", "Year": "2017", "Sectors": "Coding", "Employees": 1599},
{"Category": "Full time", "Year": "2017", "Sectors": "Finance", "Employees": 28349},
{"Category": "Part time", "Year": "2017", "Sectors": "Finance", "Employees": 2062},

];

var ndx = crossfilter(employmentData);

var sectors_dim = ndx.dimension(dc.pluck("Sectors"));

var sectorCategory = sectors_dim.group().reduceSum(dc.pluck("Employees"));

dc.barChart("#employmentType")
            .width(1000)
            .height(500)
            .margins({ top: 10, right: 50, bottom: 50, left: 100 })
            .dimension(sectors_dim)
            .group(sectorCategory)
            .transitionDuration(500)
            .x(d3.scaleOrdinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Employees")
            .yAxis().ticks(7);

/*
dc.pieChart("#")
            .height(500)
            .radius(400)
            .margins({ top: 10, right: 50, bottom: 30, left: 100 })
            .dimension()
            .group()
            .transitionDuration(500)
            .x(d3.scaleOrdinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Employees")
            .yAxis().ticks(7); */



dc.renderAll();