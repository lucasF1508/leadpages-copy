'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _pt = require('prop-types');
var React = require('react');
var styles = require('@material-ui/core/styles');
var Grid = require('@material-ui/core/Grid');
var Typography = require('@material-ui/core/Typography');
var Button = require('@material-ui/core/Button');
var IconButton = require('@material-ui/core/IconButton');
var useMediaQuery = require('@material-ui/core/useMediaQuery');
var FilterListIcon = require('@material-ui/icons/FilterList');
var clsx = require('clsx');
var InputAdornment = require('@material-ui/core/InputAdornment');
var TextField = require('@material-ui/core/TextField');
var SearchIcon = require('@material-ui/icons/Search');
var AddCircleRoundedIcon = require('@material-ui/icons/AddCircleRounded');
var Fade = require('@material-ui/core/Fade');
var Chip = require('@material-ui/core/Chip');
var ui = require('@lp/ui');
var ExpandLess = require('@material-ui/icons/ExpandLess');
var ExpandMore = require('@material-ui/icons/ExpandMore');
var List = require('@material-ui/core/List');
var ListItem = require('@material-ui/core/ListItem');
var Link = require('@material-ui/core/Link');
var Collapse = require('@material-ui/core/Collapse');
var GradeIcon = require('@material-ui/icons/Grade');
var CircularProgress = require('@material-ui/core/CircularProgress');
var ChevronRight = require('@material-ui/icons/ChevronRight');
var ChevronLeft = require('@material-ui/icons/ChevronLeft');
var Tooltip = require('@material-ui/core/Tooltip');
var Drawer = require('@material-ui/core/Drawer');
var AppBar = require('@material-ui/core/AppBar');
var Slide = require('@material-ui/core/Slide');
var Chevron = require('@lp/chevron');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _pt__default = /*#__PURE__*/_interopDefaultLegacy(_pt);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var useMediaQuery__default = /*#__PURE__*/_interopDefaultLegacy(useMediaQuery);
var FilterListIcon__default = /*#__PURE__*/_interopDefaultLegacy(FilterListIcon);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var InputAdornment__default = /*#__PURE__*/_interopDefaultLegacy(InputAdornment);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var SearchIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchIcon);
var AddCircleRoundedIcon__default = /*#__PURE__*/_interopDefaultLegacy(AddCircleRoundedIcon);
var Fade__default = /*#__PURE__*/_interopDefaultLegacy(Fade);
var Chip__default = /*#__PURE__*/_interopDefaultLegacy(Chip);
var ExpandLess__default = /*#__PURE__*/_interopDefaultLegacy(ExpandLess);
var ExpandMore__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMore);
var List__default = /*#__PURE__*/_interopDefaultLegacy(List);
var ListItem__default = /*#__PURE__*/_interopDefaultLegacy(ListItem);
var Link__default = /*#__PURE__*/_interopDefaultLegacy(Link);
var Collapse__default = /*#__PURE__*/_interopDefaultLegacy(Collapse);
var GradeIcon__default = /*#__PURE__*/_interopDefaultLegacy(GradeIcon);
var CircularProgress__default = /*#__PURE__*/_interopDefaultLegacy(CircularProgress);
var ChevronRight__default = /*#__PURE__*/_interopDefaultLegacy(ChevronRight);
var ChevronLeft__default = /*#__PURE__*/_interopDefaultLegacy(ChevronLeft);
var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);
var Drawer__default = /*#__PURE__*/_interopDefaultLegacy(Drawer);
var AppBar__default = /*#__PURE__*/_interopDefaultLegacy(AppBar);
var Slide__default = /*#__PURE__*/_interopDefaultLegacy(Slide);
var Chevron__default = /*#__PURE__*/_interopDefaultLegacy(Chevron);

var useStyles = styles.makeStyles(function () {
  return {
    root: {}
  };
}, {
  classNamePrefix: 'Gallery'
});

var Gallery = function Gallery(_ref) {
  var infiniteRef = _ref.infiniteRef,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: infiniteRef,
    className: classes.root
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    spacing: 3
  }, children));
};

process.env.NODE_ENV !== "production" ? Gallery.propTypes = {
  children: _pt__default['default'].node.isRequired
} : void 0;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var useStyles$1 = styles.makeStyles(function (_ref) {
  var _searchContainer;

  var breakpoints = _ref.breakpoints,
      spacing = _ref.spacing;
  return {
    searchContainer: (_searchContainer = {
      paddingBottom: spacing(3)
    }, _defineProperty(_searchContainer, breakpoints.down(480), {
      width: 'calc(100% - 60px)'
    }), _defineProperty(_searchContainer, breakpoints.between(480, 767), {
      width: 292
    }), _defineProperty(_searchContainer, breakpoints.between(768, 1024), {
      width: 'calc(50% - 12px)'
    }), _defineProperty(_searchContainer, breakpoints.between(1024, 1025), {
      width: 340
    }), _defineProperty(_searchContainer, breakpoints.up(1025), {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 240,
      spacing: 0,
      paddingBottom: 0
    }), _searchContainer),
    clearIconButton: {
      backgroundColor: 'inherit',
      '&:hover': {
        backgroundColor: 'inherit'
      }
    },
    clearIcon: {
      fontSize: '16px',
      transform: 'rotate(45deg)'
    }
  };
}, {
  classNamePrefix: 'TemplateSearch'
});

var _ref3 = /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
  position: "start"
}, /*#__PURE__*/React__default['default'].createElement(SearchIcon__default['default'], null));

var TemplateSearch = function TemplateSearch(_ref2) {
  var _inputRef$current;

  var inputRef = _ref2.inputRef,
      onChange = _ref2.onChange,
      onClear = _ref2.onClear,
      disabled = _ref2.disabled;
  var classes = useStyles$1();
  var isDesktop = useMediaQuery__default['default'](function (theme) {
    return theme.breakpoints.up('md');
  });
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.searchContainer
  }, /*#__PURE__*/React__default['default'].createElement(TextField__default['default'], {
    disabled: disabled,
    size: isDesktop ? 'small' : 'medium',
    fullWidth: true,
    placeholder: "Search",
    onChange: onChange,
    inputProps: {
      'aria-label': 'Template Search'
    } // eslint-disable-next-line react/jsx-no-duplicate-props
    ,
    InputProps: {
      inputRef: inputRef,
      startAdornment: _ref3,
      endAdornment: ((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.value) && /*#__PURE__*/React__default['default'].createElement(InputAdornment__default['default'], {
        position: "end"
      }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
        className: classes.clearIconButton,
        disableRipple: true,
        disableFocusRipple: true,
        onClick: onClear,
        size: "small"
      }, /*#__PURE__*/React__default['default'].createElement(AddCircleRoundedIcon__default['default'], {
        className: classes.clearIcon
      })))
    }
  }));
};

process.env.NODE_ENV !== "production" ? TemplateSearch.propTypes = {
  onChange: _pt__default['default'].func.isRequired,
  onClear: _pt__default['default'].func.isRequired,
  disabled: _pt__default['default'].bool.isRequired
} : void 0;

var useStyles$2 = styles.makeStyles(function (_ref) {
  var _filterButton;

  var breakpoints = _ref.breakpoints,
      spacing = _ref.spacing,
      palette = _ref.palette;
  return {
    root: _defineProperty({
      flexDirection: 'column-reverse'
    }, breakpoints.up(1025), {
      flexDirection: 'column'
    }),
    results: function results() {
      return _defineProperty({
        marginBottom: 24,
        marginTop: 0
      }, breakpoints.up(1025), {
        marginBottom: 0,
        marginTop: 0
      });
    },
    description: {
      marginRight: spacing(2)
    },
    button: _defineProperty({
      padding: 0
    }, breakpoints.up(768), {
      padding: "".concat(spacing(1), "px ").concat(spacing(2), "px")
    }),
    filterButton: (_filterButton = {
      position: 'absolute',
      right: 0,
      top: 0,
      color: 'white',
      backgroundColor: palette.primary.main
    }, _defineProperty(_filterButton, breakpoints.down(480), {
      width: 48,
      height: 48
    }), _defineProperty(_filterButton, breakpoints.up(480), {
      maxWidth: 117
    }), _filterButton),
    filterButtonText: {
      marginLeft: 7
    }
  };
}, {
  classNamePrefix: 'SearchAndResults'
});

var _ref4 = /*#__PURE__*/React__default['default'].createElement(FilterListIcon__default['default'], null);

var SearchAndResults = function SearchAndResults(_ref3) {
  var inputRef = _ref3.inputRef,
      onChange = _ref3.onChange,
      onClearInput = _ref3.onClearInput,
      onClearFilters = _ref3.onClearFilters,
      filter = _ref3.filter,
      numTemplates = _ref3.numTemplates,
      className = _ref3.className,
      disableSearch = _ref3.disableSearch,
      onToggleSidebar = _ref3.onToggleSidebar;
  var above1024Breakpoint = useMediaQuery__default['default'](function (theme) {
    return theme.breakpoints.up(1025);
  });
  var at480Breakpoint = useMediaQuery__default['default'](function (theme) {
    return theme.breakpoints.up(480);
  });
  var ButtonComponent = at480Breakpoint ? Button__default['default'] : IconButton__default['default'];
  var classes = useStyles$2();
  return /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    className: clsx__default['default'](classes.root, className)
  }, filter && numTemplates > 0 && /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    direction: "column",
    justify: "center",
    className: classes.results
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    alignItems: "baseline"
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    variant: "body1",
    component: "span",
    className: classes.description
  }, "Showing ", /*#__PURE__*/React__default['default'].createElement("b", null, filter), " templates"), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    variant: "text",
    onClick: onClearFilters,
    className: classes.button
  }, "Clear")))), /*#__PURE__*/React__default['default'].createElement(TemplateSearch, {
    inputRef: inputRef,
    onChange: onChange,
    onClear: onClearInput,
    disabled: disableSearch
  }), onToggleSidebar && !above1024Breakpoint && /*#__PURE__*/React__default['default'].createElement(ButtonComponent, {
    "aria-label": "Filter",
    className: classes.filterButton,
    onClick: onToggleSidebar
  }, _ref4, at480Breakpoint && /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    className: classes.filterButtonText,
    variant: "body1"
  }, "Filter")));
};

process.env.NODE_ENV !== "production" ? SearchAndResults.propTypes = {
  onChange: _pt__default['default'].func.isRequired,
  onClearInput: _pt__default['default'].func.isRequired,
  onClearFilters: _pt__default['default'].func.isRequired,
  filter: _pt__default['default'].string,
  numTemplates: _pt__default['default'].number.isRequired,
  className: _pt__default['default'].string,
  disableSearch: _pt__default['default'].bool.isRequired,
  onToggleSidebar: _pt__default['default'].func
} : void 0;

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var TemplateKind;

(function (TemplateKind) {
  TemplateKind["Leadpage"] = "LeadpageTemplate";
  TemplateKind["Site"] = "SiteTemplate";
})(TemplateKind || (TemplateKind = {}));

var TaxonCollection;

(function (TaxonCollection) {
  TaxonCollection["categories"] = "categories";
  TaxonCollection["tags"] = "tags";
  TaxonCollection["id"] = "id";
})(TaxonCollection || (TaxonCollection = {}));

var TaxonSection;

(function (TaxonSection) {
  TaxonSection["Collections"] = "Collections";
  TaxonSection["Content"] = "Content";
  TaxonSection["Industries"] = "Industries";
  TaxonSection["Layouts"] = "Layouts";
  TaxonSection["Page Elements"] = "Page Elements";
  TaxonSection["Page Types"] = "Page Types";
  TaxonSection["Templates"] = "Templates";
  TaxonSection["Style"] = "Style";
  TaxonSection["Color"] = "Color";
  TaxonSection["Promotion"] = "Promotion";
})(TaxonSection || (TaxonSection = {}));

