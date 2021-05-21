import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-best',
  templateUrl: './the-best.component.html',
  styleUrls: ['./the-best.component.css']
})
export class TheBestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title : string = 'Four of the World\'s Greenest Buildings';

  communitiess : Array<any> = [
    {fileName : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLD8kgJkVeF69IJcp_h7xeImj18dqTeA2gAFr9BLc-6HhXkCiXsnqslG6LTWjCbd-F6vU&usqp=CAU', communitiesName : 'The Edge - Amsterdam, Netherlands', descriptions : 'The Edge, Deloitte’s Amsterdam headquarters, earned a Building Research Establishment Environmental Assessment Methodology (BREEAM) of 98.36 percent, which at the time was the highest BREEAM score ever attained. The Edge was beaten out by the Geelen Counterflow headquarters in Haelen, Netherlands which achieved a BREEAM score of 99.94 percent.'},
    {fileName : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC71b8x28FYhayUmIZbdYoibv19bcZzxrX9orzkLWHrMv2-3j1BTdC7M5LFe43FDEBmTw&usqp=CAU', communitiesName : 'Bullitt Center - Seattle, Washington.', descriptions : 'The Bullitt Center was the first office building to earn Living Building certification from the International Living Future Institute’s (ILFI) Living Building Challenge. The Living Building Challenge is easily the most stringent green and sustainable building certification program in existence. There are 27 imperatives that must be met to receive certification, including a requirement that the building be built on a previously developed site which includes greyfields and brownfields.'},
    {fileName : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyGn1Wm2Z84A-B64tyiH58onbFecfUTra30LPIpmvwKp6rYU81RemVvX4998vLFk1cjw&usqp=CAU', communitiesName : 'Shanghai Tower - Shanghai, China.', descriptions : 'Shanghai Tower, the world’s second tallest building behind Burj Khalifa, has received both LEED Core and Shell Platinum certification and a 3 Star rating from China’s Green Building Evaluation Standard. The building used locally sourced and recycled materials in its construction. The 120° curvature of the building, which was designed to reduce wind loads, is visually stunning and allowed for lighter materials to be used for the structural elements of the building.'},
    {fileName : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4v04zoRgYhvior-RdHaM2y11bmkPRGmAdiEl9UK_gmEN0rLliv4fieb67qmpoc6UH54&usqp=CAU', communitiesName : 'DPR Construction\'s Phoenix Regional Office - Phoenix, Arizona.', descriptions : 'Powerhouse is a collaboration of companies including Skanska, the architectural firm Snøhetta, the environmental group ZERO and others that are dedicated to developing energy positive buildings. The Powerhouse Kjørbo involved the renovation of two 28,000 sq ft buildings built in 1980. To be energy positive, the building needs to generate not only the energy required to operate the building but to also cover the energy used to produce the building materials, construction and eventual demolition throughout its 60-year life expectancy.'},
  ];

}
