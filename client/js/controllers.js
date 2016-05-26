project_week.controller('colorsController', function(packageFactory){
  console.log('in packagesController')
  var that = this
  this.errors = []

  this.getPackages = function(){
    packageFactory.getData(function(data){
      that.packageData = data
    })
  }
  this.getPackages()
  // console.log(this.packageData);

  this.hues = this.packageData.hues
  this.maxHueCount = this.packageData.maxHueCount
  this.colorGradientByGuess = this.packageData.colorGradientByGuess
  this.colorGradientByGame = this.packageData.colorGradientByGame
  this.totalAvgColor = this.packageData.totalAvgColor

  packageFactory.hueHistogram( function(data){
        var width = 100
        var canvas = d3.select("div.hueHistogram").append('svg')
          .attr('width', "100%")
          .attr('height', 280)
          .attr('vertical-align', "bottom")

        var x = d3.scale.linear()
          // .domain({0,width})
        canvas.selectAll("rect")
          .data(data)
          .enter()
            .append('rect')
            .attr('height', function(d){
              return ((d.count/that.maxHueCount)*100 + '%')
            })
            .attr('width', (100/18)+'%')
            .attr('x', function(d,i){ return (i*(100/18))+"%" })
            .attr('y', function(d){ return (100-((d.count/that.maxHueCount)*100))+ '%'})
            .attr('fill', function(d){ return d.color })
            .attr('class', "hue-rect")
      })


})

project_week.controller('locationsController', function(packageFactory){
  console.log('in locationsController')
  var that = this
  this.errors = []

  this.getPackages = function(){
    packageFactory.getData(function(data){
      that.packageData = data
    })
  }
  this.getPackages()
  // console.log(this.packageData);




// create heat map

  packageFactory.heatMap(1500, 1080, function( boardX, boardY, data){
      var canvX = 100
      var canvY = 100
      var canvas = d3.select('div.allClicksHeatMap').append('svg')
      .attr('width', '100%')
      .attr('height', 560)


      // .attr('width', boardX/2 +100)
      // .attr('height', boardY/2 +100)

      // .attr('fill', '#888888')
    //
    // var x = d3.scale.identity().domain([0,boardX])
    // var y = d3.scale.identity().domain([0,boardY])
    // var xAxis = d3.svg.axis().scale(x).ticks(0).orient('bottom')
    // var yAxis = d3.svg.axis().scale(y).ticks(0).orient('right')

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
        .attr('cx', function(d){return ((d.data.x)/boardX)*100 +"%" })
        .attr('cy', function(d){return ((d.data.y)/boardY)*100 +"%" })
        .attr('r', 10)
        .attr('fill', 'rgba(240, 100,100, .7)')



  })

})