var FilterOperators;

(function (FilterOperators) {
  FilterOperators["!intersects"] = "[!intersects]";
  FilterOperators["intersects"] = "[intersects]";
  FilterOperators["!superset"] = "[!superset]";
  FilterOperators["superset"] = "[superset]";
  FilterOperators["!contains"] = "[!contains]";
  FilterOperators["contains"] = "[contains]";
  FilterOperators["icontains"] = "[icontains]";
  FilterOperators["in"] = "[in]";
  FilterOperators["eq"] = "[eq]";
  FilterOperators["ne"] = "[ne]";
  FilterOperators["lt"] = "[lt]";
  FilterOperators["gt"] = "[gt]";
  FilterOperators["lte"] = "[lte]";
  FilterOperators["gte"] = "[gte]";
  FilterOperators["empty"] = "";
})(FilterOperators || (FilterOperators = {}));

var SortFields;

(function (SortFields) {
  SortFields["New"] = "-release_date";
  SortFields["Conversion"] = "-conversion_rate";
  SortFields["Popular"] = "-pages";
})(SortFields || (SortFields = {}));

var FilterProps;

(function (FilterProps) {
  FilterProps["limit"] = "limit";
  FilterProps["cursor"] = "cursor";
  FilterProps["id"] = "id";
  FilterProps["name"] = "name";
  FilterProps["kind"] = "kind";
  FilterProps["legacy_id"] = "legacy_id";
  FilterProps["deleted"] = "deleted";
  FilterProps["release_date"] = "release_date";
  FilterProps["conversion_rate"] = "conversion_rate";
  FilterProps["categories"] = "categories";
  FilterProps["tags"] = "tags";
  FilterProps["order_by"] = "order_by";
})(FilterProps || (FilterProps = {}));

const img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100' height='111'%3e %3cg fill='none'%3e %3cpath fill='white' d='M0 0h100v111H0z'/%3e %3cpath fill='%23090C12' fill-opacity='.04' d='M0 0h100v6H0zm0 28h100v36H0zm10 47h25v19H10zm29 0h23v19H39z'/%3e %3cpath fill='%23090C12' fill-opacity='.08' d='M37 22h6v1h-6z'/%3e %3cpath fill='%23090C12' fill-opacity='.04' d='M10 97h14v2H10zm29 0h14v2H39zm-29 4h25v1H10zm29 0h23v1H39zm-29 3h25v1H10zm29 0h23v1H39zm27-29h24v19H66zm0 22h14v2H66zm0 4h25v1H66zm0 3h25v1H66z'/%3e %3cpath fill='white' d='M18 43h65v1H18zm12 4h41v1H30z'/%3e %3cpath fill='%23090C12' fill-opacity='.04' d='M10 71h16v1H10z'/%3e %3cpath fill='%23090C12' fill-opacity='.08' d='M47 22h6v1h-6zm10 0h6v1h-6zM40 54h20v4H40z'/%3e %3cpath fill='white' d='M23 36h54v3H23z'/%3e %3ccircle cx='7' cy='3' r='1' fill='%23090C12' fill-opacity='.08'/%3e %3ccircle cx='3' cy='3' r='1' fill='%23090C12' fill-opacity='.08'/%3e %3ccircle cx='11' cy='3' r='1' fill='%23090C12' fill-opacity='.08'/%3e %3ccircle cx='50' cy='15' r='4' fill='%23090C12' fill-opacity='.08'/%3e %3c/g%3e%3c/svg%3e";

const img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100' height='63'%3e %3cg fill='none' fill-rule='nonzero'%3e %3cpath fill='white' d='M0 0h100v63H0z' /%3e %3cpath fill='%23090C12' fill-opacity='.04' d='M11 16h80v36H11z' /%3e %3cpath fill='white' d='M18 31h65v1H18zM30 35h41v1H30z' /%3e %3cpath fill='%23090C12' fill-opacity='.08' d='M40 42h20v4H40z' /%3e %3cpath fill='white' d='M23 24h54v3H23z' /%3e %3cpath fill='%23090C12' fill-opacity='.04' d='M0 0h100v6H0z' /%3e %3ccircle cx='7' cy='3' r='1' fill='%23090C12' fill-opacity='.08' /%3e %3ccircle cx='3' cy='3' r='1' fill='%23090C12' fill-opacity='.08' /%3e %3ccircle cx='11' cy='3' r='1' fill='%23090C12' fill-opacity='.08' /%3e %3c/g%3e%3c/svg%3e";

var supported = null; // Adapted from https://stackoverflow.com/questions/5573096/detecting-webp-support#answer-27232658

function supportsWebP() {
  if (supported === null) {
    var elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
      // was able or not to get WebP representation
      supported = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } else {
      // very old browser like IE 8, canvas not supported
      supported = false;
    }
  }

  return supported;
}

var useStyles$3 = styles.makeStyles(function (_ref) {
  var _thumbnail;

  var breakpoints = _ref.breakpoints,
      spacing = _ref.spacing,
      transitions = _ref.transitions;
  return {
    thumbnail: (_thumbnail = {}, _defineProperty(_thumbnail, breakpoints.between(414, 1025), {
      maxWidth: '50%',
      // Material UI does not support adding custom grid keys, so we need to override a subset
      flexBasis: '50%'
    }), _defineProperty(_thumbnail, breakpoints.up(1920), {
      maxWidth: '25%',
      // Material UI does not support adding custom grid keys, so we need to override a subset
      flexBasis: '25%'
    }), _thumbnail),
    templateName: {
      margin: "".concat(spacing(1.5), "px 0"),
      color: '#090c12' // This color is currently only defined in the product theme

    },
    item: function item(_ref2) {
      var templateKind = _ref2.templateKind;
      return {
        padding: 0,
        width: '100%',
        position: 'relative',
        paddingBottom: templateKind === TemplateKind.Leadpage ? '63%' : '111%',
        overflow: 'visible'
      };
    },
    itemInner: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    itemInnerLoaded: {
      opacity: 1
    },
    imgContainer: {
      overflow: 'hidden',
      height: '100%',
      width: '100%'
    },
    img: {
      width: '100%',
      zIndex: -1
    },
    overlay: {
      position: 'absolute',
      opacity: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(255,255,255,0.8)',
      '&:hover': {
        opacity: 1
      },
      transition: transitions.create('opacity', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shortest
      })
    },
    actions: {
      height: '100%',
      '& button:not(:last-child)': {
        marginBottom: spacing(1.5)
      }
    },
    newFlag: {
      position: 'absolute',
      top: spacing(1.5),
      right: spacing(-1),
      boxShadow: '0 10px 20px -5px rgba(0,0,0,0.08)',
      textTransform: 'uppercase'
    },
    isLoading: {
      opacity: 1
    }
  };
}, {
  classNamePrefix: 'TemplateThumbnail'
});

var getImageSrc = function getImageSrc(template) {
  if (template.ui.isPlaceholder) {
    return '';
  }

  var webPThumb = template.template.thumbnailUrlWebp || '';
  return webPThumb && supportsWebP() ? webPThumb : template.template.thumbnailUrl || '';
};

var TemplateThumbnail = function TemplateThumbnail(_ref3) {
  var template = _ref3.template,
      onPreviewTemplate = _ref3.onPreviewTemplate,
      onSelectTemplate = _ref3.onSelectTemplate;
  var classes = useStyles$3({
    templateKind: template.kind
  });

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasLoaded = _useState2[0],
      setHasLoaded = _useState2[1];

  var isNew = template.template.tags && template.template.tags.includes('new');
  var showPlaceholder = template.ui.isPlaceholder || !hasLoaded;

  var handleImgLoad = function handleImgLoad() {
    setHasLoaded(true);
  };

  return /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    key: template._meta.id,
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    className: classes.thumbnail
  }, /*#__PURE__*/React__default['default'].createElement(ui.ShadowBox, {
    raised: "hover",
    className: classes.item
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.itemInner
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.imgContainer
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    className: classes.img,
    alt: template.template.name,
    onLoad: handleImgLoad,
    src: getImageSrc(template),
    "data-qa-selector": "template-thumbnail-image"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default'](classes.overlay, showPlaceholder && classes.isLoading)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.imgContainer
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    className: classes.img,
    src: template.kind === TemplateKind.Leadpage ? img$1 : img,
    alt: "Loading"
  })))), hasLoaded && /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.overlay
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    direction: "column",
    alignItems: "center",
    justify: "center",
    className: classes.actions
  }, onSelectTemplate && /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    id: "select-template-".concat(template.ui.guid),
    onClick: function onClick() {
      return onSelectTemplate(template);
    }
  }, "Start Building"), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    id: "preview-template-".concat(template.ui.guid),
    variant: onSelectTemplate ? 'text' : 'contained',
    onClick: function onClick() {
      return onPreviewTemplate(template);
    },
    "data-qa-selector": "overlaid-preview-button"
  }, "Preview"))), isNew && /*#__PURE__*/React__default['default'].createElement(Fade__default['default'], {
    in: hasLoaded,
    timeout: {
      enter: 300,
      exit: 0
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Chip__default['default'], {
    className: classes.newFlag,
    color: "secondary",
    label: "New"
  }))))), /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    variant: "body1",
    className: classes.templateName,
    style: {
      minHeight: '24px'
    }
  }, !showPlaceholder && template.template.name));
};

process.env.NODE_ENV !== "production" ? TemplateThumbnail.propTypes = {
  onPreviewTemplate: _pt__default['default'].func.isRequired,
  onSelectTemplate: _pt__default['default'].func
} : void 0;

var FEATURED_OPTION = 'holiday';
var taxonColorHexValue = Object.freeze({
  purple: '#3F2CC5',
  blue: '#1B5BF8',
  'blue-green': '#15A2B2',
  green: '#1CA671',
  yellow: '#FFC51A',
  orange: '#F67503',
  red: '#FE2910',
  pink: '#ffc0cb',
  black: '#000000',
  gray: '#7B7B7B',
  white: '#FFFFFF'
});
var useStyles$4 = styles.makeStyles(function (theme) {
  return {
    collapseContainer: {
      width: '100%'
    },
    colorSwatch: {
      border: 'solid 1px rgba(0,0,0,0.1)',
      borderRadius: '50%',
      width: 18,
      height: 18,
      marginRight: 9
    },
    nestedSectionList: {
      padding: 0
    },
    featuredChip: {
      backgroundColor: theme.palette.success.light,
      marginLeft: theme.spacing(1)
    },
    chipIcon: {
      color: theme.palette.common.white,
      height: 10,
      width: 10
    }
  };
}, {
  classNamePrefix: 'FilterItem'
});
var FilterSectionList = function FilterSectionList(_ref) {
  var taxons = _ref.taxons,
      currentValue = _ref.currentValue,
      onSelect = _ref.onSelect,
      isOpen = _ref.isOpen,
      listItemClass = _ref.listItemClass,
      section = _ref.section,
      onTransitionStart = _ref.onTransitionStart,
      onTransitionEnd = _ref.onTransitionEnd;
  var classes = useStyles$4();
  return /*#__PURE__*/React__default['default'].createElement(ListItem__default['default'], {
    className: classes.nestedSectionList
  }, /*#__PURE__*/React__default['default'].createElement(Collapse__default['default'], {
    in: isOpen,
    timeout: 200,
    className: classes.collapseContainer,
    onEntering: onTransitionStart,
    onExiting: onTransitionStart,
    onEntered: onTransitionEnd,
    onExited: onTransitionEnd
  }, /*#__PURE__*/React__default['default'].createElement(List__default['default'], {
    disablePadding: true
  }, taxons && taxons.length >= 1 && taxons.map(function (option) {
    return /*#__PURE__*/React__default['default'].createElement(ListItem__default['default'], {
      key: option.value,
      role: "button",
      className: listItemClass,
      selected: option.value === currentValue,
      disabled: option.value === currentValue,
      onClick: function onClick() {
        onSelect(option);
      }
    }, section && section === TaxonSection.Color && /*#__PURE__*/React__default['default'].createElement("span", {
      className: classes.colorSwatch,
      style: {
        backgroundColor: taxonColorHexValue[option.value]
      }
    }), option.label, option.value === FEATURED_OPTION && /*#__PURE__*/React__default['default'].createElement(Chip__default['default'], {
      size: "small",
      className: classes.featuredChip,
      icon: /*#__PURE__*/React__default['default'].createElement(GradeIcon__default['default'], {
        className: classes.chipIcon
      }),
      label: "FEATURED"
    }));
  }))));
};
process.env.NODE_ENV !== "production" ? FilterSectionList.propTypes = {
  taxons: _pt__default['default'].array.isRequired,
  currentValue: _pt__default['default'].string.isRequired,
  isOpen: _pt__default['default'].bool.isRequired,
  listItemClass: _pt__default['default'].string.isRequired,
  section: _pt__default['default'].string,
  onTransitionStart: _pt__default['default'].func,
  onTransitionEnd: _pt__default['default'].func
} : void 0;

