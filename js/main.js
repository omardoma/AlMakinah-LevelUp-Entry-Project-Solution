(function() {
  const API_URL = 'https://levelup-assessment-backend-ddmwdsdlta.now.sh/api';

  const form = document.getElementById('submissionForm');
  form.addEventListener('submit', submitForm);

  async function getFormSchema() {
    try {
      const response = await fetch(`${API_URL}/getFormSchema`);
      const formSchema = await response.json();
      generateForm(formSchema);
    } catch (err) {
      alert(err);
    }
  }

  function titelize(str) {
    return str
      .replace('_', ' ')
      .split(' ')
      .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(' ');
  }

  function generateForm(formSchema) {
    let input, label, formGroup;
    Object.entries(formSchema).forEach(function([key, { type, value }]) {
      input = document.createElement('input');
      input.name = key;
      input.type = type;
      input.value = value;
      if (type === 'hidden') {
        form.appendChild(input);
      } else {
        formGroup = document.createElement('div');
        formGroup.classList.add(['form-group']);
        if (type !== 'submit') {
          label = document.createElement('label');
          label.innerText = titelize(key);
          formGroup.appendChild(label);
        }
        formGroup.appendChild(input);
        form.appendChild(formGroup);
      }
    });
  }

  async function submitForm(event) {
    event.preventDefault();
    const formValue = {};
    [...form.elements]
      .filter(({ type }) => type !== 'submit')
      .forEach(function({ type, name, value, checked }) {
        formValue[name] = type === 'checkbox' ? checked : value;
      });
    try {
      const response = await fetch(`${API_URL}/submission`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValue)
      });
      const jsonResponse = await response.json();
      alert(jsonResponse.msg);
    } catch (err) {
      alert(err);
    }
  }

  getFormSchema();
})();
