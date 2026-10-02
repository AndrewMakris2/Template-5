import { esc, external, sectionLabel, buttonClasses, telHref } from './utils.js';

const inputClasses =
  'mt-2 block w-full border border-line bg-paper px-4 py-3.5 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none';
const labelClasses = 'font-heading text-base italic text-ink';

/** Split panel: emerald details and booking on the left, an ivory form on the right. */
export function Contact({ contact, booking }) {
  const { form } = contact;
  const f = form.fields;
  const dt = 'text-[0.65rem] font-medium uppercase tracking-[0.3em] text-on-ink/60';

  return `
<section id="contact" class="scroll-mt-16 bg-cream py-20 md:py-28 lg:scroll-mt-32" aria-labelledby="contact-heading">
  <div class="mx-auto grid max-w-6xl px-5 md:px-10 lg:grid-cols-2">
    <div class="bg-ink p-8 text-on-ink sm:p-12 md:p-16">
      ${sectionLabel(contact.label, 'light', 'left')}
      <h2 id="contact-heading" class="mt-8 font-heading text-4xl italic leading-tight md:text-5xl">${esc(contact.heading)}</h2>
      <p class="mt-6 text-base leading-relaxed text-on-ink/80">${esc(contact.intro)}</p>
      <dl class="mt-12 space-y-6">
        <div><dt class="${dt}">${esc(contact.detailsLabels.email)}</dt><dd class="mt-2"><a href="mailto:${esc(contact.email)}" class="font-heading text-xl hover:underline">${esc(contact.email)}</a></dd></div>
        <div><dt class="${dt}">${esc(contact.detailsLabels.phone)}</dt><dd class="mt-2"><a href="${esc(telHref(contact.phone))}" class="font-heading text-xl lining-nums hover:underline">${esc(contact.phone)}</a></dd></div>
        <div><dt class="${dt}">${esc(contact.detailsLabels.studio)}</dt><dd class="mt-2 text-sm leading-relaxed text-on-ink/85"><address class="not-italic">${esc(contact.address)}</address></dd></div>
      </dl>
      <div class="mt-12 border-t border-on-ink/20 pt-10">
        <p class="font-heading text-xl italic">${esc(contact.bookingHeading)}</p>
        <a href="${esc(booking.url)}" ${external} class="mt-6 ${buttonClasses.light}">${esc(contact.bookingLabel)}</a>
      </div>
    </div>

    <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="space-y-6 bg-paper p-8 sm:p-12 md:p-16" data-contact-form>
      <input type="hidden" name="form-name" value="${esc(form.name)}" />
      <p class="hidden" aria-hidden="true">
        <label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>
      <div>
        <label for="contact-name" class="${labelClasses}">${esc(f.name.label)}</label>
        <input id="contact-name" name="name" type="text" autocomplete="name" required class="${inputClasses}" placeholder="${esc(f.name.placeholder)}" />
      </div>
      <div>
        <label for="contact-email" class="${labelClasses}">${esc(f.email.label)}</label>
        <input id="contact-email" name="email" type="email" autocomplete="email" required class="${inputClasses}" placeholder="${esc(f.email.placeholder)}" />
      </div>
      <div>
        <label for="contact-phone" class="${labelClasses}">${esc(f.phone.label)}</label>
        <input id="contact-phone" name="phone" type="tel" autocomplete="tel" class="${inputClasses}" placeholder="${esc(f.phone.placeholder)}" />
      </div>
      <div>
        <label for="contact-message" class="${labelClasses}">${esc(f.message.label)}</label>
        <textarea id="contact-message" name="message" rows="5" required class="${inputClasses} resize-y" placeholder="${esc(f.message.placeholder)}"></textarea>
      </div>
      <button type="submit" class="w-full ${buttonClasses.solid} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)}</button>
      <p class="hidden border border-line p-4 text-center font-heading text-lg italic text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
      <p class="hidden border border-accent p-4 text-center text-base text-accent" role="alert" data-form-error>${esc(form.errorMessage)}</p>
      <p class="text-center text-sm text-muted">${esc(form.privacyNote)} <a href="/privacy/" class="underline underline-offset-4">${esc(form.privacyLabel)}</a></p>
    </form>
  </div>
</section>`;
}
