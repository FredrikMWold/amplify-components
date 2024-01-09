var clickbounds = {
  jumbo__base: '88px',
  default__base: '48px',
  default__input: '56px',
  compact__standard: '32px',
  compact__input: '44px'
};

var colors = {
  text: {
    static_icons__default: {
      hex: '#ffffff',
      hsla: 'hsla(0, 0%, 23.9%, 1)',
      rgba: 'var(--eds_text__static_icons__default, rgba(61, 61, 61, 1))'
    },
    static_icons__secondary: {
      hex: '#565656',
      hsla: 'hsla(0, 0%, 33.7%, 1)',
      rgba: 'var(--eds_text__static_icons__secondary, rgba(86, 86, 86, 1))'
    },
    static_icons__tertiary: {
      hex: '#6f6f6f',
      hsla: 'hsla(0, 0%, 43.5%, 1)',
      rgba: 'var(--eds_text__static_icons__tertiary, rgba(111, 111, 111, 1))'
    },
    static_icons__primary_white: {
      hex: '#ffffff',
      hsla: 'hsla(0, 0%, 100%, 1)',
      rgba: 'var(--eds_text__static_icons__primary_white, rgba(255, 255, 255, 1))'
    }
  },
  ui: {
    background__default: {
      hex: '#132634',
      hsla: 'hsla(205, 46%, 14%, 1)',
      rgba: 'rgba(19, 38, 52, 1)'
    },
    background__semitransparent: {
      hex: '#ffffff',
      hsla: 'hsla(0, 0%, 100%, 0.2)',
      rgba: 'var(--eds_ui_background__semitransparent, rgba(255, 255, 255, 0.2))'
    },
    background__light: {
      hex: '#f7f7f7',
      hsla: 'hsla(0, 0%, 96.9%, 1)',
      rgba: 'var(--eds_ui_background__light, rgba(247, 247, 247, 1))'
    },
    background__scrim: {
      hex: '#000000',
      hsla: 'hsla(0, 0%, 0%, 0.4)',
      rgba: 'var(--eds_ui_background__scrim, rgba(0, 0, 0, 0.4))'
    },
    background__overlay: {
      hex: '#000000',
      hsla: 'hsla(0, 0%, 0%, 0.8)',
      rgba: 'var(--eds_ui_background__overlay, rgba(0, 0, 0, 0.8))'
    },
    background__medium: {
      hex: '#dcdcdc',
      hsla: 'hsla(0, 0%, 86.3%, 1)',
      rgba: 'var(--eds_ui_background__medium, rgba(220, 220, 220, 1))'
    },
    background__info: {
      hex: '#d5eaf4',
      hsla: 'hsla(199, 58.5%, 89.6%, 1)',
      rgba: 'var(--eds_ui_background__info, rgba(213, 234, 244, 1))'
    },
    background__warning: {
      hex: '#ffe7d6',
      hsla: 'hsla(25, 100%, 92%, 1)',
      rgba: 'var(--eds_ui_background__warning, rgba(255, 231, 214, 1))'
    },
    background__danger: {
      hex: '#ffc1c1',
      hsla: 'hsla(0, 100%, 87.8%, 1)',
      rgba: 'var(--eds_ui_background__danger, rgba(255, 193, 193, 1))'
    }
  },
  infographic: {
    substitute__purple_berry: {
      hex: '#8c1159',
      hsla: 'hsla(325, 78.3%, 30.8%, 1)',
      rgba: 'var(--eds_infographic_substitute__purple_berry, rgba(140, 17, 89, 1))'
    },
    substitute__pink_rose: {
      hex: '#e24973',
      hsla: 'hsla(344, 72.5%, 58.6%, 1)',
      rgba: 'var(--eds_infographic_substitute__pink_rose, rgba(226, 73, 115, 1))'
    },
    substitute__pink_salmon: {
      hex: '#ff92a8',
      hsla: 'hsla(348, 100%, 78.6%, 1)',
      rgba: 'var(--eds_infographic_substitute__pink_salmon, rgba(255, 146, 168, 1))'
    },
    substitute__green_cucumber: {
      hex: '#005f57',
      hsla: 'hsla(175, 100%, 18.6%, 1)',
      rgba: 'var(--eds_infographic_substitute__green_cucumber, rgba(0, 95, 87, 1))'
    },
    substitute__green_succulent: {
      hex: '#00977b',
      hsla: 'hsla(169, 100%, 29.6%, 1)',
      rgba: 'var(--eds_infographic_substitute__green_succulent, rgba(0, 151, 123, 1))'
    },
    substitute__green_mint: {
      hex: '#40d38f',
      hsla: 'hsla(152, 62.6%, 53.9%, 1)',
      rgba: 'var(--eds_infographic_substitute__green_mint, rgba(64, 211, 143, 1))'
    },
    substitute__blue_ocean: {
      hex: '#004088',
      hsla: 'hsla(212, 100%, 26.7%, 1)',
      rgba: 'var(--eds_infographic_substitute__blue_ocean, rgba(0, 64, 136, 1))'
    },
    substitute__blue_overcast: {
      hex: '#0084c4',
      hsla: 'hsla(200, 100%, 38.4%, 1)',
      rgba: 'var(--eds_infographic_substitute__blue_overcast, rgba(0, 132, 196, 1))'
    },
    substitute__blue_sky: {
      hex: '#52c0ff',
      hsla: 'hsla(202, 100%, 66.1%, 1)',
      rgba: 'var(--eds_infographic_substitute__blue_sky, rgba(82, 192, 255, 1))'
    },
    primary__moss_green_100: {
      hex: '#007079',
      hsla: 'hsla(184, 100%, 23.7%, 1)',
      rgba: 'var(--eds_infographic_primary__moss_green_100, rgba(0, 112, 121, 1))'
    },
    primary__moss_green_55: {
      hex: '#73b1b5',
      hsla: 'hsla(184, 30.8%, 58%, 1)',
      rgba: 'var(--eds_infographic_primary__moss_green_55, rgba(115, 177, 181, 1))'
    },
    primary__moss_green_34: {
      hex: '#a8ced1',
      hsla: 'hsla(184, 30.8%, 73.9%, 1)',
      rgba: 'var(--eds_infographic_primary__moss_green_34, rgba(168, 206, 209, 1))'
    },
    primary__moss_green_21: {
      hex: '#c9e0e2',
      hsla: 'hsla(185, 30.1%, 83.7%, 1)',
      rgba: 'var(--eds_infographic_primary__moss_green_21, rgba(201, 224, 226, 1))'
    },
    primary__moss_green_13: {
      hex: '#deedee',
      hsla: 'hsla(184, 32%, 90.2%, 1)',
      rgba: 'var(--eds_infographic_primary__moss_green_13, rgba(222, 237, 238, 1))'
    },
    primary__energy_red_100: {
      hex: '#eb0037',
      hsla: 'hsla(346, 100%, 46.1%, 1)',
      rgba: 'var(--eds_infographic_primary__energy_red_100, rgba(235, 0, 55, 1))'
    },
    primary__energy_red_55: {
      hex: '#ff7d98',
      hsla: 'hsla(348, 100%, 74.5%, 1)',
      rgba: 'var(--eds_infographic_primary__energy_red_55, rgba(255, 125, 152, 1))'
    },
    primary__energy_red_34: {
      hex: '#ffaebf',
      hsla: 'hsla(347, 100%, 84.1%, 1)',
      rgba: 'var(--eds_infographic_primary__energy_red_34, rgba(255, 174, 191, 1))'
    },
    primary__energy_red_21: {
      hex: '#ffcdd7',
      hsla: 'hsla(348, 100%, 90.2%, 1)',
      rgba: 'var(--eds_infographic_primary__energy_red_21, rgba(255, 205, 215, 1))'
    },
    primary__energy_red_13: {
      hex: '#ffe0e7',
      hsla: 'hsla(346, 100%, 93.9%, 1)',
      rgba: 'var(--eds_infographic_primary__energy_red_13, rgba(255, 224, 231, 1))'
    },
    primary__weathered_red: {
      hex: '#7d0023',
      hsla: 'hsla(343, 100%, 24.5%, 1)',
      rgba: 'var(--eds_infographic_primary__weathered_red, rgba(125, 0, 35, 1))'
    },
    primary__slate_blue: {
      hex: '#243746',
      hsla: 'hsla(206, 32.1%, 20.8%, 1)',
      rgba: 'var(--eds_infographic_primary__slate_blue, rgba(36, 55, 70, 1))'
    },
    primary__spruce_wood: {
      hex: '#ffe7d6',
      hsla: 'hsla(25, 100%, 92%, 1)',
      rgba: 'var(--eds_infographic_primary__spruce_wood, rgba(255, 231, 214, 1))'
    },
    primary__mist_blue: {
      hex: '#d5eaf4',
      hsla: 'hsla(199, 58.5%, 89.6%, 1)',
      rgba: 'var(--eds_infographic_primary__mist_blue, rgba(213, 234, 244, 1))'
    },
    primary__lichen_green: {
      hex: '#e6faec',
      hsla: 'hsla(138, 66.7%, 94.1%, 1)',
      rgba: 'var(--eds_infographic_primary__lichen_green, rgba(230, 250, 236, 1))'
    }
  },
  logo: {
    fill_positive: {
      hex: '#eb0037',
      hsla: 'hsla(346, 100%, 46.1%, 1)',
      rgba: 'var(--eds_logo__fill_positive, rgba(235, 0, 55, 1))'
    },
    fill_negative: {
      hex: '#ffffff',
      hsla: 'hsla(0, 0%, 100%, 1)',
      rgba: 'var(--eds_logo__fill_negative, rgba(255, 255, 255, 1))'
    }
  },
  interactive: {
    primary__selected_highlight: {
      hex: '#e6faec',
      hsla: 'hsla(138, 66.7%, 94.1%, 1)',
      rgba: 'var(--eds_interactive_primary__selected_highlight, rgba(230, 250, 236, 1))'
    },
    primary__selected_hover: {
      hex: '#c3f3d2',
      hsla: 'hsla(139, 66.7%, 85.9%, 1)',
      rgba: 'var(--eds_interactive_primary__selected_hover, rgba(195, 243, 210, 1))'
    },
    primary__resting: {
      hex: '#007079',
      hsla: 'hsla(184, 100%, 23.7%, 1)',
      rgba: 'var(--eds_interactive_primary__resting, rgba(0, 112, 121, 1))'
    },
    primary__hover: {
      hex: '#004f55',
      hsla: 'hsla(184, 100%, 16.7%, 1)',
      rgba: 'var(--eds_interactive_primary__hover, rgba(0, 79, 85, 1))'
    },
    primary__hover_alt: {
      hex: '#deedee',
      hsla: 'hsla(184, 32%, 90.2%, 1)',
      rgba: 'var(--eds_interactive_primary__hover_alt, rgba(222, 237, 238, 1))'
    },
    secondary__highlight: {
      hex: '#d5eaf4',
      hsla: 'hsla(199, 58.5%, 89.6%, 1)',
      rgba: 'var(--eds_interactive_secondary__highlight, rgba(213, 234, 244, 1))'
    },
    secondary__resting: {
      hex: '#243746',
      hsla: 'hsla(206, 32.1%, 20.8%, 1)',
      rgba: 'var(--eds_interactive_secondary__resting, rgba(36, 55, 70, 1))'
    },
    secondary__link_hover: {
      hex: '#17242f',
      hsla: 'hsla(208, 34.3%, 13.7%, 1)',
      rgba: 'var(--eds_interactive_secondary__link_hover, rgba(23, 36, 47, 1))'
    },
    danger__highlight: {
      hex: '#ffc1c1',
      hsla: 'hsla(0, 100%, 87.8%, 1)',
      rgba: 'var(--eds_interactive_danger__highlight, rgba(255, 193, 193, 1))'
    },
    danger__resting: {
      hex: '#eb0000',
      hsla: 'hsla(0, 100%, 46.1%, 1)',
      rgba: 'var(--eds_interactive_danger__resting, rgba(235, 0, 0, 1))'
    },
    danger__hover: {
      hex: '#b30d2f',
      hsla: 'hsla(348, 86.5%, 37.6%, 1)',
      rgba: 'var(--eds_interactive_danger__hover, rgba(179, 13, 47, 1))'
    },
    danger__text: {
      hex: '#b30d2f',
      hsla: 'hsla(348, 86.5%, 37.6%, 1)',
      rgba: 'var(--eds_interactive_danger__text, rgba(179, 13, 47, 1))'
    },
    warning__highlight: {
      hex: '#ffe7d6',
      hsla: 'hsla(25, 100%, 92%, 1)',
      rgba: 'var(--eds_interactive_warning__highlight, rgba(255, 231, 214, 1))'
    },
    warning__resting: {
      hex: '#ff9200',
      hsla: 'hsla(34, 100%, 50%, 1)',
      rgba: 'var(--eds_interactive_warning__resting, rgba(255, 146, 0, 1))'
    },
    warning__hover: {
      hex: '#ad6200',
      hsla: 'hsla(34, 100%, 33.9%, 1)',
      rgba: 'var(--eds_interactive_warning__hover, rgba(173, 98, 0, 1))'
    },
    warning__text: {
      hex: '#ad6200',
      hsla: 'hsla(34, 100%, 33.9%, 1)',
      rgba: 'var(--eds_interactive_warning__text, rgba(173, 98, 0, 1))'
    },
    success__highlight: {
      hex: '#e6faec',
      hsla: 'hsla(138, 66.7%, 94.1%, 1)',
      rgba: 'var(--eds_interactive_success__highlight, rgba(230, 250, 236, 1))'
    },
    success__resting: {
      hex: '#4bb748',
      hsla: 'hsla(118, 43.5%, 50%, 1)',
      rgba: 'var(--eds_interactive_success__resting, rgba(75, 183, 72, 1))'
    },
    success__hover: {
      hex: '#358132',
      hsla: 'hsla(118, 44.1%, 35.1%, 1)',
      rgba: 'var(--eds_interactive_success__hover, rgba(53, 129, 50, 1))'
    },
    success__text: {
      hex: '#358132',
      hsla: 'hsla(118, 44.1%, 35.1%, 1)',
      rgba: 'var(--eds_interactive_success__text, rgba(53, 129, 50, 1))'
    },
    table__cell__fill_resting: {
      hex: '#ffffff',
      hsla: 'hsla(0, 0%, 100%, 1)',
      rgba: 'var(--eds_interactive_table__cell__fill_resting, rgba(255, 255, 255, 1))'
    },
    table__cell__fill_hover: {
      hex: '#eaeaea',
      hsla: 'hsla(0, 0%, 91.8%, 1)',
      rgba: 'var(--eds_interactive_table__cell__fill_hover, rgba(234, 234, 234, 1))'
    },
    table__cell__fill_activated: {
      hex: '#e6faec',
      hsla: 'hsla(138, 66.7%, 94.1%, 1)',
      rgba: 'var(--eds_interactive_table__cell__fill_activated, rgba(230, 250, 236, 1))'
    },
    table__header__fill_activated: {
      hex: '#eaeaea',
      hsla: 'hsla(0, 0%, 91.8%, 1)',
      rgba: 'var(--eds_interactive_table__header__fill_activated, rgba(234, 234, 234, 1))'
    },
    table__header__fill_hover: {
      hex: '#dcdcdc',
      hsla: 'hsla(0, 0%, 86.3%, 1)',
      rgba: 'var(--eds_interactive_table__header__fill_hover, rgba(220, 220, 220, 1))'
    },
    table__header__fill_resting: {
      hex: '#f7f7f7',
      hsla: 'hsla(0, 0%, 96.9%, 1)',
      rgba: 'var(--eds_interactive_table__header__fill_resting, rgba(247, 247, 247, 1))'
    },
    disabled__text: {
      hex: '#bebebe',
      hsla: 'hsla(0, 0%, 74.5%, 1)',
      rgba: 'var(--eds_interactive__disabled__text, rgba(190, 190, 190, 1))'
    },
    text_highlight: {
      hex: '#d5eaf4',
      hsla: 'hsla(199, 58.5%, 89.6%, 1)',
      rgba: 'var(--eds_interactive__text_highlight, rgba(213, 234, 244, 1))'
    },
    focus: {
      hex: '#007079',
      hsla: 'hsla(184, 100%, 23.7%, 1)',
      rgba: 'var(--eds_interactive__focus, rgba(0, 112, 121, 1))'
    },
    disabled__border: {
      hex: '#dcdcdc',
      hsla: 'hsla(0, 0%, 86.3%, 1)',
      rgba: 'var(--eds_interactive__disabled__border, rgba(220, 220, 220, 1))'
    },
    disabled__fill: {
      hex: '#eaeaea',
      hsla: 'hsla(0, 0%, 91.8%, 1)',
      rgba: 'var(--eds_interactive__disabled__fill, rgba(234, 234, 234, 1))'
    },
    link_on_interactive_colors: {
      hex: '#ffffff',
      hsla: 'hsla(0, 0%, 100%, 1)',
      rgba: 'var(--eds_interactive__link_on_interactive_colors, rgba(255, 255, 255, 1))'
    },
    icon_on_interactive_colors: {
      hex: '#ffffff',
      hsla: 'hsla(0, 0%, 100%, 1)',
      rgba: 'var(--eds_interactive__icon_on_interactive_colors, rgba(255, 255, 255, 1))'
    },
    link_in_snackbars: {
      hex: '#97cace',
      hsla: 'hsla(184, 35.9%, 70%, 1)',
      rgba: 'var(--eds_interactive__link_in_snackbars, rgba(151, 202, 206, 1))'
    },
    pressed_overlay_dark: {
      hex: '#000000',
      hsla: 'hsla(0, 0%, 0%, 0.2)',
      rgba: 'var(--eds_interactive__pressed_overlay_dark, rgba(0, 0, 0, 0.2))'
    },
    pressed_overlay_light: {
      hex: '#ffffff',
      hsla: 'hsla(0, 0%, 100%, 0.2)',
      rgba: 'var(--eds_interactive__pressed_overlay_light, rgba(255, 255, 255, 0.2))'
    }
  }
};