var standardTaxonSections = [{
  label: 'Collections',
  kind: TaxonSection.Collections,
  collection: TaxonCollection.categories,
  taxons: []
}, {
  label: 'Page Type',
  kind: TaxonSection['Page Types'],
  collection: TaxonCollection.categories,
  taxons: []
}, {
  label: 'Industry',
  kind: TaxonSection.Industries,
  collection: TaxonCollection.categories,
  taxons: []
}, {
  label: 'Style',
  kind: TaxonSection.Style,
  collection: TaxonCollection.tags,
  taxons: []
}, {
  label: 'Color',
  kind: TaxonSection.Color,
  collection: TaxonCollection.tags,
  taxons: []
}];
var promotionTaxonSections = [{
  label: 'Promotion',
  kind: TaxonSection.Promotion,
  collection: TaxonCollection.categories,
  taxons: []
}];
var colorOrder = Object.freeze(['purple', 'blue', 'blue-green', 'green', 'yellow', 'orange', 'red', 'gray', 'pink', 'black', 'white']);

function sortLabelAlphabetically(a, b) {
  var labelA = a.label.toUpperCase();
  var labelB = b.label.toUpperCase();
  if (labelA < labelB) return -1;
  if (labelA > labelB) return 1;
  return 0;
}

function sortTaxonColors(a, b) {
  var indexA = colorOrder.indexOf(a.value);
  var indexB = colorOrder.indexOf(b.value);
  if (indexA > indexB) return 1;
  return indexB > indexA ? -1 : 0;
}

function sortSectionTaxons(section, taxons) {
  if (section === TaxonSection.Color) {
    return taxons.sort(sortTaxonColors);
  }

  return taxons.sort(sortLabelAlphabetically);
}

function createGroupedTaxons(taxons, sectionsToCreate, excludedSections) {
  var groupedTaxons = {}; // Filter out any excluded sections

  var sections = excludedSections && excludedSections.length >= 1 ? sectionsToCreate.filter(function (section) {
    return !excludedSections.includes(section.kind);
  }) : sectionsToCreate;
  sections.forEach(function (sectionInfo) {
    if (sectionInfo === null || sectionInfo === void 0 ? void 0 : sectionInfo.kind) groupedTaxons[sectionInfo === null || sectionInfo === void 0 ? void 0 : sectionInfo.kind] = [];
  });

  if (taxons && taxons.length >= 1) {
    taxons.forEach(function (taxon) {
      var taxonType = taxon.section;

      if (groupedTaxons[taxonType]) {
        groupedTaxons[taxonType].push(taxon);
      }
    });
  }

  return sections.map(function (_ref) {
    var label = _ref.label,
        kind = _ref.kind,
        collection = _ref.collection;
    return {
      label: label,
      kind: kind,
      collection: collection,
      taxons: sortSectionTaxons(kind, groupedTaxons[kind])
    };
  });
}

var listItemPadding = 12;
var listItemMarginLeft = 20;
var useStyles$5 = styles.makeStyles(function (theme) {
  return {
    root: {
      fontFamily: theme.typography.fontFamily
    },
    listItem: function listItem(_ref2) {
      var listItemWidth = _ref2.listItemWidth;
      return {
        flexWrap: 'wrap',
        minHeight: '40px',
        margin: "0 0 0 ".concat(listItemMarginLeft, "px"),
        maxWidth: listItemWidth,
        cursor: 'pointer',
        color: theme.palette.grey[100],
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: theme.typography.fontWeightRegular,
        padding: "8px ".concat(listItemPadding, "px"),
        lineHeight: '20px',
        textDecoration: 'none',
        borderRadius: theme.shape.borderRadius,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
          backgroundColor: 'rgba(15, 12, 9, 0.04)',
          outline: 0,
          transition: theme.transitions.create('background-color', {
            duration: 20
          })
        },
        '&:active': {
          backgroundColor: 'rgba(15, 12, 9, 0.08)',
          color: theme.palette.grey[100]
        },
        '&.Mui-selected': {
          fontWeight: theme.typography.fontWeightBold,
          backgroundColor: 'inherit',
          '&:before': {
            position: 'absolute',
            left: "-".concat(listItemMarginLeft, "px"),
            top: 8,
            content: '""',
            width: 3,
            height: 24,
            backgroundColor: theme.palette.primary.main
          }
        },
        '&.Mui-disabled': {
          opacity: 1,
          pointerEvents: 'none'
        }
      };
    },
    listItemSectionTitle: {
      display: 'flex',
      justifyContent: 'space-between',
      '&.no-dropdown:hover': {
        cursor: 'auto',
        backgroundColor: 'inherit',
        transition: 'none'
      }
    },
    listItemSectionCaption: {
      fontWeight: 600,
      fontSize: 13
    },
    expandIcon: {
      fontSize: 23,
      marginRight: -5,
      color: 'rgba(9,12,18,0.5)'
    },
    divider: function divider(_ref3) {
      var listItemWidth = _ref3.listItemWidth;
      return {
        borderBottom: '1px solid #D6DCE8',
        margin: "".concat(listItemPadding, "px ").concat(listItemPadding, "px ").concat(listItemPadding, "px ").concat(listItemPadding + listItemMarginLeft, "px"),
        maxWidth: listItemWidth - 24
      };
    },
    clearButton: {
      padding: '4px 8px',
      lineHeight: '15px'
    },
    clearExpanderWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    activeTaxonLabel: {
      fontWeight: 400,
      width: '100%',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      color: theme.palette.greyTransparent[70],
      marginTop: 4
    }
  };
}, {
  classNamePrefix: 'FilterSidebar'
});
var FilterSidebar = function FilterSidebar(_ref4) {
  var taxons = _ref4.taxons,
      currentFilters = _ref4.currentFilters,
      onUpdateCategory = _ref4.onUpdateCategory,
      onUpdateTag = _ref4.onUpdateTag,
      onSortSelect = _ref4.onSortSelect,
      onClearFilter = _ref4.onClearFilter,
      legacyPageRoute = _ref4.legacyPageRoute,
      onSectionTransitionStart = _ref4.onSectionTransitionStart,
      onSectionTransitionEnd = _ref4.onSectionTransitionEnd,
      orderByList = _ref4.orderByList,
      excludedSections = _ref4.excludedSections,
      tracker = _ref4.tracker,
      expandedSection = _ref4.expandedSection,
      selectedTaxon = _ref4.selectedTaxon,
      listClass = _ref4.listClass,
      listItemWidth = _ref4.listItemWidth;
  var classes = useStyles$5({
    listItemWidth: listItemWidth
  });

  var _useState = React.useState(expandedSection),
      _useState2 = _slicedToArray(_useState, 2),
      activeFilterSection = _useState2[0],
      setActiveFilterSection = _useState2[1];

  var _useState3 = React.useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showCollapsedLabel = _useState4[0],
      setShowCollapsedLabel = _useState4[1];

  React.useEffect(function () {
    if (legacyPageRoute && (tracker === null || tracker === void 0 ? void 0 : tracker.watchLegacyLink)) {
      tracker.watchLegacyLink('#view-legacy-templates');
    }
  }, [tracker, legacyPageRoute]);
  var timeoutRef = React.useRef(); // Do not show taxon label as the collapse transitions from open to closed

  var hideLabelForTransition = function hideLabelForTransition() {
    setShowCollapsedLabel(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(function () {
      setShowCollapsedLabel(true);
    }, 100);
  };

  var handleDropdown = function handleDropdown(selectedSection, label) {
    if (activeFilterSection === selectedSection) {
      if (selectedSection === (selectedTaxon === null || selectedTaxon === void 0 ? void 0 : selectedTaxon.section)) {
        hideLabelForTransition();
      }

      setActiveFilterSection('none');
    } else {
      setActiveFilterSection(selectedSection);

      if (tracker === null || tracker === void 0 ? void 0 : tracker.onOpenFilters) {
        tracker.onOpenFilters({
          kind: label
        });
      }
    }
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React__default['default'].createElement(List__default['default'], {
    className: listClass,
    disablePadding: true
  }, /*#__PURE__*/React__default['default'].createElement(ListItem__default['default'], {
    className: clsx__default['default'](classes.listItem, classes.listItemSectionTitle, 'no-dropdown')
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    className: classes.listItemSectionCaption,
    variant: "caption",
    component: "span"
  }, "Sort By")), /*#__PURE__*/React__default['default'].createElement(FilterSectionList, {
    taxons: orderByList,
    currentValue: currentFilters.order_by,
    onSelect: onSortSelect,
    isOpen: true,
    listItemClass: classes.listItem
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.divider
  }), createGroupedTaxons(taxons, standardTaxonSections, excludedSections).map(function (_ref5) {
    var label = _ref5.label,
        kind = _ref5.kind,
        collection = _ref5.collection,
        taxons = _ref5.taxons;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: kind
    }, /*#__PURE__*/React__default['default'].createElement(ListItem__default['default'], {
      className: clsx__default['default'](classes.listItem, classes.listItemSectionTitle),
      onClick: function onClick() {
        return handleDropdown(kind, label);
      }
    }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
      className: classes.listItemSectionCaption,
      variant: "caption",
      component: "span"
    }, label), /*#__PURE__*/React__default['default'].createElement("div", {
      className: classes.clearExpanderWrapper
    }, (selectedTaxon === null || selectedTaxon === void 0 ? void 0 : selectedTaxon.section) === kind && /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
      variant: "text",
      onClick: function onClick(e) {
        onClearFilter(); // Prevent dropdown toggle

        e.stopPropagation();
      },
      className: classes.clearButton
    }, "Clear"), activeFilterSection === kind ? /*#__PURE__*/React__default['default'].createElement(ExpandLess__default['default'], {
      role: "button",
      className: classes.expandIcon
    }) : /*#__PURE__*/React__default['default'].createElement(ExpandMore__default['default'], {
      role: "button",
      className: classes.expandIcon
    })), showCollapsedLabel && activeFilterSection !== kind && (selectedTaxon === null || selectedTaxon === void 0 ? void 0 : selectedTaxon.section) === kind && /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
      className: classes.activeTaxonLabel,
      variant: "caption",
      component: "span"
    }, selectedTaxon.label)), /*#__PURE__*/React__default['default'].createElement(FilterSectionList, {
      taxons: taxons,
      currentValue: collection === TaxonCollection.categories ? currentFilters.categories : currentFilters.tags,
      onSelect: collection === TaxonCollection.categories ? onUpdateCategory : onUpdateTag,
      isOpen: activeFilterSection === kind,
      listItemClass: classes.listItem,
      section: kind,
      onTransitionStart: onSectionTransitionStart,
      onTransitionEnd: onSectionTransitionEnd
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: classes.divider
    }));
  }), createGroupedTaxons(taxons, promotionTaxonSections, excludedSections).map(function (_ref6) {
    var kind = _ref6.kind,
        collection = _ref6.collection,
        taxons = _ref6.taxons;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: kind
    }, /*#__PURE__*/React__default['default'].createElement(Collapse__default['default'], {
      in: taxons.length !== 0,
      timeout: 200,
      onEntering: onSectionTransitionStart,
      onExiting: onSectionTransitionStart,
      onEntered: onSectionTransitionEnd,
      onExited: onSectionTransitionEnd
    }, /*#__PURE__*/React__default['default'].createElement(FilterSectionList, {
      taxons: taxons,
      currentValue: collection === TaxonCollection.categories ? currentFilters.categories : currentFilters.tags,
      onSelect: collection === TaxonCollection.categories ? onUpdateCategory : onUpdateTag,
      isOpen: true,
      listItemClass: classes.listItem,
      section: kind,
      onTransitionStart: onSectionTransitionStart,
      onTransitionEnd: onSectionTransitionEnd
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: classes.divider
    })));
  }), legacyPageRoute && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(ListItem__default['default'], {
    selected: true,
    disabled: true,
    className: classes.listItem
  }, "Drag & Drop"), /*#__PURE__*/React__default['default'].createElement(Link__default['default'], {
    id: "view-legacy-templates",
    href: legacyPageRoute,
    underline: "none"
  }, /*#__PURE__*/React__default['default'].createElement(ListItem__default['default'], {
    className: classes.listItem
  }, "Legacy")))));
};
process.env.NODE_ENV !== "production" ? FilterSidebar.propTypes = {
  taxons: _pt__default['default'].array.isRequired,
  onUpdateCategory: _pt__default['default'].func.isRequired,
  onUpdateTag: _pt__default['default'].func.isRequired,
  onSortSelect: _pt__default['default'].func.isRequired,
  onClearFilter: _pt__default['default'].func.isRequired,
  legacyPageRoute: _pt__default['default'].string,
  onSectionTransitionStart: _pt__default['default'].func,
  onSectionTransitionEnd: _pt__default['default'].func,
  orderByList: _pt__default['default'].array,
  excludedSections: _pt__default['default'].array,
  listClass: _pt__default['default'].string,
  listItemWidth: _pt__default['default'].number
} : void 0;
FilterSidebar.defaultProps = {
  orderByList: [{
    value: SortFields.New,
    label: 'Newest'
  }, {
    value: SortFields.Conversion,
    label: 'Highest Converting'
  }, {
    value: SortFields.Popular,
    label: 'Most Popular'
  }],
  expandedSection: 'none',
  listItemWidth: 215
};

