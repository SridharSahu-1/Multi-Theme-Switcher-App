export type Theme = "minimal" | "dark" | "colorful";

export interface ThemeStyles {
  bodyClass: string;
  header: {
    bg: string;
    text: string;
    logo: string;
    dropdownBg: string;
  };
  layout: {
    bg: string;
    text: string;
    font: string;
    container: string;
  };
  card: {
    container: string;
    textContainer: string;
    title: string;
    description: string;
    price: string;
  };
  homepage: {
    title: string;
    paragraph: string;
    button: string;
    grid: string;
  };
  about: {
    title: string;
    paragraph: string;
  };
  contact: {
    title: string;
    paragraph: string;
    form: string;
    input: string;
    button: string;
  };
  auth: {
    container: string;
    form: string;
    title: string;
    input: string;
    button: string;
    link: string;
    error: string;
    divider: string;
  };
}

export const themes: Record<Theme, ThemeStyles> = {
  minimal: {
    bodyClass: "theme-minimal font-sans",
    header: {
      bg: "bg-gray-100",
      text: "text-gray-800",
      logo: "text-2xl font-bold",
      dropdownBg: "bg-white",
    },
    layout: {
      bg: "bg-gray-50 h-dvh",
      text: "text-gray-800",
      font: "font-sans",
      container: "container mx-auto px-4 py-24",
    },
    card: {
      container:
        "bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md",
      textContainer: "p-4",
      title: "text-lg font-semibold text-gray-800",
      description: "text-sm text-gray-600 mt-1",
      price: "text-md font-bold text-gray-900 mt-2",
    },
    homepage: {
      title: "text-4xl font-bold mb-4",
      paragraph: "text-lg text-gray-700 mb-6",
      button:
        "bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 cursor-pointer hover:scale-105",
      grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
    },
    about: {
      title: "text-4xl font-bold mb-4",
      paragraph: "text-lg text-gray-700 mb-6 leading-relaxed",
    },
    contact: {
      title: "text-4xl font-bold mb-4",
      paragraph: "text-lg text-gray-700 mb-6",
      form: "bg-white p-8 rounded-lg shadow-md border border-gray-200",
      input:
        "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500",
      button:
        "bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 w-full",
    },
    auth: {
      container: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",
      form: "max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md border border-gray-200",
      title: "text-3xl font-bold text-center text-gray-900 mb-6",
      input: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
      button: "w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 font-semibold",
      link: "text-blue-600 hover:text-blue-800 underline cursor-pointer",
      error: "text-red-600 text-sm mt-1",
      divider: "text-gray-500 text-center my-4",
    },
  },
  dark: {
    bodyClass: "theme-dark font-serif",
    header: {
      bg: "bg-gray-900",
      text: "text-gray-100",
      logo: "text-2xl font-extrabold tracking-wider",
      dropdownBg: "bg-gray-800",
    },
    layout: {
      bg: "bg-gray-900",
      text: "text-gray-100",
      font: "font-serif",
      container: "flex",
    },
    card: {
      container:
        "bg-gray-800 border border-gray-700 rounded-md shadow-lg hover:border-gray-500",
      textContainer: "p-5",
      title: "text-xl font-bold text-gray-100",
      description: "text-base text-gray-300 mt-2",
      price: "text-lg font-semibold text-teal-400 mt-3",
    },
    homepage: {
      title:
        "text-5xl font-extrabold text-teal-400 mb-6 border-b-2 border-gray-700 pb-4",
      paragraph: "text-xl text-gray-300 mb-8",
      button:
        "border-2 border-teal-400 text-teal-400 font-bold py-3 px-8 rounded-full hover:bg-teal-400 hover:text-gray-900 cursor-pointer hover:scale-105",
      grid: "space-y-8",
    },
    about: {
      title:
        "text-5xl font-extrabold text-teal-400 mb-6 border-b-2 border-gray-700 pb-4",
      paragraph: "text-xl text-gray-300 mb-8 leading-relaxed",
    },
    contact: {
      title:
        "text-5xl font-extrabold text-teal-400 mb-6 border-b-2 border-gray-700 pb-4",
      paragraph: "text-xl text-gray-300 mb-8",
      form: "bg-gray-800 p-8 rounded-lg border border-gray-700",
      input:
        "w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400",
      button:
        "border-2 border-teal-400 text-teal-400 py-3 px-8 rounded-full w-full hover:bg-teal-400 hover:text-gray-900",
    },
    auth: {
      container: "min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8",
      form: "max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg border border-gray-700",
      title: "text-3xl font-bold text-center text-gray-100 mb-6",
      input: "w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-teal-400",
      button: "w-full border-2 border-teal-400 text-teal-400 py-3 px-4 rounded-md hover:bg-teal-400 hover:text-gray-900 font-bold",
      link: "text-teal-400 hover:text-teal-600 underline cursor-pointer",
      error: "text-red-500 text-sm mt-1",
      divider: "text-gray-400 text-center my-4",
    },
  },
  colorful: {
    bodyClass: "theme-colorful font-pacifico",
    header: {
      bg: "bg-indigo-500",
      text: "text-white",
      logo: "text-2xl font-pacifico",
      dropdownBg: "bg-indigo-600",
    },
    layout: {
      bg: "bg-gradient-to-br from-rose-100 to-teal-100",
      text: "text-gray-900",
      font: "font-pacifico",
      container: "container mx-auto px-4 py-24",
    },
    card: {
      container:
        "bg-white/80 backdrop-blur-sm border border-fuchsia-300 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1",
      textContainer: "p-6 text-center",
      title: "text-2xl text-fuchsia-800",
      description: "text-sm text-gray-700 mt-2",
      price: "text-xl font-bold text-rose-500 mt-4",
    },
    homepage: {
      title: "text-6xl text-center text-rose-500 mb-8",
      paragraph: "text-xl text-center text-indigo-800 mb-10",
      button:
        "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white py-3 px-8 rounded-full mx-auto block cursor-pointer hover:scale-105",
      grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
    },
    about: {
      title: "text-6xl text-center text-rose-500 mb-8",
      paragraph: "text-xl text-center text-indigo-800 mb-10",
    },
    contact: {
      title: "text-6xl text-center text-rose-500 mb-8",
      paragraph: "text-xl text-center text-indigo-800 mb-10",
      form: "bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-fuchsia-200",
      input:
        "w-full p-3 border border-fuchsia-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 bg-white/50",
      button:
        "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white py-3 px-8 rounded-full w-full hover:scale-105",
    },
    auth: {
      container: "min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-teal-100 py-12 px-4 sm:px-6 lg:px-8",
      form: "max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl border border-fuchsia-200",
      title: "text-3xl font-bold text-center text-rose-500 mb-6",
      input: "w-full p-3 border border-fuchsia-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 bg-white/50",
      button: "w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white py-3 px-4 rounded-lg hover:scale-105 font-bold",
      link: "text-fuchsia-600 hover:text-pink-600 underline cursor-pointer",
      error: "text-red-600 text-sm mt-1",
      divider: "text-indigo-500 text-center my-4",
    },
  },
};