var elevation = {
  raised: '0 1px 5px rgba(0, 0, 0, 0.2),0 3px 4px rgba(0, 0, 0, 0.12),0 2px 4px rgba(0, 0, 0, 0.14)',
  none: '0 0 1px rgba(0, 0, 0, 0.14)',
  overlay: '0 1px 10px rgba(0, 0, 0, 0.2),0 4px 5px rgba(0, 0, 0, 0.12),0 2px 4px rgba(0, 0, 0, 0.14)',
  sticky: '0 4px 5px rgba(0, 0, 0, 0.2),0 3px 14px rgba(0, 0, 0, 0.12),0 8px 10px rgba(0, 0, 0, 0.14)',
  temporary_nav: '0 7px 8px rgba(0, 0, 0, 0.2),0 5px 22px rgba(0, 0, 0, 0.12),0 12px 17px rgba(0, 0, 0, 0.14)',
  above_scrim: '0 11px 15px rgba(0, 0, 0, 0.2),0 9px 46px rgba(0, 0, 0, 0.12),0 24px 38px rgba(0, 0, 0, 0.14)'
};

var interactions = {
  _modes: {
    compact: {
      pressed_dark_overlay: {
        blendMode: 'pass_through',
        pressedColor: 'transparent'
      },
      focused: {
        style: 'dashed',
        color: 'rgba(0, 112, 121, 1)',
        width: '2px'
      },
      pressed_light_overlay: {
        blendMode: 'pass_through',
        pressedColor: 'rgba(255, 255, 255, 1)'
      }
    }
  },
  pressed_dark_overlay: {
    blendMode: 'darken',
    pressedColor: 'rgba(0, 0, 0, 0.2)'
  },
  focused: {
    style: 'dashed',
    color: 'rgba(0, 112, 121, 1)',
    width: '2px'
  },
  pressed_light_overlay: {
    blendMode: 'pass_through',
    pressedColor: 'rgba(255, 255, 255, 0.2)'
  }
};

