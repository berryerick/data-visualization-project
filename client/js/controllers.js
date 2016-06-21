project_week.controller('colorsController', function(packageFactory){
  console.log('in colorsController')
  var that = this
  that.errors = []

  packageFactory.start(

  function(digestedData){
  that.packageData = digestedData
  that.hueHistogram = function(data){
        var width = 100
        var canvas = d3.select("div.hueHistogram").append('svg')
          .attr('width', "100%")
          .attr('height', '100%')
          // .attr('vertical-align', "bottom")

        var x = d3.scale.linear()
          // .domain({0,width})
        canvas.selectAll("rect")
          .data(data)
          .enter()
            .append('rect')
            .attr('height', '10%')
            .attr('width', (100/18)+'%')
            .attr('x', function(d,i){ return (i*(100/18))+"%" })
            .attr('y', '90%')
            .attr('fill', function(d){ return d.color })
            .attr('class', "hue-rect")
            .transition()
              .delay(200)
              .duration(200)
              .ease('linear')
              .attr('height', function(d){
                return ((d.count/that.packageData.maxHueCount)*100 + '%')
                })
              .attr('y', function(d){ return (100-((d.count/that.packageData.maxHueCount)*100))+ '%'})

      }
      console.log(that.packageData.hues);
that.hueHistogram(that.packageData.hues)
})

})

project_week.controller('locationsController', function(packageFactory){
  console.log('in locationsController')
  var that = this
  that.errors = []

  packageFactory.start(function(digestedData){
    that.packageData = digestedData


  // that.getPackages = function(){
  //   packageFactory.getData(function(data){
  //     that.packageData = data
  //   })
  // }
  // that.getPackages()
  // console.log(that.packageData);




// create heat map

  packageFactory.heatMap(function(data){
      // var canvX = 100
      // var canvY = 100
      var canvas = d3.select('div.allClicksHeatMap').append('svg')
      .attr('width', '100%')
      .attr('height', '100%')

    canvas.append("rect")
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', '#304040')

    for (var i = 10; i < 100; i += 10) {
      canvas.append('line')
        .attr('class', 'grid' )
        .attr('x1', 0 )
        .attr('y1', i + '%')
        .attr('x2', '100%')
        .attr('y2', i + '%')

      canvas.append('line')
        .attr('class', 'grid' )
        .attr('y1', 0 )
        .attr('x1', i + '%')
        .attr('y2', '100%')
        .attr('x2', i + '%')

    }

    canvas.selectAll("circle")
      .data(data)
      .enter()
        .append('circle')
        .attr('cx', function(d){
          // console.log(d);
          return (d.x+"%")
        })
        .attr('cy', function(d){return d.y+"%" })
        .attr('r', "2%")
        // .attr('fill',function(d){return d.color} )
        .attr('fill', 'white' )
        .attr('opacity', '.2')
        .attr('class', 'heatMapCircle')


  })

  })

})

project_week.controller('timesController', function(packageFactory){
  that.errors = []
  var that = this

  that.getPackages = function(){
      that.packageData = {
        colorGradientByGuess: packageFactory.colorGradientByGuess,
        colorGradientByGame: packageFactory.colorGradientByGame,
        totalAvgColor: packageFactory.totalAvgColor,
        buttonPresses: packageFactory.buttonPresses,
        hues: packageFactory.hues,
        maxHueCount: packageFactory.maxHueCount,
        totalClicks: packageFactory.totalClicks,
        coordinates: packageFactory.coordinates,
      }
  }

  that.getPackages()

  console.log(that.packageData);

  packageFactory.clicksOverTime(function(data){

    var canvas = d3.select('div.clicksOverTime').append('svg')
    .attr('width', '100%')
    .attr('height', '100%')

    var background = canvas.append("rect")
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', '#304040')

    // var Xaxis =
  //   var line = d3.svg.line()
  //                 .ax(function(d, i){ return (i/data.length)*100 + "%"})
  //                 .y(function(d, i){ return (i/data.length)*100 + "%"})
  //
  })

})
