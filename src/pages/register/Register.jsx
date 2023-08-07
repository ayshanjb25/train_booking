import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    rem,
  } from '@mantine/core';
import { alignProperty } from '@mui/material/styles/cssUtils';
   
  const useStyles = createStyles((theme) => ({
    // wrapper: {
    //   minHeight: rem(900),
    //   backgroundSize: 'cover',
    //   backgroundImage:
    //     'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visitsrilankatours.co.uk%2Ftrain-tickets-1.html&psig=AOvVaw116e0mMleolOccWKeOyrGb&ust=1691299295064000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjGlIHjxIADFQAAAAAdAAAAABAd)',
    // },
  
    form: {
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    //   minHeight: rem(900),
    //   maxWidth: rem(600),
    //   paddingTop: rem(80),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  }));
  
  export function Register() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Register for Book Your Train!
          </Title>
  
          <TextInput label="Full Name" placeholder="Enter your full name" size="md" style={{ width: '400px' }} />
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <Checkbox label="Mr" size="md" />
            <Checkbox label="Mrs" size="md" />
            <Checkbox label="Ms" size="md" />
            <Checkbox label="Rev" size="md" />
          </div>
          <TextInput label="Address" placeholder="Enter your address here" size="md" style={{ width: '400px' }} />
          <TextInput label="Email address" placeholder="hello@gmail.com" mt="md" size="md" style={{ width: '400px' }} />
          <TextInput label="Mobile Number" placeholder="+94xxxxxxxxx" mt="md" size="md" style={{ width: '400px' }} />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" style={{ width: '400px' }} />
          <Button fullWidth mt="xl" size="md" style={{ width: '400px' }}>
            Create Account
          </Button>
          {/* <Button style={{ backgroundColor: 'grey', color: 'white', fontWeight: 'bold',alignItems:'center',justifyContent:'center',marginTop: '16px', }}>
          Do not have an account? Register here
          </Button> */}
          
  
          {/* <Text ta="center" mt="md">
  Don&apos;t have an account?{' '}
  <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
    Register
  </Anchor>
</Text> */}
        </Paper>
      </div>
    );
  }
  export default Register;