var useStyles$6 = styles.makeStyles({
  root: {
    textAlign: 'center',
    marginTop: 94,
    marginBottom: 114,
    width: '100%'
  }
}, {
  classNamePrefix: 'NoResults'
});

var NoResults = function NoResults(_ref) {
  var clearSearch = _ref.clearSearch,
      children = _ref.children;
  var classes = useStyles$6();
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.root
  }, children, /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    variant: "outlined",
    component: "button",
    onClick: clearSearch
  }, "Clear Search & Filters"));
};

process.env.NODE_ENV !== "production" ? NoResults.propTypes = {
  clearSearch: _pt__default['default'].func.isRequired
} : void 0;

var Device;

(function (Device) {
  Device["Mobile"] = "mobile";
  Device["Desktop"] = "desktop";
})(Device || (Device = {}));

var TEMPLATE_PREVIEW_HASH = '#template-preview';
var useStyles$7 = styles.makeStyles(function (_ref) {
  var breakpoints = _ref.breakpoints,
      palette = _ref.palette;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var borderColor = palette.greyTransparent[10];
  var transition = '0.8s all ease';
  return {
    loader: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -22,
      marginLeft: -22
    },
    deviceWrapper: _defineProperty({
      display: 'flex',
      position: 'relative',
      width: '100%',
      height: '100%',
      flexGrow: 1,
      flexShrink: 1,
      transition: transition
    }, breakpoints.up('sm'), {
      height: 768,
      maxWidth: 1298,
      margin: '0 auto',
      flexGrow: 0,
      flexShrink: 0
    }),
    desktopDeviceWrapper: _defineProperty({}, breakpoints.up('sm'), {
      borderRadius: 2,
      width: '90%'
    }),
    mobileDeviceWrapper: _defineProperty({}, breakpoints.up('sm'), {
      borderRadius: 0,
      width: 400
    }),
    device: {
      backgroundColor: palette.common.white,
      width: '100%',
      height: '100%',
      transition: transition
    },
    desktopDevice: _defineProperty({}, breakpoints.up('sm'), {
      borderRadius: 2,
      paddingLeft: 0,
      paddingRight: 0,
      boxShadow: '0 14px 28px 0 rgba(0, 0, 0, 0.15)'
    }),
    mobileDevice: _defineProperty({}, breakpoints.up('sm'), {
      borderRadius: 40,
      paddingLeft: 10,
      paddingRight: 10,
      boxShadow: '0 14px 28px 0 rgba(0, 0, 0, 0.15)'
    }),
    deviceControls: _defineProperty({
      display: 'none',
      position: 'relative',
      height: 30,
      transition: transition
    }, breakpoints.up('sm'), {
      display: 'block'
    }),
    deviceControl: function deviceControl(_ref2) {
      var showMobile = _ref2.showMobile;
      return {
        width: 10,
        height: 10,
        border: "1px solid ".concat(borderColor),
        borderRadius: 5,
        position: 'absolute',
        left: 10,
        top: 10,
        transition: transition,
        '&:nth-child(1)': {
          opacity: showMobile ? 0 : 1
        },
        '&:nth-child(2)': {
          left: showMobile ? 'calc(50% - 30px)' : 30,
          width: showMobile ? 60 : 10,
          top: showMobile ? 20 : 10
        },
        '&:nth-child(3)': {
          left: showMobile ? 'calc(50% + 40px)' : 50,
          top: showMobile ? 20 : 10
        }
      };
    },
    iframe: {
      width: '100%',
      height: '100%',
      transition: transition
    },
    mobileIframe: _defineProperty({}, breakpoints.up('sm'), {
      height: 684,
      borderColor: borderColor,
      borderWidth: 1,
      borderRadius: 2,
      marginTop: 18,
      borderStyle: 'inset'
    }),
    desktopIframe: _defineProperty({}, breakpoints.up('sm'), {
      height: 738,
      borderColor: borderColor,
      borderWidth: '1px 0 0 0',
      borderRadius: '0 0 2px 2px',
      marginTop: 0,
      borderStyle: 'inset'
    }),
    iframeInner: {
      width: '100%',
      height: '100%',
      transition: transition
    }
  };
}, {
  classNamePrefix: 'PreviewTemplate'
});

var PreviewTemplate = function PreviewTemplate(_ref3) {
  var previewUrl = _ref3.previewUrl,
      device = _ref3.device;
  var showMobile = device === Device.Mobile;
  var classes = useStyles$7({
    showMobile: showMobile
  });

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasLoaded = _useState2[0],
      setHasLoaded = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default'](classes.deviceWrapper, showMobile ? classes.mobileDeviceWrapper : classes.desktopDeviceWrapper)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default'](classes.device, showMobile ? classes.mobileDevice : classes.desktopDevice)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.deviceControls
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.deviceControl
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.deviceControl
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes.deviceControl
  })), !hasLoaded && /*#__PURE__*/React__default['default'].createElement(CircularProgress__default['default'], {
    className: classes.loader
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default'](classes.iframe, showMobile ? classes.mobileIframe : classes.desktopIframe)
  }, /*#__PURE__*/React__default['default'].createElement("iframe", {
    className: classes.iframeInner,
    style: {
      opacity: hasLoaded ? 1 : 0
    },
    title: "Preview",
    src: previewUrl + TEMPLATE_PREVIEW_HASH,
    width: "100%",
    scrolling: "auto",
    height: "100%",
    marginHeight: 0,
    frameBorder: "0",
    onLoad: function onLoad() {
      return setHasLoaded(true);
    }
  }))));
};

process.env.NODE_ENV !== "production" ? PreviewTemplate.propTypes = {
  previewUrl: _pt__default['default'].string.isRequired,
  device: _pt__default['default'].oneOf(["mobile", "desktop"]).isRequired
} : void 0;

var TRANSITION_DURATION = 350;
var useStyles$8 = styles.makeStyles(function (_ref) {
  var zIndex = _ref.zIndex,
      transitions = _ref.transitions,
      palette = _ref.palette,
      typography = _ref.typography;
  return {
    root: {
      padding: 5,
      zIndex: zIndex.drawer + 1,
      fontSize: 23
    },
    expandButton: {
      position: 'sticky',
      display: 'block',
      left: '0px',
      boxShadow: '0 10px 20px -5px rgba(9,12,18,0.1)',
      backgroundColor: palette.common.white,
      color: palette.primary.main,
      transition: transitions.create(['left', 'box-shadow'], {
        easing: 'cubic-bezier(0.4, 0, 0.2, .5)',
        duration: TRANSITION_DURATION
      }),
      '&:hover': {
        boxShadow: '0 10px 20px -5px rgba(9,12,18,0.25)',
        backgroundColor: palette.common.white
      }
    },
    collapseButton: {
      position: 'absolute',
      left: 198,
      backgroundColor: 'inherit',
      transition: transitions.create(['left', 'box-shadow'], {
        easing: 'cubic-bezier(0, 0, 0.2, 1)',
        duration: TRANSITION_DURATION
      }),
      '&:hover': {
        backgroundColor: palette.common.white,
        boxShadow: '0 10px 20px -5px rgba(9,12,18,0.1)',
        color: palette.primary.main
      }
    },
    toolTip: function toolTip(_ref2) {
      var showTooltip = _ref2.showTooltip;
      return {
        backgroundColor: palette.common.black,
        fontSize: 12,
        lineHeight: '18px',
        color: palette.common.white,
        fontFamily: typography.fontFamily,
        padding: '3px 7px',
        visibility: showTooltip ? 'visible' : 'hidden'
      };
    }
  };
}, {
  classNamePrefix: 'SidebarToggle'
});

var _ref4$1 = /*#__PURE__*/React__default['default'].createElement(ChevronLeft__default['default'], null);

var _ref5 = /*#__PURE__*/React__default['default'].createElement(ChevronRight__default['default'], null);

