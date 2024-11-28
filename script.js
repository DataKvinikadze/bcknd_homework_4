// დაწერეთ ფუნცქია რომელიც დაგვილოგავს მაუსის კორდინატებს მას შემდეგ რაც გავაჩერებთ მაუსს, გამოიყენეთ დიბაუნს ტექნიკა

const logCoordinates = () => {
  let timeout;
  window.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
    }, 300);
  });
};

// logCoordinates();

// წამოიღეთ ინფორმაცია შემდეგი ეიპიაიდან: https://jsonplaceholder.typicode.com/users , მოსული დატა გაპარსეთ შემდეგნაირად, თითოეულ ობიექტს უნდა ჰქონდეს მხოლოდ 4 ფროფერთი აიდი, სახელი, იუზერნეიმი და იმეილი

const fetchData = async () => {
  let newObject = [];
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  newObject = data.map((element) => {
    return {
      id: element.id,
      name: element.name,
      username: element.username,
      email: element.email,
    };
  });
  console.log(newObject);
};
// fetchData();

// შექმენით ინფუთი რომლის სერჩის დროს რექუესთს გააგზავნით შემდეგ აიპიაიზე: 'https://dummyjson.com/products/search?q=phone' როგორც ხედავთ q არის ქუერი პარამეტრი, დებაუნს ტექნიკით გააკეთეთ ინფუთი რომლის ჩაწერაზეც, დარექუსთდება სწორედ q პარამეტრით. ანუ phone ის ნაცვლად გაატანეთ ის რასაც ჩაწერთ ინფუთში.

const fetchWithQueryParam = () => {
  let input = document.querySelector("input");
  let timeout;

  input.addEventListener("input", (e) => {
    clearTimeout(timeout);
    let value = e.target.value;
    timeout = setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${value}`
        );
        const data = await response.json();
        console.log(data);
      };
      fetchData();
    }, 1000);
  });
};

fetchWithQueryParam();
