require('dotenv').config();
const express = require('express');
const { link } = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
document = 'i'

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

  const card = [
    {
      title: "Excavation",
      text: "We provide reliable and precise excavation services.",
      img: "/images/index.png",
      link: "/excavation"
      
    },
    {
      title: "Concrete Removal",
      text: "Expert concrete demolition and disposal solutions.",
      img: "/images/ConcreteRemoval.png",
      link: "/concrete-removal"
      
    },
    {
      title: "Land Clearing",
      text: "Efficient clearing of land and brush for your projects.",
      img: "/images/LandClearing.png",
      link: "/land-clearing"
      
    },
    {
      title: "Backfill",
      text: "Professional backfill services for construction sites.",
      img: "/images/Backfill.png",
      link: "/backfill"
    },
    {
      title: "Hardscaping",
      text: "Transform your outdoor spaces.",
      img: "/images/Hardscaping.png",
      link: "/hardscaping"
    },
    {
      title: "Snow Removal",
      text: "Reliable snow removal services for residential and commercial properties.",
      img: "/images/SnowRemoval.png",
      link: "/snow-removal"
    }
  ];
    res.render('index', { title: 'Home',card});
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});