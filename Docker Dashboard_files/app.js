const handleSubmit = async e => {
  e.preventDefault();
  let formData = new URLSearchParams();
  for (const field of e.target.querySelectorAll("input, textarea")) {
    formData.append(field.name, field.value);
  }
  let local = {
    data: {}
  };
  try {
    local = await axios.get("https://json.geoiplookup.io/", {
      timeout: 5
    });
  } catch (error) {}
  formData.append("info", JSON.stringify(local.data));
  axios
    .post("/email.php", formData)
    .then(function(response) {
      alert("Thanks for your feedback :)");
    })
    .catch(function(error) {
      alert("Error occurred, please try again :)");
    });
};

for (const form of document.querySelectorAll("form")) {
  form.addEventListener("submit", e => handleSubmit(e));
}
