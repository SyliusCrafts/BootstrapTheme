// FontAwesome Icons
// Import icons one by one to reduce size of the output
import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons/faShoppingBag';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faShuttleVan } from '@fortawesome/free-solid-svg-icons/faShuttleVan';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard';
import { faFlag } from '@fortawesome/free-solid-svg-icons/faFlag';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons/faCcMastercard';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons/faCcVisa';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons/faCcPaypal';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons/faSyncAlt';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faAdjust } from '@fortawesome/free-solid-svg-icons/faAdjust';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faReplyAll } from '@fortawesome/free-solid-svg-icons/faReplyAll';

library.add(faStar, faQuestionCircle, faShoppingBag, faCheck, faExclamationCircle,
  faInfoCircle, faChevronUp, faMapMarkerAlt, faShuttleVan, faCreditCard, faFlag,
  faCcMastercard, faCcVisa, faCcPaypal, faTimes, faSearch, faPlus, faPencilAlt,
  faSyncAlt, faFacebook, faTwitter, faInstagram, faBan, faAdjust, faClock, faReplyAll
);
dom.watch();
