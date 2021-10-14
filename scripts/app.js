"use strict";

import { clearTranslations } from "./clearTranslations.js";
import { renderTranslations } from "./renderTranslations.js";
import { submitTranslation } from "./submitTranslation.js";


const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", submitTranslation);

const clearTranslationsBtn = document.getElementById("clearTranslationsBtn");
clearTranslationsBtn.addEventListener("click", clearTranslations);