var shape = {
  _modes: {
    compact: {
      rounded: {
        minHeight: '24px',
        minWidth: '80px',
        borderRadius: '100px'
      },
      button: {
        minHeight: '24px',
        minWidth: '112px',
        borderRadius: '4px'
      },
      toggle: {
        minHeight: '24px',
        minWidth: '112px',
        borderRadius: '4px'
      },
      corners: {
        minHeight: '24px',
        minWidth: '112px',
        borderRadius: '4px'
      },
      icon_button: {
        minHeight: '32px',
        minWidth: '32px',
        borderRadius: '100px'
      },
      straight: {
        minHeight: '24px',
        minWidth: '112px',
        borderRadius: ''
      },
      toggle_rounded_border: {
        minHeight: '24px',
        minWidth: '2px',
        borderRadius: ''
      },
      toggle_straight_border: {
        minHeight: '24px',
        minWidth: '2px',
        borderRadius: ''
      },
      circle: {
        minHeight: '24px',
        minWidth: '24px',
        borderRadius: '100px'
      }
    }
  },
  toggle_straight_border: {
    minHeight: '36px',
    minWidth: '4px',
    borderRadius: ''
  },
  toggle_rounded_border: {
    minHeight: '36px',
    minWidth: '4px',
    borderRadius: ''
  },
  circle: {
    minHeight: '40px',
    minWidth: '40px',
    borderRadius: '100px'
  },
  rounded: {
    minHeight: '40px',
    minWidth: '80px',
    borderRadius: '100px'
  },
  button: {
    minHeight: '36px',
    minWidth: '112px',
    borderRadius: '4px'
  },
  toggle: {
    minHeight: '36px',
    minWidth: '112px',
    borderRadius: '4px'
  },
  corners: {
    minHeight: '36px',
    minWidth: '112px',
    borderRadius: '4px'
  },
  icon_button: {
    minHeight: '40px',
    minWidth: '40px',
    borderRadius: '100px'
  },
  field: {
    minHeight: '56px',
    minWidth: '294px',
    borderRadius: ''
  },
  straight: {
    minHeight: '36px',
    minWidth: '112px',
    borderRadius: ''
  },
  caret: {
    minHeight: '8px',
    minWidth: '6px',
    borderRadius: ''
  }
};

