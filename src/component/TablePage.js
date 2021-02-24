import React, { Component } from 'react';

export default class TablePage extends Component {
  render() {
    return (
      <div>
        <h1>Types of Fruit</h1>
        <table className="fruits-table">
          <tr className="fruits-table">
            <th className="fruits-table">Type of Fruit</th>
            <th className="fruits-table">Wikipedia Snippet</th>
            <th className="fruits-table">Link to more info</th>
          </tr>
          <tr className="fruits-table">
            <td className="fruits-table">Apple</td>
            <td className="fruits-table">
              Apple trees are large if grown from seed. Generally, apple cultivars are propagated by
              grafting onto rootstocks, which control the size of the resulting tree. There are more
              than 7,500 known cultivars of apples, resulting in a range of desired characteristics.
              Different cultivars are bred for various tastes and use, including cooking, eating raw
              and cider production. Trees and fruit are prone to a number of fungal, bacterial and
              pest problems, which can be controlled by a number of organic and non-organic means.
              In 2010, the fruit's genome was sequenced as part of research on disease control and
              selective breeding in apple production.
            </td>
            <td className="fruits-table">
              <a href="https://en.wikipedia.org/wiki/Apple">Click here</a>
            </td>
          </tr>
          <tr className="fruits-table">
            <td className="fruits-table">Banana</td>
            <td className="fruits-table">
              A banana is an elongated, edible fruit – botanically a berry – produced by several
              kinds of large herbaceous flowering plants in the genus Musa. In some countries,
              bananas used for cooking may be called "plantains", distinguishing them from dessert
              bananas. The fruit is variable in size, color, and firmness, but is usually elongated
              and curved, with soft flesh rich in starch covered with a rind, which may be green,
              yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the
              top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from
              two wild species – Musa acuminata and Musa balbisiana. The scientific names of most
              cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the
              hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The
              old scientific name for this hybrid, Musa sapientum, is no longer used.
            </td>
            <td className="fruits-table">
              <a href="https://en.wikipedia.org/wiki/Banana">Click here</a>
            </td>
          </tr>
          <tr className="fruits-table">
            <td className="fruits-table">Tomato</td>
            <td className="fruits-table">
              The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a
              tomato plant. The species originated in western South America and Central America. The
              Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word
              tomate, from which the English word tomato derived. Its domestication and use as a
              cultivated food may have originated with the indigenous peoples of Mexico. The Aztecs
              used tomatoes in their cooking at the time of the Spanish conquest of the Aztec
              Empire, and after the Spanish encountered the tomato for the first time after their
              contact with the Aztecs, they brought the plant to Europe. From there, the tomato was
              introduced to other parts of the European-colonized world during the 16th century.
            </td>
            <td className="fruits-table">
              <a href="https://en.wikipedia.org/wiki/Tomato">Click here</a>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
