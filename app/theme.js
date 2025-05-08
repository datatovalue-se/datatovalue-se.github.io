import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/600.css'; // Semi-Bold


const getDesignTokens = () => ({
  palette: {
    primary: {
      main: '#FFC0CB',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#fff', // global background color
    },
    navbar: {
      background: 'var(--primaryColor)',
    },
    footer: {
      background: '#F8F9FA',
    },
  },

  typography: {
    fontFamily: "'Poppins', Arial, sans-serif",
    color: 'black',

    h1: {
      fontSize: '2rem', // default size for mobile
      '@media (min-width: 600px)': {
        fontSize: '3rem', // tablets and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '4rem', // desktops and larger
      },
    },

    // h2
    h2: {
      fontSize: '1.75rem', // default size for mobile
      '@media (min-width: 600px)': {
        fontSize: '2.5rem', // tablets and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '3.5rem', // desktops and larger
      },
    },

    // h3
    h3: {
      fontSize: '1.5rem', // default size for mobile
      lineHeight: '1.5',
      '@media (min-width: 600px)': {
        fontSize: '2rem', // tablets and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '2.5rem', // desktops and larger
      },
    },

    // h4
    h4: {
      fontSize: '1.25rem', // default size for mobile
      '@media (min-width: 600px)': {
        fontSize: '1.75rem', // tablets and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '2rem', // desktops and larger
      },
    },

    // h5
    h5: {
      fontSize: '1.1rem', // default size for mobile
      '@media (min-width: 600px)': {
        fontSize: '1.5rem', // tablets and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '1.75rem', // desktops and larger
      },
    },

    // h6
    h6: {
      fontSize: '1rem', // default size for mobile
      '@media (min-width: 600px)': {
        fontSize: '1.25rem', // tablets and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '1.5rem', // desktops and larger
      },
    },

    // h7
    h7: {
      fontSize: '.8rem', // default size for mobile
      '@media (min-width: 600px)': {
        fontSize: '1rem', // tablets and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '1.2rem', // desktops and larger
      },
    },

    // p
    p: {
      fontSize: '.8rem', // default size for mobile
      '@media (min-width: 600px)': {
        fontSize: '1rem', // tablets and larger
      },
      '@media (min-width: 960px)': {
        fontSize: '1.2rem', // desktops and larger
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          gap: '5px',
          padding: '8px 16px',
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: 'var(--secondaryColorOriginal)',
            color: 'white',
            minWidth: '250px',
            fontSize: '.8rem', // default size for mobile
            '@media (min-width: 600px)': {
              fontSize: '1rem', // tablets and larger
            },
            '@media (min-width: 960px)': {
              fontSize: '1.2rem', // desktops and larger
            },

            '&:hover': {
              backgroundColor: 'var(--secondaryHoverColor)',
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: '#dc004e',
            color: 'white',
            '&:hover': {
              backgroundColor: '#b2003a',
            },
          },
        },
        {
          props: { variant: 'navbutton' },
          style: {
            background: 'transparent',
            color: 'black',
            '&:hover': {
              background: 'lightgreen',
            },
          },
        },
      ],
    },
  },
})

export { getDesignTokens }