var typography = {
  heading: {
    h1_bold: {
      color: 'var(--eds_heading__h1_bold_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '2.000rem',
      fontWeight: 700,
      lineHeight: '1.250em',
      textAlign: 'left'
    },
    h1: {
      color: 'var(--eds_heading__h1_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '2.000rem',
      fontWeight: 400,
      lineHeight: '1.250em',
      textAlign: 'left'
    },
    h2: {
      color: 'var(--eds_heading__h2_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.750rem',
      fontWeight: 400,
      lineHeight: '1.250em',
      textAlign: 'left'
    },
    h3: {
      color: 'var(--eds_heading__h3_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.500rem',
      fontWeight: 400,
      lineHeight: '1.250em',
      textAlign: 'left'
    },
    h4: {
      color: 'var(--eds_heading__h4_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.250rem',
      fontWeight: 400,
      lineHeight: '1.600em',
      textAlign: 'left'
    },
    h5: {
      color: 'var(--eds_heading__h5_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.125rem',
      fontWeight: 500,
      letterSpacing: '0.013em',
      lineHeight: '1.333em',
      textAlign: 'left'
    },
    h6: {
      color: 'var(--eds_heading__h6_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 500,
      letterSpacing: '0.013em',
      lineHeight: '1.500em',
      textAlign: 'left'
    }
  },
  navigation: {
    menu_title: {
      color: 'var(--eds_navigation__menu_title_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      letterSpacing: '0.013em',
      lineHeight: '1.000em',
      textAlign: 'left'
    },
    menu_tabs: {
      color: 'var(--eds_navigation__menu_tabs_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 500,
      letterSpacing: '0.013em',
      lineHeight: '1.000em',
      textAlign: 'left'
    },
    label: {
      color: 'var(--eds_navigation__label_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.750rem',
      fontWeight: 500,
      lineHeight: '1.333em',
      textAlign: 'left'
    },
    drawer_active: {
      color: 'var(--eds_navigation__drawer_active_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 700,
      letterSpacing: '0.006em',
      lineHeight: '1.000em',
      textAlign: 'left'
    },
    drawer_inactive: {
      color: 'var(--eds_navigation__drawer_inactive_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 500,
      letterSpacing: '0.013em',
      lineHeight: '1.000em',
      textAlign: 'left'
    },
    button: {
      color: 'var(--eds_navigation__button_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.143em',
      textAlign: 'left'
    },
    breadcrumb: {
      color: 'var(--eds_navigation__breadcrumb_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.143em',
      textAlign: 'left'
    },
    breadcrumb_hover: {
      color: 'var(--eds_navigation__breadcrumb_hover_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.143em',
      textDecoration: 'underline',
      textAlign: 'left'
    },
    menu_title_hover: {
      color: 'var(--eds_navigation__menu_title_hover_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      letterSpacing: '0.013em',
      lineHeight: '1.000em',
      textAlign: 'left'
    }
  },
  input: {
    label: {
      color: 'var(--eds_input__label_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.750rem',
      fontWeight: 500,
      lineHeight: '1.333em',
      textAlign: 'left'
    },
    text: {
      color: 'var(--eds_input__text_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      letterSpacing: '0.025em',
      lineHeight: '1.500em',
      textAlign: 'left'
    },
    text_monospaced: {
      fontFeature: "'tnum' on,'lnum' on",
      color: 'var(--eds_input__text_monospaced_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      letterSpacing: '0.063em',
      lineHeight: '1.500em',
      textAlign: 'left'
    },
    helper: {
      color: 'var(--eds_input__helper_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.750rem',
      fontWeight: 500,
      letterSpacing: '0.013em',
      lineHeight: '1.333em',
      textAlign: 'left'
    }
  },
  paragraph: {
    body_short_italic: {
      color: 'var(--eds_paragraph__body_short_italic_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      lineHeight: '1.250em',
      fontStyle: 'italic',
      textAlign: 'left'
    },
    caption: {
      color: 'var(--eds_paragraph__caption_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.143em',
      textAlign: 'left'
    },
    meta: {
      color: 'var(--eds_paragraph__meta_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.625rem',
      fontWeight: 500,
      lineHeight: '1.600em',
      textAlign: 'left'
    },
    body_short: {
      color: 'var(--eds_paragraph__body_short_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      lineHeight: '1.250em',
      textAlign: 'left'
    },
    body_short_bold_italic: {
      color: 'var(--eds_paragraph__body_short_bold_italic_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 700,
      lineHeight: '1.250em',
      fontStyle: 'italic',
      textAlign: 'left'
    },
    body_short_bold: {
      color: 'var(--eds_paragraph__body_short_bold_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 700,
      lineHeight: '1.250em',
      textAlign: 'left'
    },
    body_short_link: {
      color: 'var(--eds_paragraph__body_short_link_color, rgba(0, 112, 121, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      lineHeight: '1.250em',
      textDecoration: 'underline',
      textAlign: 'left'
    },
    overline: {
      color: 'var(--eds_paragraph__overline_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.625rem',
      fontWeight: 500,
      letterSpacing: '0.069em',
      lineHeight: '1.600em',
      textTransform: 'uppercase',
      textAlign: 'left'
    },
    ingress: {
      color: 'var(--eds_paragraph__ingress_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: '1.333em',
      textAlign: 'left'
    },
    body_long: {
      color: 'var(--eds_paragraph__body_long_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      lineHeight: '1.500em',
      textAlign: 'left'
    },
    body_long_link: {
      color: 'var(--eds_paragraph__body_long_link_color, rgba(0, 112, 121, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      lineHeight: '1.500em',
      textDecoration: 'underline',
      textAlign: 'left'
    },
    body_long_italic: {
      color: 'var(--eds_paragraph__body_long_italic_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 400,
      lineHeight: '1.500em',
      fontStyle: 'italic',
      textAlign: 'left'
    },
    body_long_bold: {
      color: 'var(--eds_paragraph__body_long_bold_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 700,
      lineHeight: '1.500em',
      textAlign: 'left'
    },
    body_long_bold_italic: {
      color: 'var(--eds_paragraph__body_long_bold_italic_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 700,
      lineHeight: '1.500em',
      fontStyle: 'italic',
      textAlign: 'left'
    }
  },
  table: {
    cell_header: {
      color: 'var(--eds_table__cell_header_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.429em',
      textAlign: 'left'
    },
    cell_text: {
      color: 'var(--eds_table__cell_text_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.429em',
      textAlign: 'left'
    },
    cell_text_bold: {
      color: 'var(--eds_table__cell_text_bold_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.429em',
      textAlign: 'left'
    },
    cell_text_link: {
      color: 'var(--eds_table__cell_text_link_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.429em',
      textDecoration: 'underline',
      textAlign: 'left'
    },
    cell_numeric_monospaced: {
      fontFeature: "'tnum' on,'lnum' on",
      color: 'var(--eds_table__cell_numeric_monospaced_color, rgba(0, 0, 0, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.429em',
      textAlign: 'left'
    }
  },
  _modes: {
    compact: {
      table: {
        cell_header: {
          color: 'var(--eds_table__cell_header_color, rgba(0, 0, 0, 1))',
          fontFamily: 'Equinor',
          fontSize: '0.875rem',
          fontWeight: 700,
          lineHeight: '1.143em',
          textAlign: 'left'
        },
        cell_text: {
          color: 'var(--eds_table__cell_text_color, rgba(0, 0, 0, 1))',
          fontFamily: 'Equinor',
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: '1.143em',
          textAlign: 'left'
        },
        cell_text_bold: {
          color: 'var(--eds_table__cell_text_bold_color, rgba(0, 0, 0, 1))',
          fontFamily: 'Equinor',
          fontSize: '0.875rem',
          fontWeight: 700,
          lineHeight: '1.143em',
          textAlign: 'left'
        },
        cell_text_link: {
          color: 'var(--eds_table__cell_text_link_color, rgba(0, 0, 0, 1))',
          fontFamily: 'Equinor',
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: '1.143em',
          textDecoration: 'underline',
          textAlign: 'left'
        },
        cell_numeric_monospaced: {
          fontFeature: "'tnum' on,'lnum' on",
          color: 'var(--eds_table__cell_numeric_monospaced_color, rgba(0, 0, 0, 1))',
          fontFamily: 'Equinor',
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: '1.143em',
          textAlign: 'left'
        }
      }
    }
  },
  ui: {
    tooltip: {
      color: 'var(--eds_ui__tooltip_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.750rem',
      fontWeight: 500,
      lineHeight: '1.333em',
      textAlign: 'left'
    },
    snackbar: {
      color: 'var(--eds_ui__snackbar_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.750rem',
      fontWeight: 500,
      lineHeight: '1.333em',
      textAlign: 'left'
    },
    accordion_header: {
      color: 'var(--eds_ui__accordion_header_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '1.000rem',
      fontWeight: 500,
      lineHeight: '1.500em',
      textAlign: 'left'
    },
    chip__badge: {
      color: 'var(--eds_ui__chip__badge_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.750rem',
      fontWeight: 500,
      lineHeight: '1.333em',
      textAlign: 'left'
    },
    chart: {
      color: 'var(--eds_ui__chart_color, rgba(61, 61, 61, 1))',
      fontFamily: 'Equinor',
      fontSize: '0.750rem',
      fontWeight: 500,
      lineHeight: '1.333em',
      textAlign: 'left'
    }
  }
};

var spacings = {
  comfortable: {
    xxx_large: '48px',
    xx_large: '40px',
    x_large: '32px',
    large: '24px',
    medium: '16px',
    medium_small: '12px',
    small: '8px',
    x_small: '4px',
    xx_small: '2px'
  }
};

export var darkTokens = {
  clickbounds: clickbounds,
  colors: colors,
  elevation: elevation,
  interactions: interactions,
  shape: shape,
  typography: typography,
  spacings: spacings
};

