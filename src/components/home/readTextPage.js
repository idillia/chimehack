import React from 'react';
import {Link} from 'react-router';
// import quizBot from './quizBot.js';

import mediaQueries from '../common/mediaQueries.js';


class ReadTextPage extends React.Component {
       
  render() {
    const bulbImg = require("./../../images/bulb_right_cut_down.jpg");
    const worldmapImg = require("./../../images/worldmap_west.jpg");
    
    const divStyle = {overflow: 'hidden', 'marginBottom': '5px', border: "5px solid white"};

    const styles = {
      [mediaQueries.breakpointSmall]: {
        idea: {
          'backgroundImages': "url(" + bulbImg + ")",
          'backgroundSize': 'cover'
        },
        home: {
        }
      }
    };

    return (
      <div> 
        <div  className="chat_window">
    <div  className="top_menu">
      <div  className="buttons">
        <div  className="button close"></div>
        <div  className="button minimize"></div>
        <div  className="button maximize"></div>
      </div>
      <div  className="title"><p></p></div>
    </div>
      
      <ul  className="summary" style={{overflowY:'scroll', height: '400px', paddingLeft: '15px'}}>
      <h1>The Aquatic biome</h1>
       The aquatic biome includes habitats around the world dominated by water. Aquatic ecosystems are divided into two main groups based on their salinity—freshwater habitats and marine habitats. 
Freshwater habitats are aquatic habitats with low levels of salt, less than one percent.  They include rivers, lakes, streams, ponds, swamps, wetlands, bogs and lagoons.
Marine habitats are aquatic habitats with salt concentrations of more than one percent. They include oceans, seas and coral reefs.
Some habitats exist where saltwater and freshwater mix together. These include mud flats, mangroves and salt marshes. Aquatic ecosystems support a diverse assortment of animals including fishes, amphibians, reptiles, mammals, birds and invertebrates.
When evaporated sea water falls as rain, it flows down mountain streams creating rivers and lakes. Rain water feeds freshwater rivers, which then flows back into the sea. Streams, rivers and lakes are home to countless animal species.
The two main types of freshwater habitat are rivers and lakes. Lakes are often fed by streams or rivers. They can also be enclosed areas where species live that are found nowhere else on the planet. Rivers usually contain large animals able to cope with strong currents, as well as animals such as crabs and birds that feed on the fish within the water.
Freshwater rivers provide habitat to a wide variety of species including fish, amphibians, reptiles, insects, birds and mammals. An extraordinary number of fish species inhabit streams and rivers.
Freshwater lakes are also home to a vast variety of wildlife. Some species spend their entire lives in one area. Others visit momentarily to eat and drink. Many species are specially adapted to life in particular lakes. Large mammals, including zebras, primates, giraffes and deer, visit lakes to drink.
Many freshwater habitats have been drastically affected by human activities. Chemicals and pesticides contaminate the water, as well as waste water. Animals and plants that inhabit the water can be affected, as are the animals that eat them.
OCEANS
Oceans create the largest habitat in the world. Countless animal species inhabit the planet's oceans which cover over 75% of the earth.
The two main types of ocean habitat are coastal, inshore habitats found around land, and open ocean habitats that stretch around the planet. More animal species live in the rich, shallower waters than the deep sea, though animals live throughout the oceans.
The ocean landscape is as vast and varied as on land, featuring underwater continental shelves, mountains, valleys, volcanoes, trenches and plains.
Warmer, coastal waters around the globe are home to the majority of species. These areas feature more food sources than the deep ocean. Smaller aquatic animals often inhabit the shallower regions. Coastal waters provide them with a variety of places to hide, with fewer large predators. Larger animals tend to prefer deeper regions beneath the waves along the continental shelves.
Plankton -- microscopic plants and animals, fish eggs and animals in their larvae form -- provide a plentiful food source for many marine animals. Tiny fishes and crustaceans, to the largest animal on the planet, the blue whale, feed on this vital food source.
The two largest threats to ocean habitats are over-fishing and pollution. Pollution from the land and air accumulate in the sea with devastating effects to many plant and animal species. Over-fishing threatens many species with extinction.
CORAL REEFS
Coral reefs are the richest habitats on the earth. Found along the coastlines, they provide habitat to countless plant and animal species including fish, reptiles, invertebrates, echinoderms and crustaceans. Coral reefs are located in the tropical and sub-tropical coastal regions where it is always warm, day and night, year-round.
The two main types of coral reef habitats are soft coral reefs and hard coral reefs. Soft corals are animals that move through the water, eventually settling. Hard corals are the reef-building corals that are hard coral shells left behind when corals die.
The largest coral reefs are located along the south-west coast of Africa, in the Caribbean and all around Australia, south-east Asia and the coastal regions of the South Pacific Ocean.
So rich in life and biodiversity, coral reefs are home to an incredible variety animal species able to survive together with little competition for food. Animal species that inhabit coral reefs vary tremendously in shape, size and color. Sea urchins, starfish and crustaceans are invertebrates that call coral reefs home. Sea snakes hunt small fish and eels in the coral reefs. Eels and seahorses are among the many fish species. Sharks do not live permanently in coral reefs, but visit often in search of prey. Sea turtles also make frequent trips to coral reefs in search of food.
The threats to coral reefs and coastline wildlife include commercial fishing, pollution and storms. Dredging involves dragging fishing nets across the sea bed, destroying coral reefs in the process. Many animal species that inhabit coral reefs are on the brink of extinction. Sea storms, such as tsunamis, can also wreak havoc on coral reef environments.
Wetlands are found throughout the world, often in more temperate regions where vegetation grows quickly. These large areas of water contain a wealth of plants and are broken up by small islands of land. Wetlands include swamps, marshes, fens and bogs. Many wildlife species are specifically adapted to wetland environments, including fish, amphibians, birds, mammals, reptiles and insects.
The two main types of shallow watery areas are swamps and wetlands. Swamps are usually located in forested areas. Trees, such as mangrove trees, survive in salt-water conditions and require ample space for their roots. Wetlands are usually near large rivers or estuaries that flood when river banks burst from a lot of rain.
Mangrove swamps are one of the richest habitats on the planet. Numerous animals species live above and below the water's surface. Many animal species that live in mangrove forests are found nowhere else on earth. The mangrove tree's enormous roots provide shelter to small fishes, amphibians and reptiles and provide a way for the animals to get in and out of the water. Larger animals have ample fish to feed on.
Large aquatic birds such as heron spear fish with long beaks in wetland habitats. Salt-water swamps contain snapping turtles, crabs, crocodiles and alligators. Amphibians and reptiles inhabit the water's edge. Many insects live, and lay their eggs, in wetland habitats...providing food for frogs and lizards.
The main threats to wetlands are deforestation and pollution. The animals in wetland habitats are specifically adapted to their environment and are vulnerable to toxins in the water and air.
Islands form when land breaks away from large land masses or volcanoes erupt on the sea floor. They are found throughout the world. Their isolated nature results in unique wildlife species, often different from their counterparts living in mainland habitats. Some island animal species have developed completely separately from mainland species.
Numerous habitats including forests, wetlands, deserts and tundra can be found on different islands. Limited in size and resources, ecosystems on islands are fragile and easily disturbed. Human activity and the introduction of new species on islands has caused much harm, making many species endangered or extinct. With nowhere else for them to go, the loss of habitat or food sources is particularly damaging to island animals.
Lemurs live only on the island of Madagascar, the tree kangaroo only in Papua New Guinea, the kiwi only in New Zealand and the orangutan only on the Indonesian islands of Borneo and Sumatra. Separated from the mainland, these species have adapted to their isolated environments. The kiwi and the kakapo birds have adapted to a flightless lifestyle since there were no large predators on the islands to flee from. The introduction of predators by humans threatens their survival. Orangutans suffer from mass deforestation in south-east Asia and the exotic pet trade.
A breaking point has been reached in conserving the fragile habitats of islands. Without immediate action to save these precious ecosystems, many species will be lost forever.

      </ul>
      <div  className="bottom_wrapper clearfix">
        <a href="quizPage" target="_self">
          <img src={require("./../../images/quizIcon.jpg")}  className="icon1" width="50" height="50"></img>
        </a>
        <a href="qestion" target="_self">
        <img src={require("./../../images/questionICon.png")}  className="icon2" width="50" height="50" style={{float: 'right'}}></img>
        </a>

        </div>
      
      </div>
      </div>  
      );
  }
}




export default ReadTextPage;


