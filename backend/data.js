import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "Pallukuru mohan kumar",
      email: "mohan@gmail.com",
      password: bcrypt.hashSync("123123123"),
      isAdmin: true,
    },
  ],
  products: [
    {
      // _id: '5',
      name: "South Indian thali",
      slug: "south-indian-thali",
      category: "Veg",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Ab1yfmkQZWRUNzhLtIgmbQHaF7&pid=Api&P=0&h=180",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      brand: "thali",
      description: "indian food",
    },

    {
      // _id: '6',
      name: "north indian thali",
      slug: "north-indian-thali",
      category: "Lunch,Dinner",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.MQiH8txIA6qbo9u8qGofqAHaFP&pid=Api&P=0&h=180",
      price: 200,
      countInStock: 8,
      rating: 4.5,
      numReviews: 10,
      brand: "thali",
      description: "indian food",
    },
    {
      // _id: '7',
      name: "veg Biriyani",
      slug: "veg-Biriyani",
      category: "Lunch,Dinner",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.5IpU3LLLQr8XT8l5HZ_MswHaFO&pid=Api&P=0&h=180",
      price: 100,
      countInStock: 9,
      rating: 4.5,
      brand: "Biriyani",
      numReviews: 10,
      description: "hot too spicy",
    },
    {
      // _id: '8',
      name: "paneer butter masala",
      slug: "paneer-butter-masala",
      category: "Main Course",
      image:
        "https://speakingaloud.in/wp-content/uploads/2020/04/Paneer-Butter-Masala-Recipe.jpg",
      price: 300,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      brand: "masala",
      description: "tasty gravy",
    },
    {
      // _id: '9',
      name: "veg pizza",
      slug: "veg-pizza",
      category: "Main Course",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.7uAxD_MkDYTeoKtxaUANZwHaEu&pid=Api&P=0&h=180",
      price: 250,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      brand: "pizza",
      description: "Classic pizza with tomato sauce and cheese",
    },
    {
      // _id: '10',
      name: "veg rolls",
      slug: "veg-rolls",
      category: "Main Course",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.nBJ8WuK-rGQaq-GYjYXOqAHaEK&pid=Api&P=0&h=180",
      price: 80,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      brand: "rolls",
      description: "spicy rools",
    },
    {
      // _id: '11',
      name: "mushroom fried rice ",
      slug: "mushroom-fried-rice ",
      category: "main course",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.fTyEtB0yJuzsD6NCN5aZNQHaFA&pid=Api&P=0&h=180",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "rice",
      numReviews: 10,
      description: "tasty&delicious ",
    },
    {
      // _id: '12',
      name: "egg fried rice",
      slug: "egg-fried-rice",
      category: "Fast Food",
      image:
        "https://sweetandsavorymeals.com/wp-content/uploads/2020/04/egg-fried-rice-recipe-facebook.jpg",
      price: 120,
      countInStock: 5,
      rating: 4.5,
      brand: "rice",
      numReviews: 10,
      description: "double egg flavoured fried rice",
    },

    {
      // _id: '13',
      name: "masala Dosa",
      slug: "masala-Dosa",
      category: "Tiffin",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.SiGgddY4nncFXqtqHrfWFgHaE8&pid=Api&P=0&h=180",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "Dosa",
      numReviews: 10,
      description: "crunchy Dosa",
    },
    {
      // _id: '14',
      name: "veg burger",
      slug: "veg-burger",
      category: "Main Course",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.BFXTXw0InfmOmJkzlSW6FgHaE8&pid=Api&P=0&h=180",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "burger",
      numReviews: 10,
      description: "big size burger",
    },
    {
      // _id: '15',
      name: "sandwich",
      slug: "sandwich",
      category: "Main Course",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Ec8W5lLU9JV1b24cq5nWIgHaE8&pid=Api&P=0&h=180",
      price: 120,
      countInStock: 5,
      rating: 4.5,
      brand: "sandwich",
      numReviews: 10,
      description: "tasty food",
    },
    {
      // _id: '16',
      name: "panner fried rice",
      slug: "panner-fried -rice",
      category: "Fast food",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.aKVH9Tc4-_6cVwO7vST1HQHaE9&pid=Api&P=0&h=180",
      price: 380,
      countInStock: 5,
      rating: 4.5,
      brand: "rice",
      numReviews: 10,
      description: "spicy indian food",
    },
    {
      // _id: '17',
      name: "Bagara rice",
      slug: "Bagara-rice",
      category: "Fast food",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.trFmy14g8I7odiwL34XRGQHaHa&pid=Api&P=0&h=180",
      price: 200,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      brand: "rice",
      description: "andhra style food",
    },
    {
      // _id: '18',
      name: "Chicken Wings",
      slug: "Chicken-Wings",
      category: "Starters",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.fBvwX7wo8zvdGbJVgGsq5QHaGr&pid=Api&P=0&h=180",
      price: 150,
      countInStock: 10,
      numReviews: 10,
      rating: 4.5,
      brand: "wings",
      description: "Deliciously crispy chicken wings",
    },
    {
      // _id: '19',
      name: "chicken fry",
      slug: "chicken-fry",
      category: "Starters",
      image:
        "https://2.bp.blogspot.com/-kUeZ475Duyw/UUzNXCv2LkI/AAAAAAAAF3I/PgFYd7wYklM/s1600/IMG_7495.JPG",
      price: 125,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      brand: "fry",
      description: "Deliciously crispy chicken fry",
    },
    {
      // _id: '20',
      name: "Chicken Lollipop",
      slug: "Chicken-Lollipop",
      category: "Starters",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.J4AlXu8qq3wwGZbV20YZPQHaE7&pid=Api&P=0&h=180",
      price: 250,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      brand: "Lollipop",
      description: "Deliciously crispy chicken lollipops",
    },
    {
      // _id: '21',
      name: "Chicken Tandoori",
      slug: "Chicken-Tandoori",
      category: "Starters",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.21xfGQ9jUczQhBfBTgASHwHaEJ&pid=Api&P=0&h=180",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      brand: "Tandoori",
      description: "Deliciously crispy Chicken Tandoori ",
    },
    {
      // _id: '22',
      name: "Chicken Grill",
      slug: "Chicken-Grill",
      category: "Starters",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.zWNdxA3lvk0Qz6GfqyIJ0wHaE7&pid=Api&P=0&h=180",
      price: 250,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      brand: "Grill",
      description: "Deliciously crispy Chicken grill ",
    },
    {
      // _id: '23',
      name: "chicken tikka ",
      slug: "chicken-tikka",
      category: "Main Course",
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min.jpg",
      price: 250,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      brand: "tikka",
      description: "Deliciously crispy Chicken tikka",
    },
    {
      // _id: '24',
      name: "fish fry",
      slug: "fish-fry",
      category: "Starters",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.LDx01nvywhRgm1h1SkLINQHaGN&pid=Api&P=0&h=180",
      price: 450,
      numReviews: 10,
      countInStock: 5,
      rating: 4.5,
      brand: "fry",
      description: "spicy and cricpy",
    },
    {
      // _id: '25',
      name: "Mutton biriyani special",
      slug: "Mutton-biriyani-special",
      category: "Lunch ,Dinner",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.hFDDix1B1rKxswSmWxfzxwHaHa&pid=Api&P=0&h=180",
      price: 550,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      brand: "special",
      description: "tasty indian food ",
    },
    {
      // _id: '26',
      name: "Prawns fry",
      slug: "Prawns-fry",
      category: "Starters",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.nX9hpdbSoovHBthkVYdU3wHaFl&pid=Api&P=0&h=180",
      price: 250,
      countInStock: 5,
      numReviews: 10,
      rating: 4.5,
      brand: "fry",
      description: "hot too spicy",
    },
    {
      // _id: '27',
      name: "Crab masala",
      slug: "Crab-masala",
      category: "Main Course",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.K5-FLWI7hgw2QMhb9RDDLgHaFj&pid=Api&P=0&h=180",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "masala",
      numReviews: 10,
      description: "hot too spicy",
    },
    {
      // _id: '28',
      name: "Chicken Biriyani",
      slug: "Chicken-Biriyani",
      category: "Lunch ,Dinner",
      image:
        "https://finmail-site-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/06/12173426/Hyderabadi-chicken-Biryani-1.jpg",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "Biriyani",
      numReviews: 10,
      description: "hot spicy biriyani",
    },
    {
      // _id: '29',
      name: "Papdi chaat",
      slug: "Papdi-chaat",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/1417393033/photo/papdi-chaat-indian-street-food.jpg?s=612x612&w=0&k=20&c=MLB-SW3Js__wv5pW3g4CEOQs7wJVMFV9mJEs_3aIZ6w=",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "chaat",
      numReviews: 10,
      description: "chapata chat",
    },

    {
      // _id: '30',
      name: "Aloo chaat",
      slug: "Aloo-chaat",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/1198449763/photo/aloo-chaat-or-alu-chat-is-a-popular-street-food-originating-from-the-indian-subcontinent.jpg?s=612x612&w=0&k=20&c=HvilTEbwB3hFEWqdhq6SF3I64BDZW1SGJPkmJmtcWBw=",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "chaat",
      numReviews: 10,
      description: "chapata chat",
    },

    {
      // _id: '31',
      name: "Sweet and Salty Papdi",
      slug: "Sweet-and-Salty-Papdi",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/1191064450/photo/seet-and-salty-papdi-chaat.jpg?s=612x612&w=0&k=20&c=C7rsLwOxxAguk6lTgFaARS-O5gX-K1BJBFFWxcs0bIg=",
      price: 60,
      countInStock: 5,
      rating: 4.5,
      brand: "chaat",
      numReviews: 10,
      description: "chapata chat",
    },

    {
      // _id: '32',
      name: "Shahi Aloo Tokri Chaat",
      slug: "Shahi-Aloo-Tokri-Chaat",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/502050688/photo/shahi-aloo-tokri-chaat-or-potato-basket.jpg?s=1024x1024&w=is&k=20&c=vsQ_9v_OnTX9zaNdz3MM5tmgSuZMQYdWBekowpkmsa4=",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "chaat",
      numReviews: 10,
      description: "chapata chat",
    },

    {
      // _id: '33',
      name: "pani puri",
      slug: "pani-puri",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=612x612&w=0&k=20&c=l6akiKMfTLE9nR4VonhiOZpZGDY4aEjimAN-BSskF-A=",
      price: 80,
      countInStock: 5,
      rating: 4.5,
      brand: "puri",
      numReviews: 10,
      description: "chapata chat",
    },

    {
      // _id: '34',
      name: "Sev Puri",
      slug: "Sev-Puri",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/525340605/photo/sev-puri-chat-item-india.jpg?s=612x612&w=0&k=20&c=GjfkN1SoKtHtY0G_YthWt-3okpM7gbLBCOKXAJKV3gc=",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "puri",
      numReviews: 10,
      description: "chapata chat",
    },

    {
      // _id: '35',
      name: "Bhelpuri",
      slug: "Bhel-puri,",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/468115492/photo/bhelpuri-chat-food-india.jpg?s=612x612&w=0&k=20&c=NzYBl0jsri7W1d7j0lvzPkYT4KFeujYRWyQqD3G76_o=",
      price: 80,
      countInStock: 5,
      rating: 4.5,
      brand: "puri",
      numReviews: 10,
      description: "chapata chat",
    },

    {
      // _id: '36',
      name: "Rajma Chaat",
      slug: "Rajma-Chaat",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/1423395185/photo/rajma-chaat.jpg?s=612x612&w=0&k=20&c=nRgG_xfs_ypyTilvR5KeOFwuYkKfd7_kwXZmedywZ8A=",
      price: 50,
      countInStock: 5,
      rating: 4.3,
      brand: "Chaat",
      numReviews: 10,
      description: "chapata chat",
    },

    {
      // _id: '37',
      name: "Chole Bhature ",
      slug: "Chole-Bhature ",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/1250629829/photo/black-chickpea-chaat-or-kala-chana-chat-recipe.jpg?s=612x612&w=0&k=20&c=wCXzVXlUEQ0vNe_aKX8-4Lq1F5mnzWW40LzgbDTuwlI=",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "Chaat",
      numReviews: 10,
      description: "masala chat",
    },

    {
      // _id: '38',
      name: "Chaat Dahi vada ",
      slug: "Chaat-Dahi-vada",
      category: "chat items",
      image:
        "https://media.istockphoto.com/id/1323287367/photo/chaat-dahi-vada-prepared-by-soaking-vadas-in-thick-curd-garnished-with-cumin-and-green-fresh.jpg?s=612x612&w=0&k=20&c=Xhq2bLXLlTE-cy8-UgkMUON9B-tPzKgsuZw3OWDK6Bc=",
      price: 70,
      countInStock: 5,
      rating: 4.5,
      brand: "vada",
      numReviews: 10,
      description: "masala chat",
    },

    {
      // _id: '40',
      name: "Angel Food Cake",
      slug: "Angel-Food-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/angel-food-cake.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "cake",
      numReviews: 10,
      description: "tasty cakes",
    },

    {
      // _id: '41',
      name: "Apple Cake",
      slug: "Apple-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/Apple-cake.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "Cake",
      numReviews: 10,
      description: "tasty cakes",
    },

    {
      // _id: '42',
      name: "Black Forest Cake",
      slug: "Black-Forest-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/black-forest-cake.jpg",
      price: 200,
      countInStock: 5,
      rating: 4.5,
      brand: "Cake",
      numReviews: 10,
      description: "tasty cakes",
    },

    {
      // _id: '43',
      name: "Brownie Cake",
      slug: "Brownie-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/brownie-cake.jpg",
      price: 220,
      countInStock: 5,
      rating: 4.5,
      brand: "Cake",
      numReviews: 10,
      description: "tasty cakes",
    },

    {
      // _id: '44',
      name: "Chocolate Cake",
      slug: "Chocolate-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/chocolate-cake.jpg",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "Cake",
      numReviews: 10,
      description: "tasty cake",
    },

    {
      // _id: '44',
      name: "Chocolava Cake",
      slug: "Chocolava-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/chocolava-cake.jpg",
      price: 230,
      countInStock: 5,
      rating: 4.5,
      brand: "cake",
      numReviews: 10,
      description: "tasty cake",
    },

    {
      // _id: '45',
      name: "Fruit Cake",
      slug: "Fruit-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/fruit-cake.jpg",
      price: 240,
      countInStock: 5,
      rating: 4.5,
      brand: "cake",
      numReviews: 10,
      description: "tasty cake",
    },

    {
      // _id: '46',
      name: "Heart-Shaped Cake",
      slug: "Heart-Shaped-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/heart-shaped-cake.jpg",
      price: 240,
      countInStock: 5,
      rating: 4.5,
      brand: "cake",
      numReviews: 10,
      description: "tasty cake",
    },

    {
      // _id: '47',
      name: "Ice Cream Cake",
      slug: "Ice-Cream-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/ice-cream-cake.jpg",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "cake",
      numReviews: 10,
      description: "tasty cake",
    },

    {
      // _id: '48',
      name: "Red Velvet Cake",
      slug: "Red-Velvet-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/red-velvet-cake.jpg",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "cake",
      numReviews: 10,
      description: "tasty cake",
    },

    {
      // _id: '49',
      name: "Rainbow Cake",
      slug: "Rainbow-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/rainbow-cake.jpg",
      price: 200,
      countInStock: 5,
      rating: 4.5,
      brand: "cake",
      numReviews: 10,
      description: "tasty cake",
    },

    {
      // _id: '50',
      name: "King Cake",
      slug: "King-Cake",
      category: "Cake",
      image:
        "https://www.bakingo.com/blog/wp-content/uploads/2020/06/king-cake.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "cake",
      numReviews: 10,
      description: "tasty cake",
    },

    {
      // _id: '51',
      name: "French Ice Creams",
      slug: "French-Ice-Creams",
      category: "Ice Creams",
      image:
        "https://stylesatlife.com/wp-content/uploads/2018/09/French-ice-creams.jpg",
      price: 220,
      countInStock: 5,
      rating: 4.5,
      brand: "ice creams",
      numReviews: 10,
      description: "ice creams",
    },

    {
      // _id: '52',
      name: "Ice Cream Cones",
      slug: "Ice-Cream-Cones",
      category: "Ice Cream",
      image:
        "https://www.shutterstock.com/image-photo/chocolate-vanilla-strawberry-ice-cream-100nw-201425834.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "Ice Creams",
      numReviews: 10,
      description: "ice creams ",
    },

    {
      // _id: '53',
      name: "Ice Cream Sticks",
      slug: "Ice-Cream-Sticks",
      category: "Ice Cream ",
      image:
        "https://stylesatlife.com/wp-content/uploads/2018/09/Ice-cream-Sticks.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "Ice Creams",
      numReviews: 10,
      description: "ice creams",
    },

    {
      // _id: '54',
      name: "Ice Cream Floats",
      slug: "Ice-Cream-Floats",
      category: "Ice Cream ",
      image:
        "https://stylesatlife.com/wp-content/uploads/2018/09/Ice-cream-Floats.jpg",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "Ice Creams",
      numReviews: 10,
      description: "ice creams",
    },

    {
      // _id: '55',
      name: "Ice Cream Sundae",
      slug: "Ice-Cream-Sundae",
      category: "Ice Cream ",
      image:
        "https://stylesatlife.com/wp-content/uploads/2018/09/Ice-cream-Sundae.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "Ice-Cream",
      numReviews: 10,
      description: "ice-Creams",
    },

    {
      // _id: '56',
      name: "Gelato",
      slug: "Gelato",
      category: "Ice Cream",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-frozen-yogurt.jpeg?fit=680%2C489",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "ice-Creams",
      numReviews: 10,
      description: "ice creams",
    },

    {
      // _id: '57',
      name: "Rolled Ice Cream",
      slug: "Rolled-Ice-Cream",
      category: "Ice Cream",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-snow-cream.jpg?fit=680%2C489",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "ice-Creams",
      numReviews: 10,
      description: "ice creams",
    },

    {
      // _id: '58',
      name: "Italian Ice",
      slug: "Ice-Cream",
      category: "Ice Cream",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-dondurma.jpg?fit=680%2C489",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "Ice-Cream",
      numReviews: 10,
      description: "ice creams",
    },

    {
      // _id: '59',
      name: "Kulfi",
      slug: "Kulfi",
      category: "Ice Cream",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-kulfi.jpg?fit=680%2C489",
      price: 200,
      countInStock: 5,
      rating: 4.5,
      brand: "Ice-Creams",
      numReviews: 10,
      description: "ice-Cream",
    },

    {
      // _id: '60',
      name: "Gulab jamun",
      slug: "Gulab-jamun",
      category: "sweets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/1_Gulab_Jamun_Mithai_Sweets_of_India_cropped.jpg/180px-1_Gulab_Jamun_Mithai_Sweets_of_India_cropped.jpg",
      price: 100,
      countInStock: 5,
      rating: 4.5,
      brand: "sweets",
      numReviews: 10,
      description: "sweets",
    },

    {
      // _id: '61',
      name: "Motichoor laddu",
      slug: "Motichoor-laddu",
      category: "sweets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Motichur_ka_laddu.JPG/1024px-Motichur_ka_laddu.JPG",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "sweets",
      numReviews: 10,
      description: "sweets",
    },

    {
      // _id: '62',
      name: "Misti doi",
      slug: "Misti-doi",
      category: "sweets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Mishti_Doi.jpg/180px-Mishti_Doi.jpg",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "sweets",
      numReviews: 10,
      description: "sweets",
    },

    {
      // _id: '63',
      name: "Ras malai",
      slug: "Ras-malai",
      category: "sweets",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMKfvgpzIVFZFn_0RcvH34CHstjsfz0k8FQ&usqp=CAU",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "sweets",
      numReviews: 10,
      description: "sweets",
    },

    {
      // _id: '64',
      name: "Mysore Pak",
      slug: "Mysore-Pak",
      category: "sweets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Mysore_pak.jpg/180px-Mysore_pak.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "sweets",
      numReviews: 10,
      description: "sweets",
    },

    {
      // _id: '65',
      name: "Khira sagara",
      slug: "Khira-sagara",
      category: "sweets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c6/Khira_sagara.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "sweets",
      numReviews: 10,
      description: "sweets",
    },

    {
      // _id: '66',
      name: "pithas Pakon",
      slug: "pithas- Pakon",
      category: "sweets",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Pitha_for_Wedding-_Pakan%2C_Patishapta%2C_Bharandash.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "sweets",
      numReviews: 10,
      description: "sweets",
    },

    {
      // _id: '67',
      name: "Apple Juice",
      slug: "Apple-Juice",
      category: "juices",
      image:
        "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_52939276-1024x799.jpeg",
      price: 100,
      countInStock: 5,
      rating: 4.5,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '68',
      name: "Blueberry Juice",
      slug: "Blueberry-Juice",
      category: "juices",
      image:
        "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_69825501-1024x683.jpeg",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '69',
      name: "Grape Juice",
      slug: "Grape-Juice",
      category: "juices",
      image:
        "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_89927265-1024x683.jpeg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '70',
      name: "Orange Juice",
      slug: "Orange-Juice",
      category: "juices",
      image:
        "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_129600591-1024x683.jpeg",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '71',
      name: "Pineapple Juice",
      slug: "Pineapple-Juice",
      category: "juices",
      image:
        "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_59889233-1024x683.jpeg",
      price: 70,
      countInStock: 5,
      rating: 4.5,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '72',
      name: "Pomegranate Juice",
      slug: "Pomegranate-Juice",
      category: "juices",
      image:
        "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_99603806-1024x680.jpeg",
      price: 80,
      countInStock: 5,
      rating: 4.5,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '73',
      name: "Tart Cherry Juice",
      slug: "Tart-Cherry-Juice",
      category: "juices",
      image:
        "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_115669758-1024x683.jpeg",
      price: 90,
      countInStock: 5,
      rating: 4.5,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '74',
      name: "Grapefruit Juice",
      slug: "Grapefruit-Juice",
      category: "juices",
      image:
        "https://sipsmarter.org/wp-content/uploads/2018/08/AdobeStock_108708729-1024x681.jpeg",
      price: 70,
      countInStock: 5,
      rating: 4.5,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '75',
      name: "Cranberry Paloma",
      slug: "Cranberry-Paloma",
      category: "juices",
      image:
        "https://sipsmarter.org/wp-content/uploads/2023/11/IMG_4812-scaled.jpg",
      price: 50,
      countInStock: 5,
      rating: 4.2,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '76',
      name: "Sugarcane Juice",
      slug: "Sugarcane-Juice",
      category: "juices",
      image:
        "https://i0.wp.com/asoothingfood.com/wp-content/uploads/2022/10/sugarcane-juice.jpg?resize=1024%2C682&ssl=1",
      price: 70,
      countInStock: 5,
      rating: 4.5,
      brand: "juices",
      numReviews: 10,
      description: "juices",
    },

    {
      // _id: '77',
      name: "Caesar Salad",
      slug: "Caesar-Salad",
      category: "salads",
      image: "https://stylesatlife.com/wp-content/uploads/2021/09/caesar.jpg",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "salads",
      numReviews: 10,
      description: "salads",
    },

    {
      // _id: '78',
      name: "Italian Salad",
      slug: "Italian-Salad",
      category: "salads",
      image:
        "https://stylesatlife.com/wp-content/uploads/2021/09/italian-salad.jpg",
      price: 250,
      countInStock: 5,
      rating: 4.5,
      brand: "salads",
      numReviews: 100,
      description: "salads",
    },

    {
      // _id: '79',
      name: "Caprese Salad",
      slug: "Caprese-Salad",
      category: "salads",
      image: "https://stylesatlife.com/wp-content/uploads/2021/09/caprese.jpg",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "salads",
      numReviews: 120,
      description: "salads",
    },

    {
      // _id: '80',
      name: "Vegetable Salad",
      slug: "Vegetable-Salad",
      category: "salads",
      image:
        "https://stylesatlife.com/wp-content/uploads/2021/09/vegitale-salad.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "salads",
      numReviews: 10,
      description: "salads",
    },

    {
      // _id: '81',
      name: "Green Salad",
      slug: "salads",
      category: "salads",
      image: "https://stylesatlife.com/wp-content/uploads/2021/09/green.jpg",
      price: 120,
      countInStock: 5,
      rating: 4.5,
      brand: "Biriyani",
      numReviews: 10,
      description: "salads",
    },

    {
      // _id: '82',
      name: "Shrimp Avocado Salad",
      slug: "Shrimp-Avocado-Salad",
      category: "salads",
      image:
        "https://stylesatlife.com/wp-content/uploads/2021/09/Shrimp-avocado-salad.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "salads",
      numReviews: 10,
      description: "salads",
    },

    {
      // _id: '83',
      name: "Greek Salad",
      slug: "Greek-Salad",
      category: "salads",
      image: "https://stylesatlife.com/wp-content/uploads/2021/09/Greek.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.2,
      brand: "Biriyani",
      numReviews: 10,
      description: "salads",
    },

    {
      // _id: '84',
      name: "Tuna Salad",
      slug: "Tuna-Salad",
      category: "salads",
      image:
        "https://stylesatlife.com/wp-content/uploads/2021/09/Tuna-salad.jpg",
      price: 150,
      countInStock: 5,
      rating: 4.1,
      brand: "salads",
      numReviews: 10,
      description: "salads",
    },

    {
      // _id: '85',
      name: "Chicken Noodle Soup",
      slug: "Chicken-Noodle-Soup",
      category: "soup",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2021/01/types-of-soup-italian-wedding.jpg?fit=680%2C860",
      price: 180,
      countInStock: 5,
      rating: 4.3,
      brand: "soup",
      numReviews: 10,
      description: "soup",
    },

    {
      // _id: '86',
      name: "Lentil Soup",
      slug: "Lentil-Soup",
      category: "soup",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2021/08/roasted-tomato-soup-recipe.jpg?fit=680%2C1020",
      price: 120,
      countInStock: 5,
      rating: 4.5,
      brand: "soup",
      numReviews: 10,
      description: "soup",
    },

    {
      // _id: '87',
      name: " French Onion Soup",
      slug: " French-Onion-Soup",
      category: "soup",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2021/11/dairy-free-soup-recipes-chicken-tortilla-soup.jpeg?fit=680%2C860",
      price: 100,
      countInStock: 5,
      rating: 4.5,
      brand: "soup",
      numReviews: 10,
      description: "soup",
    },

    {
      // _id: '88',
      name: "Corn Chowder",
      slug: "Corn-Chowder",
      category: "soup",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2021/01/types-of-soup-chicken-and-rice.jpg?fit=680%2C860",
      price: 150,
      countInStock: 5,
      rating: 4.5,
      brand: "soup",
      numReviews: 10,
      description: "soup",
    },

    {
      // _id: '89',
      name: "Cream of Mushroom Soup",
      slug: "Cream-of-Mushroom-Soup",
      category: "soup",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2021/01/types-of-soup-miso.jpg?fit=680%2C860",
      price: 150,
      countInStock: 5,
      rating: 4.3,
      brand: "soup",
      numReviews: 10,
      description: "soup",
    },

    {
      // _id: '90',
      name: "Pho soup",
      slug: "Pho-soup",
      category: "soup",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/10/types-of-soup-Easy-wonton-soup-with-gluten-free-wontons-I-Heart-Umami-min.jpg?fit=680%2C860",
      price: 150,
      countInStock: 5,
      rating: 4.0,
      brand: "soup",
      numReviews: 10,
      description: "soup",
    },

    {
      // _id: '91',
      name: "chicken mandi",
      slug: "chicken-mandi",
      category: "mandis",
      image:
        "https://faridascookbook.com/wp-content/uploads/2021/09/Tomato-Rasam-19.png",
      price: 550,
      countInStock: 5,
      rating: 4.4,
      brand: "mandis",
      numReviews: 10,
      description: "mandis",
    },

    {
      // _id: '92',
      name: "mutton mandi",
      slug: "mutton mandi",
      category: "mandis",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QAABOxPjrgku8W_-C9jF1A9fPW_F067_Sg&usqp=CAU",
      price: 750,
      countInStock: 5,
      rating: 4.5,
      brand: "mandis",
      numReviews: 10,
      description: "mandis",
    },

    {
      // _id: '93',
      name: "fish mandi ",
      slug: "fish-mandi ",
      category: "mandis",
      image:
        "https://www.shutterstock.com/image-photo/delicious-grilled-fish-rice-dish-600nw-2280269077.jpg",
      price: 850,
      countInStock: 5,
      rating: 4.5,
      brand: "mandis",
      numReviews: 10,
      description: "mandis",
    },

    {
      // _id: '94',
      name: "Black tea",
      slug: "Black-tea",
      category: "drinks",
      image:
        "https://images.squarespace-cdn.com/content/v1/6008e4b84dfdb80938cd0442/8da7ce61-4f06-4120-908f-986ab9aa99e2/black+tea.jpeg?format=750w",
      price: 50,
      countInStock: 5,
      rating: 4.5,
      brand: "drinks",
      numReviews: 10,
      description: "drinks",
    },

    {
      // _id: '95',
      name: "Herbal tea",
      slug: "Herbal-tea",
      category: "drinks",
      image:
        "https://images.squarespace-cdn.com/content/v1/6008e4b84dfdb80938cd0442/1619062042426-PNHPA413LKEF4MN1HKE6/herbal+tea?format=750w",
      price: 50,
      countInStock: 5,
      rating: 4.2,
      brand: "drinks",
      numReviews: 10,
      description: "drinks",
    },

    {
      // _id: '96',
      name: "White tea",
      slug: "White-tea",
      category: "drinks",
      image:
        "https://images.squarespace-cdn.com/content/v1/6008e4b84dfdb80938cd0442/1617940562413-YN8J8C39CVCIX0MC3501/white+tea.jpg?format=750w",
      price: 30,
      countInStock: 5,
      rating: 4.2,
      brand: "drinks",
      numReviews: 10,
      description: "drinks",
    },

    {
      // _id: '97',
      name: " Bella coffee",
      slug: "Bella-coffee",
      category: "drinks",
      image:
        "https://curlytales.com/wp-content/uploads/2020/10/Untitled-2020-10-08T172911.805.jpg",
      price: 50,
      countInStock: 5,
      rating: 4.1,
      brand: "drinks",
      numReviews: 10,
      description: "drinks",
    },

    {
      // _id: '98',
      name: "Tandoori Coffee",
      slug: "Tandoori-Coffee",
      category: "drinks",
      image:
        "https://curlytales.com/wp-content/uploads/2020/10/Untitled-62.png",
      price: 100,
      countInStock: 5,
      rating: 4.3,
      brand: "drinks",
      numReviews: 10,
      description: "drinks",
    },

    {
      // _id: '99',
      name: "Karupatti Coffee",
      slug: "Karupatti-Coffee",
      category: "drinks",
      image:
        "https://www.amudhukarupatticoffee.com/wp-content/uploads/2022/11/amudhu-karupatti-coffee.webp",
      price: 110,
      countInStock: 5,
      rating: 4.3,
      brand: "drinks",
      numReviews: 10,
      description: "drinks",
    },

    {
      // _id: '100',
      name: "American Coffee",
      slug: "American Coffee",
      category: "drinks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3K0iAl44kE3SZKxtMRlXV5IXD2v9kfiwbww&usqp=CAU",
      price: 200,
      countInStock: 5,
      rating: 4.3,
      brand: "drinks",
      numReviews: 10,
      description: "drinks",
    },
  ],
};
export default data;