'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './StudioWizard.module.css';

const STEPS = ['YOUR DETAILS', 'SCHEDULE', 'SERVICES', 'REVIEW'];

const PACKAGES = [
  { id: 'hourly', label: 'Hourly Session', hint: 'Recording & mixing, by the hour' },
  { id: 'half-day', label: 'Half-Day Session', hint: 'Up to 4 hours, audio + video' },
  { id: 'full-day', label: 'Full-Day Session', hint: 'Up to 8 hours, full production' },
];

const ADD_ONS = [
  { id: 'editing', label: 'Episode editing' },
  { id: 'mixing', label: 'Audio mixing & mastering' },
  { id: 'cover-art', label: 'Thumbnail & cover art' },
];

const TIME_SLOTS = ['Morning (9am – 12pm)', 'Afternoon (1pm – 5pm)', 'Evening (6pm – 9pm)'];

export default function StudioWizard() {
  const [step, setStep] = useState(0);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[0]);
  const [pkg, setPkg] = useState(PACKAGES[0].id);
  const [addOns, setAddOns] = useState([]);
  const [touched, setTouched] = useState(false);

  const stepValid = () => {
    if (step === 0) return fullName.trim().length > 0 && phone.trim().length > 0;
    if (step === 1) return date.length > 0;
    return true;
  };

  const next = () => {
    if (!stepValid()) {
      setTouched(true);
      return;
    }
    setTouched(false);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => {
    setTouched(false);
    setStep((s) => Math.max(s - 1, 0));
  };

  const toggleAddOn = (id) => {
    setAddOns((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  const selectedPackage = PACKAGES.find((p) => p.id === pkg);
  const selectedAddOnLabels = ADD_ONS.filter((a) => addOns.includes(a.id)).map((a) => a.label);

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Studio booking request — ${fullName || 'New enquiry'}`);
    const body = encodeURIComponent(
      [
        'Hello Elephant Media,',
        '',
        'I would like to request a studio slot with the following details:',
        '',
        `Name: ${fullName}`,
        `Phone: ${phone}`,
        `Preferred date: ${date}`,
        `Time slot: ${timeSlot}`,
        `Package: ${selectedPackage.label}`,
        `Add-ons: ${selectedAddOnLabels.length > 0 ? selectedAddOnLabels.join(', ') : 'None'}`,
        '',
        'Thank you!',
      ].join('\n')
    );
    return `mailto:info@elephantmedia.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.wizard}>
      {/* STEP INDICATOR */}
      <ol className={styles.steps}>
        {STEPS.map((label, i) => (
          <li
            key={label}
            className={`${styles.stepItem} ${i === step ? styles.active : ''} ${
              i < step ? styles.done : ''
            }`}
          >
            <span className={styles.stepNumber}>{i + 1}</span>
            <span className={styles.stepLabel}>{label}</span>
          </li>
        ))}
      </ol>

      {/* STEP 1 — DETAILS */}
      {step === 0 && (
        <div className={styles.panel}>
          <h2 className={styles.panelTitle}>Let&apos;s get introduced</h2>
          <p className={styles.panelSub}>Who are we reserving the studio for?</p>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="studio-name">
              Full Name <span className={styles.asterisk}>*</span>
            </label>
            <input
              id="studio-name"
              type="text"
              className={styles.input}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="studio-phone">
              Phone Number <span className={styles.asterisk}>*</span>
            </label>
            <input
              id="studio-phone"
              type="tel"
              className={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              autoComplete="tel"
            />
          </div>
          {touched && !stepValid() && (
            <p className={styles.error}>Please add your name and phone number to continue.</p>
          )}
        </div>
      )}

      {/* STEP 2 — SCHEDULE */}
      {step === 1 && (
        <div className={styles.panel}>
          <h2 className={styles.panelTitle}>Pick a time</h2>
          <p className={styles.panelSub}>When would you like to use the studio?</p>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="studio-date">
              Preferred Date <span className={styles.asterisk}>*</span>
            </label>
            <input
              id="studio-date"
              type="date"
              className={styles.input}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.label}>Time Slot</span>
            <div className={styles.optionList}>
              {TIME_SLOTS.map((slot) => (
                <label
                  key={slot}
                  className={`${styles.option} ${timeSlot === slot ? styles.selected : ''}`}
                >
                  <input
                    type="radio"
                    name="time-slot"
                    value={slot}
                    checked={timeSlot === slot}
                    onChange={() => setTimeSlot(slot)}
                    className={styles.hiddenInput}
                  />
                  <span className={styles.optionLabel}>{slot}</span>
                </label>
              ))}
            </div>
          </div>
          {touched && !stepValid() && (
            <p className={styles.error}>Please choose a preferred date to continue.</p>
          )}
        </div>
      )}

      {/* STEP 3 — SERVICES */}
      {step === 2 && (
        <div className={styles.panel}>
          <h2 className={styles.panelTitle}>Choose your package</h2>
          <p className={styles.panelSub}>Review the packages and pick what fits your session.</p>
          <div className={styles.optionList}>
            {PACKAGES.map((p) => (
              <label
                key={p.id}
                className={`${styles.option} ${pkg === p.id ? styles.selected : ''}`}
              >
                <input
                  type="radio"
                  name="package"
                  value={p.id}
                  checked={pkg === p.id}
                  onChange={() => setPkg(p.id)}
                  className={styles.hiddenInput}
                />
                <span className={styles.optionLabel}>{p.label}</span>
                <span className={styles.optionHint}>{p.hint}</span>
              </label>
            ))}
          </div>
          <div className={styles.inputGroup}>
            <span className={styles.label}>Add-ons (optional)</span>
            <div className={styles.optionList}>
              {ADD_ONS.map((addon) => (
                <label
                  key={addon.id}
                  className={`${styles.option} ${
                    addOns.includes(addon.id) ? styles.selected : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={addOns.includes(addon.id)}
                    onChange={() => toggleAddOn(addon.id)}
                    className={styles.hiddenInput}
                  />
                  <span className={styles.optionLabel}>{addon.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* STEP 4 — REVIEW */}
      {step === 3 && (
        <div className={styles.panel}>
          <h2 className={styles.panelTitle}>Review your request</h2>
          <p className={styles.panelSub}>
            Check the details below. Nothing is booked yet — requesting opens your email app
            with a pre-filled message to our team.
          </p>
          <dl className={styles.reviewList}>
            <div className={styles.reviewRow}>
              <dt>Name</dt>
              <dd>{fullName}</dd>
            </div>
            <div className={styles.reviewRow}>
              <dt>Phone</dt>
              <dd>{phone}</dd>
            </div>
            <div className={styles.reviewRow}>
              <dt>Date</dt>
              <dd>{date}</dd>
            </div>
            <div className={styles.reviewRow}>
              <dt>Time</dt>
              <dd>{timeSlot}</dd>
            </div>
            <div className={styles.reviewRow}>
              <dt>Package</dt>
              <dd>{selectedPackage.label}</dd>
            </div>
            <div className={styles.reviewRow}>
              <dt>Add-ons</dt>
              <dd>{selectedAddOnLabels.length > 0 ? selectedAddOnLabels.join(', ') : 'None'}</dd>
            </div>
          </dl>
          <a href={mailtoHref()} className={styles.requestBtn}>
            <span className={styles.requestIcon}>↗</span>
            Request via email
          </a>
          <p className={styles.disclaimer}>
            This opens a draft email to info@elephantmedia.com. Your slot is only
            confirmed once our team replies — nothing is submitted automatically.
          </p>
        </div>
      )}

      {/* NAV BUTTONS */}
      <div className={styles.navRow}>
        {step === 0 ? (
          <Link href="/" className={styles.backBtn}>
            Back
          </Link>
        ) : (
          <button type="button" onClick={back} className={styles.backBtn}>
            Back
          </button>
        )}
        {step < STEPS.length - 1 && (
          <button type="button" onClick={next} className={styles.nextBtn}>
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}
