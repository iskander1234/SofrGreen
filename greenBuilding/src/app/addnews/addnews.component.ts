import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent{

  addTitle = '';
  addDescription = '';

  news : [{ title: string; description: string}] = [{
    title: 'How do you convert a normal building to a green building?',
    description: 'Other combining methods can be the usage of rooftop solar system and solar wind hybrid systems. Both can easily balance the requirement of fossil fuel-based energy, thus, reducing carbon footprint. Another great option can be of using more recycled materials. Recycling and reuse of waste water with the right treatment, making use of organic as well as inorganic solid waste for more purposeful uses like composting and power generation, can complement further in converting existing buildings into green ones.As estimated by the Indian Green Building Council, at present there are only 2,204 certified green buildings in India, but it is projected to rise to about one lakh by 2025. These certified green building will include offices, hospitals, hotels, IT parks, banks, airports, residential complexes, special economic zones (SEZ) and townships. The role of public policy and leadership can trigger the industry in constructing more green buildings. Considering the hidden costs and market failures that describe the construction industry, stringent regulatory measures are likely to be the most effective and cost-efficient in bringing about a green transformation of the sector.'
  },
  ];

  // tslint:disable-next-line:typedef
  addNews() {
    this.news.push({
      title: this.addTitle,
      description: this.addDescription,
    });
    // this.addData = '';
    // this.addDistance = '';
    // this.addTime = '';
  }
}