var SidebarToggle = function SidebarToggle(_ref3) {
  var isOpen = _ref3.isOpen,
      onToggleSidebar = _ref3.onToggleSidebar,
      buttonRef = _ref3.buttonRef,
      buttonClassName = _ref3.buttonClassName;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showTooltip = _useState2[0],
      setShowTooltip = _useState2[1];

  var classes = useStyles$8({
    showTooltip: showTooltip
  });
  var timeoutRef = React.useRef();
  React.useEffect(function () {
    setShowTooltip(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    } // Hides the tooltip during the transition open/closed


    timeoutRef.current = window.setTimeout(function () {
      setShowTooltip(true);
    }, TRANSITION_DURATION);
    return function () {
      clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);
  return /*#__PURE__*/React__default['default'].createElement(Tooltip__default['default'], {
    title: "".concat(isOpen ? 'Hide' : 'Show', " Filters"),
    classes: {
      tooltip: classes.toolTip
    }
  }, /*#__PURE__*/React__default['default'].createElement(IconButton__default['default'], {
    className: clsx__default['default'](classes.root, buttonClassName, isOpen ? classes.collapseButton : classes.expandButton),
    "data-qa-selector": "SidebarToggle",
    onClick: onToggleSidebar,
    ref: buttonRef
  }, isOpen ? _ref4$1 : _ref5));
};
process.env.NODE_ENV !== "production" ? SidebarToggle.propTypes = {
  isOpen: _pt__default['default'].bool.isRequired,
  onToggleSidebar: _pt__default['default'].func.isRequired,
  buttonClassName: _pt__default['default'].string
} : void 0;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var getBrowserScrollbarWidth = function getBrowserScrollbarWidth() {
  try {
    // Creating invisible container
    var outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear

    document.body.appendChild(outer); // Creating inner element and placing it in the container

    var inner = document.createElement('div');
    outer.appendChild(inner); // Calculating difference between container's full width and the child width

    var scrollbarWidth = outer.offsetWidth - inner.offsetWidth; // Removing temporary elements from the DOM

    if (outer.parentNode) {
      outer.parentNode.removeChild(outer);
    }

    return scrollbarWidth;
  } catch (_unused) {
    return 0;
  }
};
var isScrollbarVisible = function isScrollbarVisible(element) {
  return !!element && element.scrollHeight > element.clientHeight;
};

var sidebarWidth = 312;
var sidebarWidthDesktop = 250;
var zIndex = 1600;
var appBarHeight = 56;
var SCROLLBAR_WIDTH = getBrowserScrollbarWidth();
var duration = 350;
var excludedSections = [TaxonSection['Page Types'], TaxonSection.Collections];
var useStyles$9 = styles.makeStyles(function (_ref) {
  var breakpoints = _ref.breakpoints,
      palette = _ref.palette,
      transitions = _ref.transitions,
      spacing = _ref.spacing;
  return {
    header: function header(_ref2) {
      var _extends2;

      var drawerPosition = _ref2.drawerPosition;
      return _extends((_extends2 = {
        backgroundColor: palette.primary.contrastText,
        boxShadow: 'none',
        color: palette.grey[100],
        borderBottom: '1px solid #D6DCE8',
        width: '100%',
        zIndex: zIndex
      }, _defineProperty(_extends2, breakpoints.up(480), {
        width: sidebarWidth
      }), _defineProperty(_extends2, breakpoints.up(1025), {
        display: 'none'
      }), _extends2), drawerPosition === 'left' ? {
        left: 0
      } : {
        right: 0
      });
    },
    headerInner: {
      height: "".concat(appBarHeight - 1, "px"),
      paddingLeft: spacing(4),
      paddingRight: spacing(1.5)
    },
    headerTitle: {
      fontWeight: 'bold'
    },
    divider: {
      borderBottom: '1px solid #D6DCE8',
      margin: '12px 20px'
    },
    drawer: function drawer() {
      return {
        width: 0,
        flexShrink: 0
      };
    },
    drawerPaper: function drawerPaper(_ref3) {
      var _ref4;

      var hasScrollbar = _ref3.hasScrollbar;
      return _ref4 = {
        paddingRight: hasScrollbar ? -1 * SCROLLBAR_WIDTH : 0,
        width: '100%',
        top: "".concat(appBarHeight, "px")
      }, _defineProperty(_ref4, breakpoints.up(480), {
        width: sidebarWidth
      }), _defineProperty(_ref4, "zIndex", zIndex), _ref4;
    },
    drawerDesktop: function drawerDesktop(_ref5) {
      var open = _ref5.open,
          hasScrollbar = _ref5.hasScrollbar;
      return {
        position: 'sticky',
        marginRight: 16,
        width: sidebarWidthDesktop,
        flexShrink: 0,
        transition: transitions.create('opacity', {
          easing: transitions.easing.easeOut,
          duration: duration
        }),
        opacity: open ? 1 : 0,
        paddingRight: hasScrollbar ? -1 * SCROLLBAR_WIDTH : 0
      };
    },
    drawerPaperDesktop: {
      position: 'initial',
      width: sidebarWidthDesktop,
      backgroundColor: 'inherit',
      borderRight: 'none',
      overflow: 'hidden',
      '&:hover': {
        overflowY: 'auto'
      }
    },
    paperAnchorRight: {
      border: 'none'
    },
    list: function list(_ref6) {
      var hasScrollbar = _ref6.hasScrollbar;
      return _defineProperty({
        paddingTop: spacing(1.5),
        paddingRight: !hasScrollbar ? "".concat(SCROLLBAR_WIDTH, "px") : 0
      }, breakpoints.up(1025), {
        paddingTop: 0
      });
    }
  };
}, {
  classNamePrefix: 'ResponsiveSidebar'
});

var _ref9 = /*#__PURE__*/React__default['default'].createElement("style", {
  type: "text/css"
}, "\n          .no-scroll {\n            overflow: hidden;\n          }\n    ");

var ResponsiveSidebar = function ResponsiveSidebar(_ref8) {
  var state = _ref8.state,
      actions = _ref8.actions,
      kind = _ref8.kind,
      drawerClass = _ref8.drawerClass,
      drawerPaperClass = _ref8.drawerPaperClass,
      drawerPaperRef = _ref8.drawerPaperRef,
      sidebarButtonRef = _ref8.sidebarButtonRef,
      sidebarButtonClass = _ref8.sidebarButtonClass;
  // Check window.innerWidth over useMediaQuery here so that we have the result on the first render, before the hook has fired
  // Resize handlers below ensure that this check is run often enough
  var above1024Breakpoint = window.innerWidth > 1024;
  var drawerPosition = above1024Breakpoint ? 'left' : 'right';

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasScrollbar = _useState2[0],
      setHasScrollbar = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      listItemWidth = _useState4[0],
      setListItemWidth = _useState4[1];

  var classes = useStyles$9({
    hasScrollbar: hasScrollbar,
    open: state.ui.sidebarOpen,
    drawerPosition: drawerPosition
  });
  var frame = React.useRef(0);
  var prevScrollHeight = React.useRef(0);
  React.useEffect(function () {
    // Using a percentage based width for list items in the sidebar is inadequate because it causes a flickering
    // as we adjust the right padding of the parent to accomodate a scrollbar. Use a defined width for middle and lg breakpoints, and otherwise
    // rely on the window innerWidth adjusting for margins.
    var handleResize = function handleResize() {
      setHasScrollbar(isScrollbarVisible(drawerPaperRef.current));

      if (window.innerWidth < 480) {
        setListItemWidth(window.innerWidth - 40);
      } else if (window.innerWidth < 1025) {
        setListItemWidth(272);
      } else {
        setListItemWidth(215);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [drawerPaperRef]);

  var handleScrollHeightChange = function handleScrollHeightChange() {
    var currentScrollHeight = drawerPaperRef.current.scrollHeight;

    if (currentScrollHeight !== prevScrollHeight.current) {
      setHasScrollbar(isScrollbarVisible(drawerPaperRef.current));
      prevScrollHeight.current = currentScrollHeight;
    }

    frame.current = requestAnimationFrame(handleScrollHeightChange);
  };

  var onSectionTransitionStart = function onSectionTransitionStart() {
    cancelAnimationFrame(frame.current); // eslint-disable-next-line no-param-reassign

    frame.current = requestAnimationFrame(handleScrollHeightChange);
  };

  var onSectionTransitionEnd = function onSectionTransitionEnd() {
    cancelAnimationFrame(frame.current);
  };

  React.useEffect(function () {
    if (state.ui.sidebarOpen && !above1024Breakpoint) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return function () {
      document.body.classList.remove('no-scroll');
    };
  }, [state.ui.sidebarOpen, above1024Breakpoint]); // Copy of logic used for determining whether or not to show drawer transition.
  // We use this state is order to skip the appear transition during the
  // initial mount of the fixed header component.

  var slideMounted = React.useRef(false);
  React.useEffect(function () {
    slideMounted.current = true;
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, above1024Breakpoint && !state.ui.sidebarOpen && /*#__PURE__*/React__default['default'].createElement(SidebarToggle, {
    isOpen: false,
    onToggleSidebar: actions.onToggleSidebar,
    buttonRef: sidebarButtonRef,
    buttonClassName: sidebarButtonClass
  }), /*#__PURE__*/React__default['default'].createElement(Slide__default['default'], {
    in: state.ui.sidebarOpen,
    direction: drawerPosition === 'left' ? 'right' : 'left',
    timeout: duration,
    appear: slideMounted.current
  }, /*#__PURE__*/React__default['default'].createElement(AppBar__default['default'], {
    position: "fixed",
    className: classes.header
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      paddingRight: "".concat(SCROLLBAR_WIDTH, "px")
    }
  }, /*#__PURE__*/React__default['default'].createElement(Grid__default['default'], {
    container: true,
    alignItems: "center",
    justify: "space-between",
    className: classes.headerInner
  }, /*#__PURE__*/React__default['default'].createElement(Typography__default['default'], {
    className: classes.headerTitle
  }, "Filters"), /*#__PURE__*/React__default['default'].createElement(Button__default['default'], {
    size: "small",
    onClick: actions.onToggleSidebar
  }, "Done"))))), /*#__PURE__*/React__default['default'].createElement(Drawer__default['default'], {
    className: clsx__default['default'](above1024Breakpoint ? classes.drawerDesktop : classes.drawer, drawerClass),
    classes: {
      paper: clsx__default['default'](above1024Breakpoint ? classes.drawerPaperDesktop : classes.drawerPaper, drawerPaperClass),
      paperAnchorDockedRight: classes.paperAnchorRight
    },
    variant: "persistent",
    anchor: drawerPosition,
    transitionDuration: duration,
    open: state.ui.sidebarOpen,
    PaperProps: {
      ref: drawerPaperRef
    }
  }, above1024Breakpoint && state.ui.sidebarOpen && /*#__PURE__*/React__default['default'].createElement(SidebarToggle, {
    onToggleSidebar: actions.onToggleSidebar,
    isOpen: true
  }), /*#__PURE__*/React__default['default'].createElement(FilterSidebar, {
    taxons: state.taxons,
    currentFilters: state.filters,
    onUpdateCategory: function onUpdateCategory(option) {
      return actions.onUpdateCategory(option);
    },
    onUpdateTag: function onUpdateTag(option) {
      return actions.onUpdateTag(option);
    },
    onSortSelect: function onSortSelect(option) {
      return actions.onUpdateOrderBy(option);
    },
    onClearFilter: actions.onClearFilters,
    excludedSections: kind === TemplateKind.Site ? excludedSections : undefined,
    selectedTaxon: state.ui.selectedTaxon,
    onSectionTransitionStart: onSectionTransitionStart,
    onSectionTransitionEnd: onSectionTransitionEnd,
    listClass: classes.list,
    listItemWidth: listItemWidth,
    expandedSection: kind === TemplateKind.Site ? TaxonSection.Industries : TaxonSection['Page Types']
  })), _ref9);
};

process.env.NODE_ENV !== "production" ? ResponsiveSidebar.propTypes = {
  drawerClass: _pt__default['default'].string,
  drawerPaperClass: _pt__default['default'].string,
  sidebarButtonClass: _pt__default['default'].string
} : void 0;

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/* eslint-disable import/prefer-default-export */

function serializeFilters(filters) {
  var arr = [];
  return Object.keys(filters).reduce(function (acc, filterProp) {
    var filter = filters[filterProp];

    if (filter === null || filter === void 0 ? void 0 : filter.value) {
      var value = filter.value,
          operator = filter.operator;
      var prop = "".concat(filterProp).concat(operator); // intersect queries must retain commas for value separation

      acc.push("".concat(prop, "=").concat(encodeURIComponent(value).replace(/%2C/g, ',')));
    }

    return acc;
  }, arr).join('&');
} // Do not expose the client to the full range of filter options and operators.

var ALLOWED_FILTER_PROPS = [FilterProps.order_by, FilterProps.categories, FilterProps.tags];

var allowClientParm = function allowClientParm(prop) {
  return ALLOWED_FILTER_PROPS.indexOf(prop) > -1;
};

function serializeClientFilters(filters) {
  var urlSearchParams = new URLSearchParams();
  Object.keys(filters).forEach(function (prop) {
    var filter = filters[prop];

    if ((filter === null || filter === void 0 ? void 0 : filter.value) && allowClientParm(prop)) {
      urlSearchParams.set(prop, filter === null || filter === void 0 ? void 0 : filter.value.toString());
    }
  });
  return urlSearchParams.toString();
}
function parseClientFilters(str) {
  var query = {};
  var params = new URLSearchParams(str);
  params.forEach(function (value, prop) {
    if (allowClientParm(prop)) {
      query[prop] = {
        operator: prop === FilterProps.order_by ? FilterOperators.empty : FilterOperators.contains,
        value: value
      };
    }
  });
  return query;
}

var TEMPLATE_PATH = 'templates';
var LEADPAGES_PATH = 'leadpages';
var SITES_PATH = 'sites';
var TAXONOMY_PATH = 'taxonomy';
var REQUEST_HEADERS = {
  'Content-Type': 'application/json'
};
var LIMIT = 24;
var MandrelApi = /*#__PURE__*/function () {
  function MandrelApi(_ref) {
    var _ref2, _extends2;

    var kind = _ref.kind,
        baseUrl = _ref.baseUrl,
        baseFilters = _ref.baseFilters,
        authRequest = _ref.authRequest,
        onUpdateQueryString = _ref.onUpdateQueryString;

    _classCallCheck(this, MandrelApi);

    this.baseUrl = void 0;
    this.baseFilters = void 0;
    this.taxonQuery = void 0;
    this.chevron = void 0;
    this.onUpdateQueryString = void 0;
    this.authRequest = void 0;
    this.baseUrl = baseUrl || 'https://api.leadpages.io/template/v2/';
    this.baseFilters = baseFilters || (_ref2 = {}, _defineProperty(_ref2, FilterProps.categories, {
      operator: FilterOperators['!contains'],
      value: 'incentive'
    }), _defineProperty(_ref2, FilterProps.limit, {
      operator: FilterOperators.empty,
      value: LIMIT
    }), _ref2);
    var taxonFilters = this.baseFilters ? _extends({}, this.baseFilters, (_extends2 = {}, _defineProperty(_extends2, FilterProps.kind, {
      operator: FilterOperators.contains,
      value: kind
    }), _defineProperty(_extends2, FilterProps.limit, {}), _defineProperty(_extends2, FilterProps.order_by, {}), _extends2)) : {};
    this.taxonQuery = this.getQueryString(taxonFilters);
    this.chevron = authRequest ? Chevron__default['default'].getInstance() : undefined;
    this.authRequest = authRequest || false;
    this.onUpdateQueryString = onUpdateQueryString;
  }

  _createClass(MandrelApi, [{
    key: "request",
    value: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(url) {
        var _response$_status, _response, response, json;

        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.authRequest) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return this.chevron.http({
                  url: url,
                  method: 'GET',
                  headers: REQUEST_HEADERS
                });

              case 3:
                _response = _context.sent;

                if (!((_response === null || _response === void 0 ? void 0 : (_response$_status = _response._status) === null || _response$_status === void 0 ? void 0 : _response$_status.code) !== 200)) {
                  _context.next = 6;
                  break;
                }

                throw new Error();

              case 6:
                return _context.abrupt("return", _response);

              case 7:
                _context.next = 9;
                return fetch(url, {
                  headers: REQUEST_HEADERS
                });

              case 9:
                response = _context.sent;

                if (!(response.status !== 200)) {
                  _context.next = 12;
                  break;
                }

                throw new Error();

              case 12:
                _context.next = 14;
                return response.json();

              case 14:
                json = _context.sent;
                return _context.abrupt("return", json);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "updateClientUrl",
    value: function updateClientUrl(filters) {
      if (this.onUpdateQueryString) {
        try {
          this.onUpdateQueryString(serializeClientFilters(filters));
        } catch (e) {// swallow
        }
      }
    }
  }, {
    key: "appendToQuery",
    value: function appendToQuery(query, templateFilters, prop) {
      var _this$baseFilters$pro, _templateFilters$prop, _this$baseFilters$pro2, _templateFilters$prop2;

      var string = query; // If a tag or category is explicitly excluded via base filter, extend our query to include the filter unless explicitly searching for that tag/categoryq

      if (templateFilters[prop] && this.baseFilters[prop] && ((_this$baseFilters$pro = this.baseFilters[prop]) === null || _this$baseFilters$pro === void 0 ? void 0 : _this$baseFilters$pro.operator) !== ((_templateFilters$prop = templateFilters[prop]) === null || _templateFilters$prop === void 0 ? void 0 : _templateFilters$prop.operator) && ((_this$baseFilters$pro2 = this.baseFilters[prop]) === null || _this$baseFilters$pro2 === void 0 ? void 0 : _this$baseFilters$pro2.value) !== ((_templateFilters$prop2 = templateFilters[prop]) === null || _templateFilters$prop2 === void 0 ? void 0 : _templateFilters$prop2.value)) {
        string = "".concat(string, "&").concat(serializeFilters(_defineProperty({}, prop, this.baseFilters[prop])));
      }

      return string;
    }
  }, {
    key: "getQueryString",
    value: function getQueryString(templateFilters) {
      var _this$baseFilters$cat;

      var categoryFilters = {}; // Exclude blank category unless a search result is occurring
      // and the blank category has not been explicity excluded.

      if (!Object.keys(templateFilters).includes(FilterProps.name) && !((_this$baseFilters$cat = this.baseFilters.categories) === null || _this$baseFilters$cat === void 0 ? void 0 : _this$baseFilters$cat.value.split(',').includes('blank'))) {
        var _this$baseFilters$cat2;

        categoryFilters = _defineProperty({}, FilterProps.categories, {
          operator: FilterOperators['!intersects'],
          value: "".concat((_this$baseFilters$cat2 = this.baseFilters.categories) === null || _this$baseFilters$cat2 === void 0 ? void 0 : _this$baseFilters$cat2.value, ",blank")
        });
      }

      var combined = _extends({}, this.baseFilters, categoryFilters, templateFilters);

      var serialized = serializeFilters(combined);
      serialized = this.appendToQuery(serialized, templateFilters, FilterProps.categories);
      serialized = this.appendToQuery(serialized, templateFilters, FilterProps.tags);
      return serialized;
    }
  }, {
    key: "getLeadpageTemplates",
    value: function getLeadpageTemplates(templateFilters) {
      this.updateClientUrl(templateFilters || {});
      var url = "".concat(this.baseUrl).concat(LEADPAGES_PATH, "?").concat(this.getQueryString(templateFilters || {}));
      return this.request(url);
    }
  }, {
    key: "getSiteTemplates",
    value: function getSiteTemplates(templateFilters) {
      this.updateClientUrl(templateFilters || {});
      var url = "".concat(this.baseUrl).concat(SITES_PATH, "?").concat(this.getQueryString(templateFilters || {}));
      return this.request(url);
    }
  }, {
    key: "getTemplateById",
    value: function getTemplateById(id) {
      var url = "".concat(this.baseUrl).concat(TEMPLATE_PATH, "/").concat(id);
      return this.request(url);
    }
  }, {
    key: "getTaxons",
    value: function getTaxons() {
      var url = "".concat(this.baseUrl).concat(TAXONOMY_PATH, "?").concat(this.taxonQuery);
      return this.request(url);
    }
  }]);

  return MandrelApi;
}();
MandrelApi.getInstance = void 0;
var instance = null;

function getInstance(props) {
  if (!instance) {
    instance = new MandrelApi(props);
  }

  return instance;
}

MandrelApi.getInstance = getInstance;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

// This is a pseudo-unique uuid generator. you can safely assume that you will not
//  get duplicates within the context of a single browser session, but this *should not*
//  be used to generate anything that is going to be persisted.
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function uniqueID() {
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }

  return "".concat(chr4(), " + ").concat(chr4(), " + '-' + ").concat(chr4(), " + '-' + ").concat(chr4(), " + '-' + ").concat(chr4(), " + '-' + ").concat(chr4(), " + ").concat(chr4(), " + ").concat(chr4());
}

var makePlaceholderTemplates = function makePlaceholderTemplates(kind, numLoading) {
  return _toConsumableArray(Array(numLoading)).map(function (_, index) {
    return {
      template: {
        tags: []
      },
      _meta: {
        id: "placholder-".concat(index)
      },
      kind: kind,
      ui: {
        guid: uniqueID(),
        isPlaceholder: true
      }
    };
  });
};
var makeUiTemplate = function makeUiTemplate(template) {
  return _extends({}, template, {
    ui: {
      guid: uniqueID(),
      isPlaceholder: false
    }
  });
};
var replacePlaceholderTemplates = function replacePlaceholderTemplates(templates, nextPageTemplates) {
  if (nextPageTemplates.length > templates.length) {
    return nextPageTemplates.map(makeUiTemplate);
  }

  var idx = 0;
  return templates.map(function (template) {
    if (template.ui.isPlaceholder) {
      var realTemplate = nextPageTemplates[idx];
      idx += 1;
      return {
        template: realTemplate.template,
        _meta: realTemplate._meta,
        kind: realTemplate.kind,
        ui: _extends({}, template.ui, {
          isPlaceholder: false
        })
      };
    }

    return template;
  });
};

var _filters;
var TemplaceActionTypes;

(function (TemplaceActionTypes) {
  TemplaceActionTypes["LOAD_INITIAL_STATE"] = "LOAD_INITIAL_STATE";
  TemplaceActionTypes["LOAD_TEMPLATES"] = "LOAD_TEMPLATES";
  TemplaceActionTypes["UPDATE_SEARCH_INPUT"] = "UPDATE_SEARCH_INPUT";
  TemplaceActionTypes["UPDATE_CATEGORY"] = "UPDATE_CATEGORY";
  TemplaceActionTypes["UPDATE_TAG"] = "UPDATE_TAG";
  TemplaceActionTypes["UPDATE_SORT"] = "UPDATE_SORT";
  TemplaceActionTypes["SET_UI_LOADING"] = "SET_UI_LOADING";
  TemplaceActionTypes["RESET_SEARCH"] = "RESET_SEARCH";
  TemplaceActionTypes["CLEAR_FILTERS"] = "CLEAR_FILTERS";
  TemplaceActionTypes["TOGGLE_SIDEBAR"] = "TOGGLE_SIDEBAR";
  TemplaceActionTypes["LOAD_NEXT_PAGE"] = "LOAD_NEXT_PAGE";
})(TemplaceActionTypes || (TemplaceActionTypes = {}));

function reducer(state, action) {
  var _extends2, _extends3, _extends5;

  switch (action.type) {
    case TemplaceActionTypes.LOAD_INITIAL_STATE:
      return _extends({}, state, {
        taxons: action.payload.taxons,
        templates: action.payload.templates,
        ui: _extends({}, state.ui, {
          hasLoaded: true,
          total: action.payload.meta.total,
          count: action.payload.meta.count,
          cursor: action.payload.meta.cursor,
          isLoading: false,
          selectedTaxon: action.payload.selectedTaxon
        })
      });

    case TemplaceActionTypes.LOAD_TEMPLATES:
      return _extends({}, state, {
        templates: action.payload.templates,
        ui: _extends({}, state.ui, {
          total: action.payload.meta.total,
          count: action.payload.meta.count,
          cursor: action.payload.meta.cursor,
          isLoading: false
        })
      });

    case TemplaceActionTypes.LOAD_NEXT_PAGE:
      return _extends({}, state, {
        templates: action.payload.templates,
        ui: _extends({}, state.ui, {
          isLoading: true
        })
      });

    case TemplaceActionTypes.UPDATE_CATEGORY:
      return _extends({}, state, {
        filters: _extends({}, state.filters, (_extends2 = {}, _defineProperty(_extends2, FilterProps.categories, action.payload.value), _defineProperty(_extends2, FilterProps.tags, ''), _extends2)),
        ui: _extends({}, state.ui, {
          isLoading: true,
          selectedTaxon: action.payload
        })
      });

    case TemplaceActionTypes.UPDATE_TAG:
      return _extends({}, state, {
        filters: _extends({}, state.filters, (_extends3 = {}, _defineProperty(_extends3, FilterProps.categories, ''), _defineProperty(_extends3, FilterProps.tags, action.payload.value), _extends3)),
        ui: _extends({}, state.ui, {
          isLoading: true,
          selectedTaxon: action.payload
        })
      });

    case TemplaceActionTypes.UPDATE_SORT:
      return _extends({}, state, {
        filters: _extends({}, state.filters, _defineProperty({}, FilterProps.order_by, action.payload.value)),
        ui: _extends({}, state.ui, {
          isLoading: true
        })
      });

    case TemplaceActionTypes.SET_UI_LOADING:
      return _extends({}, state, {
        ui: _extends({}, state.ui, {
          isLoading: true
        })
      });

    case TemplaceActionTypes.CLEAR_FILTERS:
      return _extends({}, state, {
        filters: _extends({}, state.filters, (_extends5 = {}, _defineProperty(_extends5, FilterProps.categories, ''), _defineProperty(_extends5, FilterProps.tags, ''), _extends5)),
        ui: _extends({}, state.ui, {
          isLoading: true,
          selectedTaxon: null
        })
      });

    case TemplaceActionTypes.RESET_SEARCH:
      return _extends({}, state, {
        filters: action.payload.filters,
        ui: _extends({}, state.ui, {
          isLoading: true,
          selectedTaxon: null
        })
      });

    case TemplaceActionTypes.TOGGLE_SIDEBAR:
      return _extends({}, state, {
        ui: _extends({}, state.ui, {
          sidebarOpen: !state.ui.sidebarOpen
        })
      });

    default:
      return state;
  }
}

var initialState = Object.freeze({
  templates: [],
  taxons: [],
  kind: TemplateKind.Leadpage,
  searchInputRef: {
    current: null
  },
  getScrollTopRef: {
    current: null
  },
  filters: (_filters = {}, _defineProperty(_filters, FilterProps.categories, ''), _defineProperty(_filters, FilterProps.tags, ''), _defineProperty(_filters, FilterProps.order_by, SortFields.New), _filters),
  ui: {
    hasLoaded: false,
    isLoading: false,
    cursor: '',
    total: 0,
    count: 0,
    selectedTaxon: null,
    sidebarOpen: true
  }
});

var getQueryValue = function getQueryValue(prop, queryFilters) {
  var _queryFilters$prop;

  return queryFilters === null || queryFilters === void 0 ? void 0 : (_queryFilters$prop = queryFilters[prop]) === null || _queryFilters$prop === void 0 ? void 0 : _queryFilters$prop.value;
};

var makeUiFilters = function makeUiFilters(orderBy, queryFilters) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, FilterProps.categories, getQueryValue(FilterProps.categories, queryFilters) || ''), _defineProperty(_ref, FilterProps.tags, getQueryValue(FilterProps.tags, queryFilters) || ''), _defineProperty(_ref, FilterProps.order_by, getQueryValue(FilterProps.order_by, queryFilters) || orderBy), _ref;
};

function useTemplateState(_ref2) {
  var _baseFilters$order_by;

  var kind = _ref2.kind,
      baseUrl = _ref2.baseUrl,
      baseFilters = _ref2.baseFilters,
      tracker = _ref2.tracker,
      onUpdateQueryString = _ref2.onUpdateQueryString,
      queryString = _ref2.queryString,
      authRequest = _ref2.authRequest,
      hideSidebar = _ref2.hideSidebar;
  var orderBy = (baseFilters === null || baseFilters === void 0 ? void 0 : (_baseFilters$order_by = baseFilters.order_by) === null || _baseFilters$order_by === void 0 ? void 0 : _baseFilters$order_by.value) || initialState.filters[FilterProps.order_by];

  var _useReducer = React.useReducer(reducer, _extends({}, initialState, {
    filters: makeUiFilters(orderBy, queryString ? parseClientFilters(queryString) : undefined),
    searchInputRef: React.useRef(null),
    getScrollTopRef: React.useRef(null),
    templates: queryString ? [] : makePlaceholderTemplates(kind, 24),
    ui: _extends({}, initialState.ui, {
      sidebarOpen: !hideSidebar
    })
  })),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var mandrelApi = React.useMemo(function () {
    return new MandrelApi({
      kind: kind,
      baseUrl: baseUrl,
      baseFilters: baseFilters,
      onUpdateQueryString: onUpdateQueryString,
      authRequest: authRequest
    });
  }, [kind, baseUrl, baseFilters, onUpdateQueryString, authRequest]);
  var searchFn = kind === TemplateKind.Leadpage ? mandrelApi.getLeadpageTemplates.bind(mandrelApi) : mandrelApi.getSiteTemplates.bind(mandrelApi);
  var searchTimeout = React.useRef();

  var getSearchFilters = function getSearchFilters(uiFilters, cursor) {
    var _state$searchInputRef;

    var searchVal = ((_state$searchInputRef = state.searchInputRef.current) === null || _state$searchInputRef === void 0 ? void 0 : _state$searchInputRef.value) || '';
    var filters = {};

    if (searchVal) {
      filters[FilterProps.name] = {
        operator: FilterOperators.icontains,
        value: searchVal.toLowerCase() // Todo, determine other filters to add when typing in search input

      };
    }

    var category = uiFilters[FilterProps.categories];
    var tags = uiFilters[FilterProps.tags];
    var orderBy = uiFilters[FilterProps.order_by];

    if (category) {
      filters[FilterProps.categories] = {
        operator: FilterOperators.contains,
        value: category
      };
    }

    if (tags) {
      filters[FilterProps.tags] = {
        operator: FilterOperators.contains,
        value: tags
      };
    }

    if (orderBy) {
      filters[FilterProps.order_by] = {
        operator: FilterOperators.empty,
        value: orderBy
      };
    }

    if (cursor) {
      filters[FilterProps.cursor] = {
        operator: FilterOperators.empty,
        value: cursor
      };
    }

    return filters;
  };

  var scrollAndSetTemplates = function scrollAndSetTemplates(cb) {
    if (state.getScrollTopRef.current) {
      var galleryTop = state.getScrollTopRef.current();
      var scrollEl = document.getElementById('templates-scrolling-element');
      var scrollTop = (scrollEl === null || scrollEl === void 0 ? void 0 : scrollEl.scrollTop) || window.pageYOffset;
      var top = scrollTop + galleryTop;

      if (galleryTop >= scrollTop) {
        cb();
      } else {
        (scrollEl || window).scrollTo({
          top: top,
          behavior: 'smooth'
        });
        var tries = 0;
        var checkScroll = setInterval(function () {
          scrollTop = (scrollEl === null || scrollEl === void 0 ? void 0 : scrollEl.scrollTop) || window.pageYOffset; // Check to see that we're finished scrolling before setting new template state
          // Use threshold so that we load the new templates just prior to them entering in view

          if (scrollTop <= top + window.innerHeight || tries === 20) {
            cb();
            clearInterval(checkScroll);
          }

          tries += 1;
        }, 50);
      }
    } else {
      cb();
    }
  };

  var setUiLoading = function setUiLoading() {
    dispatch({
      type: TemplaceActionTypes.SET_UI_LOADING,
      payload: undefined
    });
  }; // Maintain the same ui guids for existing templates that would change position after a query for better rendering


  var loadNewTemplates = function loadNewTemplates(oldTemplates, newTemplates) {
    return newTemplates.map(function (t) {
      return oldTemplates.find(function (old) {
        return old._meta.id === t._meta.id;
      }) || makeUiTemplate(t);
    });
  };

  var init = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
      var taxonsResponse, templatesResponse, selectedTaxonValue, selectedTaxon, uiTemplates;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return mandrelApi.getTaxons();

            case 3:
              taxonsResponse = _context.sent;
              _context.next = 6;
              return searchFn(getSearchFilters(state.filters));

            case 6:
              templatesResponse = _context.sent;
              selectedTaxonValue = state.filters.tags || state.filters.categories;
              selectedTaxon = taxonsResponse.taxons.find(function (t) {
                return t.value === selectedTaxonValue;
              }) || null; // Do not show placeholder templates if there is a query string

              uiTemplates = state.templates.length > 0 ? replacePlaceholderTemplates(state.templates, templatesResponse._items) : loadNewTemplates(state.templates, templatesResponse._items);
              dispatch({
                type: TemplaceActionTypes.LOAD_INITIAL_STATE,
                payload: {
                  taxons: taxonsResponse.taxons,
                  templates: uiTemplates,
                  meta: templatesResponse._meta,
                  selectedTaxon: selectedTaxon
                }
              });
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              throw new Error('Error fetching templates');

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function init() {
      return _ref3.apply(this, arguments);
    };
  }();

  var doTemplateSearch = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(opts, templates, cursor) {
      var filters, templatesResponse, isPaginating, uiTemplates, loadResponse;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              filters = getSearchFilters(opts, cursor);
              _context2.prev = 1;
              _context2.next = 4;
              return searchFn(filters);

            case 4:
              templatesResponse = _context2.sent;
              isPaginating = !!cursor;
              uiTemplates = isPaginating ? replacePlaceholderTemplates(templates, templatesResponse._items) : loadNewTemplates(templates, templatesResponse._items);

              loadResponse = function loadResponse() {
                dispatch({
                  type: TemplaceActionTypes.LOAD_TEMPLATES,
                  payload: {
                    templates: uiTemplates,
                    meta: templatesResponse._meta
                  }
                });
              };

              if (isPaginating) {
                loadResponse();
              } else {
                scrollAndSetTemplates(loadResponse);
              }

              _context2.next = 13;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 11]]);
    }));

    return function doTemplateSearch(_x, _x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var querySearch = function querySearch(filters) {
    setUiLoading();
    doTemplateSearch(filters, state.templates);
  };

  var onUpdateSearchInput = function onUpdateSearchInput() {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = window.setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
      var _state$searchInputRef2;

      var value, _state$searchInputRef3;

      return regenerator.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              value = ((_state$searchInputRef2 = state.searchInputRef.current) === null || _state$searchInputRef2 === void 0 ? void 0 : _state$searchInputRef2.value) || '';

              if (value && (tracker === null || tracker === void 0 ? void 0 : tracker.onUpdateSearch)) {
                tracker.onUpdateSearch({
                  value: (_state$searchInputRef3 = state.searchInputRef.current) === null || _state$searchInputRef3 === void 0 ? void 0 : _state$searchInputRef3.value
                });
              }

              querySearch(state.filters);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })), 200);
  };

  var onUpdateCategory = function onUpdateCategory(taxon) {
    var _extends6;

    if (state.searchInputRef.current) state.searchInputRef.current.value = '';

    if (tracker === null || tracker === void 0 ? void 0 : tracker.onUpdateFilter) {
      tracker.onUpdateFilter({
        value: taxon.label,
        kind: taxon.section
      });
    }

    dispatch({
      type: TemplaceActionTypes.UPDATE_CATEGORY,
      payload: taxon
    });
    doTemplateSearch(_extends({}, state.filters, (_extends6 = {}, _defineProperty(_extends6, FilterProps.categories, taxon.value), _defineProperty(_extends6, FilterProps.tags, ''), _extends6)), state.templates);
  };

  var onUpdateTag = function onUpdateTag(taxon) {
    var _extends7;

    if (state.searchInputRef.current) state.searchInputRef.current.value = '';

    if (tracker === null || tracker === void 0 ? void 0 : tracker.onUpdateFilter) {
      tracker.onUpdateFilter({
        value: taxon.label,
        kind: taxon.section
      });
    }

    dispatch({
      type: TemplaceActionTypes.UPDATE_TAG,
      payload: taxon
    });
    doTemplateSearch(_extends({}, state.filters, (_extends7 = {}, _defineProperty(_extends7, FilterProps.categories, ''), _defineProperty(_extends7, FilterProps.tags, taxon.value), _extends7)), state.templates);
  };

  var onUpdateOrderBy = function onUpdateOrderBy(sort) {
    var value = sort.value,
        label = sort.label;

    if (tracker === null || tracker === void 0 ? void 0 : tracker.onUpdateOrderBy) {
      tracker.onUpdateOrderBy({
        value: label
      });
    }

    dispatch({
      type: TemplaceActionTypes.UPDATE_SORT,
      payload: {
        value: value
      }
    });
    doTemplateSearch(_extends({}, state.filters, _defineProperty({}, FilterProps.order_by, value)), state.templates);
  };

  var onLoadNextPage = function onLoadNextPage() {
    var numLoading = Math.min(24, state.ui.total - parseInt(state.ui.cursor, 10));
    var newTemplates = state.templates.concat(makePlaceholderTemplates(kind, numLoading));
    dispatch({
      type: TemplaceActionTypes.LOAD_NEXT_PAGE,
      payload: {
        templates: newTemplates
      }
    });
    doTemplateSearch(state.filters, newTemplates, state.ui.cursor);
  };

  var onResetSearch = function onResetSearch() {
    var _filters2, _doTemplateSearch;

    dispatch({
      type: TemplaceActionTypes.RESET_SEARCH,
      payload: {
        filters: (_filters2 = {}, _defineProperty(_filters2, FilterProps.categories, ''), _defineProperty(_filters2, FilterProps.tags, ''), _defineProperty(_filters2, FilterProps.order_by, state.filters.order_by), _filters2)
      }
    });
    if (state.searchInputRef.current) state.searchInputRef.current.value = '';
    doTemplateSearch((_doTemplateSearch = {}, _defineProperty(_doTemplateSearch, FilterProps.categories, ''), _defineProperty(_doTemplateSearch, FilterProps.tags, ''), _defineProperty(_doTemplateSearch, FilterProps.order_by, orderBy), _doTemplateSearch), state.templates);
  };

  var onClearSearchInput = function onClearSearchInput() {
    if (state.searchInputRef.current) {
      state.searchInputRef.current.value = '';
    }

    querySearch(state.filters);
  };

  var onClearFilters = function onClearFilters() {
    var _extends9;

    dispatch({
      type: TemplaceActionTypes.CLEAR_FILTERS,
      payload: undefined
    });
    doTemplateSearch(_extends({}, state.filters, (_extends9 = {}, _defineProperty(_extends9, FilterProps.tags, ''), _defineProperty(_extends9, FilterProps.categories, ''), _extends9)), state.templates);
  };

  var onToggleSidebar = function onToggleSidebar() {
    if (tracker === null || tracker === void 0 ? void 0 : tracker.onToggleSidebar) {
      tracker.onToggleSidebar({
        isOpen: !state.ui.sidebarOpen
      });
    }

    dispatch({
      type: TemplaceActionTypes.TOGGLE_SIDEBAR,
      payload: undefined
    });
  };

  return [state, {
    init: init,
    onUpdateSearchInput: onUpdateSearchInput,
    onUpdateCategory: onUpdateCategory,
    onUpdateTag: onUpdateTag,
    onUpdateOrderBy: onUpdateOrderBy,
    onLoadNextPage: onLoadNextPage,
    onResetSearch: onResetSearch,
    onClearSearchInput: onClearSearchInput,
    onClearFilters: onClearFilters,
    onToggleSidebar: onToggleSidebar
  }];
}

