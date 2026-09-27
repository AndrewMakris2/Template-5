import { esc, external, sectionLabel, buttonClasses, telHref } from './utils.js';
import { icon } from './icons.js';

const inputClasses =
  'mt-2 block w-full border-0 border-b border-ink/30 bg-transparent px-0 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none focus:ring-0';
const labelClasses = 'text-[0.7rem] font-medium uppercase tracking-[0.25em] text-muted';

export function Contact({ contact, booking }) {
  const { form } = contact;
  const f = form.fields;

  return `
<section id="contact" class="scroll-mt-16 bg-paper py-24 md:scroll-mt-20 md:py-36" aria-labelledby="contact-heading">
  <div class="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
    <div class="lg:col-span-5">
      ${sectionLabel(contact.label)}
      <h2 id="contact-heading" class="mt-6 font-heading text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">${esc(contact.heading)}</h2>
      <p class="mt-6 max-w-md text-base leading-relaxed text-muted">${esc(contact.intro)}</p>

      <dl class="mt-12 space-y-6">
        <div>
          <dt class="${labelClasses}">${esc(contact.detailsLabels.email)}</dt>
          <dd class="mt-1"><a href="mailto:${esc(contact.email)}" class="font-heading text-2xl text-ink transition-colors hover:text-accent">${esc(contact.email)}</a></dd>
        </div>
        <div>
          <dt class="${labelClasses}">${esc(contact.detailsLabels.phone)}</dt>
          <dd class="mt-1"><a href="${esc(telHref(contact.phone))}" class="font-heading text-2xl lining-nums text-ink transition-colors hover:text-accent">${esc(contact.phone)}</a></dd>
        </div>
        <div>
          <dt class="${labelClasses}">${esc(contact.detailsLabels.studio)}</dt>
          <dd class="mt-1 text-base leading-relaxed text-ink"><address class="not-italic">${esc(contact.address)}</address></dd>
        </div>
      </dl>

      <div class="mt-12 border-t border-line pt-10">
        <p class="font-heading text-2xl font-light italic text-ink">${esc(contact.bookingHeading)}</p>
        <a href="${esc(booking.url)}" ${external} class="mt-6 ${buttonClasses.solid}">${esc(contact.bookingLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
      </div>
    </div>

    <div class="lg:col-span-6 lg:col-start-7">
      <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="space-y-8 bg-cream p-6 sm:p-10 md:p-12" data-contact-form>
        <input type="hidden" name="form-name" value="${esc(form.name)}" />
        <p class="hidden" aria-hidden="true">
          <label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
        </p>

        <div class="grid gap-8 sm:grid-cols-2">
          <div>
            <label for="contact-name" class="${labelClasses}">${esc(f.name.label)}</label>
            <input id="contact-name" name="name" type="text" autocomplete="name" required class="${inputClasses}" placeholder="${esc(f.name.placeholder)}" />
          </div>
          <div>
            <label for="contact-phone" class="${labelClasses}">${esc(f.phone.label)}</label>
            <input id="contact-phone" name="phone" type="tel" autocomplete="tel" class="${inputClasses}" placeholder="${esc(f.phone.placeholder)}" />
          </div>
        </div>
        <div>
          <label for="contact-email" class="${labelClasses}">${esc(f.email.label)}</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required class="${inputClasses}" placeholder="${esc(f.email.placeholder)}" />
        </div>
        <div>
          <label for="contact-message" class="${labelClasses}">${esc(f.message.label)}</label>
          <textarea id="contact-message" name="message" rows="5" required class="${inputClasses} resize-y" placeholder="${esc(f.message.placeholder)}"></textarea>
        </div>

        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" class="${buttonClasses.solid} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)} ${icon('arrowRight', 'h-4 w-4')}</button>
        </div>
        <p class="hidden text-base text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
        <p class="hidden text-base text-accent" role="alert" data-form-error>${esc(form.errorMessage)}</p>
      </form>
    </div>
  </div>
</section>`;
}
