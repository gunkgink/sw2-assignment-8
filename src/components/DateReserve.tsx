'use client';

import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

export default function DateReserve() {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [venue, setVenue] = useState('');

  return (
    <div className="flex flex-col space-y-4 w-full max-w-md">
      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />

      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        fullWidth
      />

      <FormControl variant="standard" fullWidth>
        <InputLabel id="venue-select-label">Venue</InputLabel>
        <Select
          variant="standard"
          id="venue"
          labelId="venue-select-label"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={reserveDate}
          onChange={(newValue) => setReserveDate(newValue)}
        />
      </LocalizationProvider>
    </div>
  );
}