function useWindowSize() {
  var validWindow = typeof window === 'object';
  var getSize = React.useCallback(function () {
    var size = {
      width: validWindow ? window.innerWidth : undefined,
      height: validWindow ? window.innerHeight : undefined
    };
    return size;
  }, [validWindow]);

  var _useState = React.useState(getSize()),
      size = _useState[0],
      setSize = _useState[1];

  React.useEffect(function () {
    function handleResize() {
      setSize(getSize());
    }

    if (validWindow) {
      window.addEventListener('resize', handleResize);
      return function () {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [getSize, validWindow]);
  return size;
}

function useInterval(callback, delay) {
  var savedCallback = React.useRef(null);
  React.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(function () {
    function tick() {
      var _savedCallback$curren;

      (_savedCallback$curren = savedCallback.current) === null || _savedCallback$curren === void 0 ? void 0 : _savedCallback$curren.call(savedCallback);
    }

    if (delay) {
      var id = setInterval(function () {
        tick();
      }, delay);
      return function () {
        clearInterval(id);
      };
    }
  }, [delay]);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isNullOrUndefined(value) {
  return [null, undefined].includes(value);
}

var WINDOW = 'window';
var PARENT = 'parent';

function getElementSizes(element) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var parentRect = element.getBoundingClientRect();
  var top = parentRect.top,
      bottom = parentRect.bottom,
      left = parentRect.left,
      right = parentRect.right;
  return {
    top: top,
    bottom: bottom,
    left: left,
    right: right
  };
}

function isElementInView(element, windowHeight, windowWidth) {
  if (element) {
    var _getElementSizes = getElementSizes(element),
        left = _getElementSizes.left,
        right = _getElementSizes.right,
        top = _getElementSizes.top,
        bottom = _getElementSizes.bottom;

    if (left > windowWidth) {
      return false;
    } else if (right < 0) {
      return false;
    } else if (top > windowHeight) {
      return false;
    } else if (bottom < 0) {
      return false;
    }
  }

  return true;
}

function useInfiniteScroll(_ref) {
  var loading = _ref.loading,
      hasNextPage = _ref.hasNextPage,
      onLoadMore = _ref.onLoadMore,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 150 : _ref$threshold,
      _ref$checkInterval = _ref.checkInterval,
      checkInterval = _ref$checkInterval === void 0 ? 200 : _ref$checkInterval,
      _ref$scrollContainer = _ref.scrollContainer,
      scrollContainer = _ref$scrollContainer === void 0 ? WINDOW : _ref$scrollContainer;
  var ref = React.useRef(null);

  var _useWindowSize = useWindowSize(),
      windowHeight = _useWindowSize.height,
      windowWidth = _useWindowSize.width; // Normally we could use the "loading" prop, but when you set "checkInterval" to a very small
  // number (like 10 etc.), some request components can't set its loading state
  // immediately (I had this problem with react-apollo's Query component. In some cases, it runs
  // "updateQuery" twice). Thus we set our own "listen" state which immeadiately turns to "false" on
  // calling "onLoadMore".


  var _useState = React.useState(true),
      listen = _useState[0],
      setListen = _useState[1];

  React.useEffect(function () {
    if (!loading) {
      setListen(true);
    }
  }, [loading]);

  function getBottomOffset() {
    var element = ref.current;

    if (!element || isNullOrUndefined(windowHeight)) {
      return null;
    }

    var rect = element.getBoundingClientRect();
    var bottom = rect.bottom;
    var bottomOffset = bottom - windowHeight;

    if (scrollContainer === PARENT) {
      var parent = element.parentNode;

      if (!parent) {
        return null;
      }

      var _getElementSizes2 = getElementSizes(parent),
          parentBottom = _getElementSizes2.bottom; // Distance between bottom of list and its parent


      bottomOffset = bottom - parentBottom;
    }

    return bottomOffset;
  }

  function isParentInView() {
    var _ref$current;

    var parent = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.parentNode;

    if (!parent || isNullOrUndefined(windowHeight) || isNullOrUndefined(windowWidth)) {
      return false;
    }

    return isElementInView(parent, windowHeight, windowWidth);
  }

  function isListInView() {
    var element = ref.current;

    if (!element || isNullOrUndefined(windowHeight) || isNullOrUndefined(windowWidth)) {
      return false;
    }

    return isElementInView(element, windowHeight, windowWidth);
  }

  function listenBottomOffset() {
    if (listen && !loading && hasNextPage) {
      if (ref.current) {
        if (scrollContainer === PARENT) {
          if (!isParentInView()) {
            // Do nothing if the parent is out of screen
            return;
          }
        } else if (!isListInView()) {
          return;
        } // Check if the distance between bottom of the container and bottom of the window or parent
        // is less than "threshold"


        var bottomOffset = getBottomOffset();

        if (isNullOrUndefined(bottomOffset)) {
          return;
        }

        var validOffset = bottomOffset < threshold;

        if (validOffset) {
          setListen(false);
          onLoadMore();
        }
      }
    }
  }

  useInterval(function () {
    listenBottomOffset();
  }, // Stop interval when there is no next page.
  hasNextPage ? checkInterval : 0);
  return ref;
}

function useInfiniteScrollRef(state, actions, threshold) {
  var infiniteRef = useInfiniteScroll({
    loading: state.ui.isLoading,
    hasNextPage: state.ui.hasLoaded && state.templates.length < state.ui.total,
    onLoadMore: actions.onLoadNextPage,
    threshold: threshold || 750
  });
  return infiniteRef;
}

exports.FilterSidebar = FilterSidebar;
exports.Gallery = Gallery;
exports.NoResults = NoResults;
exports.PreviewTemplate = PreviewTemplate;
exports.ResponsiveSidebar = ResponsiveSidebar;
exports.SearchAndResults = SearchAndResults;
exports.SidebarToggle = SidebarToggle;
exports.TemplateThumbnail = TemplateThumbnail;
exports.useInfiniteScrollRef = useInfiniteScrollRef;
exports.useTemplateState = useTemplateState;
