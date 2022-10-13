// import { Button, TextField } from '@mui/material';
// import React from 'react'

// export const Form = () => {
//     const { form, onChange, clear } = useForm({
//       name: '',
//       date: '',
//     });
//     const onSubmitForm = (event) => {
//       console.log(form);
//       event.preventDefault();
//       singUp(form, clear, navigate, setRightButtonText);
//     };
//   return (
//     <form onSubmit={onSubmitForm}>
//       <TextField
//         name={'username'}
//         value={form.username}
//         onChange={onChange}
//         label={'Nome'}
//         variant={'outlined'}
//         fullWidth
//         margin={'normal'}
//         required
//         type={'username'}
//       />
//       <TextField
//         name={'email'}
//         value={form.email}
//         onChange={onChange}
//         label={'E-mail'}
//         variant={'outlined'}
//         fullWidth
//         margin={'normal'}
//         required
//         type={'email'}
//       />
//       <TextField
//         name={'password'}
//         value={form.password}
//         onChange={onChange}
//         label={'Senha'}
//         variant={'outlined'}
//         fullWidth
//         margin={'normal'}
//         required
//         type={'password'}
//       />
//       <Button
//         fullWidth
//         variant={'contained'}
//         color={'primary'}
//         margin={'normal'}
//         type={'submit'}
//       >
//         Cadastrar
//       </Button>
//     </form>
//   );
// }

// export default Form;
