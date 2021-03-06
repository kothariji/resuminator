/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { DatePicker } from "@material-ui/pickers";
import React from "react";

const CustomDatePicker = ({ value, label, name, views, onChange, disabled, className }) => {
  const MIN_DATE = new Date(`${new Date().getFullYear() - 30}-01-01`);
  const MAX_DATE = new Date(`${new Date().getFullYear()}-12-31`);

  return (
    <DatePicker
      variant="inline"
      openTo="year"
      name={name}
      views={views}
      label={label}
      value={value}
      inputVariant="outlined"
      minDate={MIN_DATE}
      maxDate={MAX_DATE}
      key={name}
      disabled={disabled}
      onChange={onChange}
      className={className}
      autoOk={true}
    />
  );
};

export default CustomDatePicker;
