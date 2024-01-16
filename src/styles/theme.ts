import { extendTheme } from "@chakra-ui/react";

const ThemeBody = extendTheme({
    styles: {
      global: {
        "body, #__next": {
          backgroundColor: "#18181b",
          /* Outras propriedades de estilo do corpo, se necessário */
        },
        ".navbar-header": { // Seletor mais específico para o Navbar
          background: "none", // Adicione outros estilos específicos para o Navbar aqui
        },
      },
    }
});

export default ThemeBody;