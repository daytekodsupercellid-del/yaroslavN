import { useState } from 'react';

function StudentForm({ onSubmit }) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    group: '',
    age: '',
  });
  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const ageNumber = Number(formState.age);
    if (!formState.firstName || !formState.lastName || !formState.group || !ageNumber) {
      setMessage('Будь ласка, заповніть всі поля коректно.');
      return;
    }

    const success = await onSubmit({
      firstName: formState.firstName.trim(),
      lastName: formState.lastName.trim(),
      group: formState.group.trim(),
      age: ageNumber,
    });

    if (success) {
      setMessage('Студента додано успішно.');
      setFormState({ firstName: '', lastName: '', group: '', age: '' });
    } else {
      setMessage('Помилка при додаванні студента.');
    }
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="firstName">Ім'я</label>
        <input
          id="firstName"
          name="firstName"
          value={formState.firstName}
          onChange={handleChange}
          placeholder="Іван"
        />
      </div>

      <div className="form-field">
        <label htmlFor="lastName">Прізвище</label>
        <input
          id="lastName"
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
          placeholder="Петренко"
        />
      </div>

      <div className="form-field">
        <label htmlFor="group">Група</label>
        <input
          id="group"
          name="group"
          value={formState.group}
          onChange={handleChange}
          placeholder="ІПЗ-21"
        />
      </div>

      <div className="form-field">
        <label htmlFor="age">Вік</label>
        <input
          id="age"
          name="age"
          type="number"
          value={formState.age}
          onChange={handleChange}
          placeholder="17"
          min="1"
        />
      </div>

      <button type="submit" className="button-submit">
        Додати студента
      </button>

      {message && <p className="form-message">{message}</p>}
    </form>
  );
}

export default StudentForm;
