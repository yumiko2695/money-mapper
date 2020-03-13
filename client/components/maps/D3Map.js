import * as d3 from 'd3'

const data = [20, 40, 50, 15, 25, 80]

export default class D3Map {
  constructor(element) {
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', 500)
      .attr('height', 500)

    const rects = svg.selectAll('rect').data(data)

    rects
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 100) //how you set their position
      .attr('width', 40)
      .attr('height', d => d)
      .attr('fill', 'pink')

    // this is how to you could loop through a data array but you should use data.join
    // data.forEach((d,i) => {
    //   svg.append("rect")
    //     .attr("x", i *100)
    //     .attr("width", 40)
    //     .attr("height", d)
    //     .attr("fill", "pink")
    // })
  }
}
