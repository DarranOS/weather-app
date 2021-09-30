export default function errorMessage(target, err) {
  alert(`No results found for ${target.input}. Check your spelling, dipshit!`);
  console.log(err);
}
