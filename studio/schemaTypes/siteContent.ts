import { defineType, defineField, defineArrayMember } from 'sanity'

export const siteContent = defineType({
  name: 'siteContent',
  title: 'Website inhoud',
  type: 'document',
  fields: [
    defineField({
      name: 'photo',
      title: 'Foto (profielfoto)',
      type: 'image',
      description: 'Profielfoto van Jeroen — verschijnt rechtsboven op de homepage.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'name',
      title: 'Naam',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'business',
      title: 'Bedrijfsnaam',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'role',
      title: 'Functie / Rol',
      type: 'string',
      description: 'Wordt getoond onder de naam, bijv. "Sociotherapeut · ZZP"',
    }),
    defineField({
      name: 'phone',
      title: 'Telefoonnummer',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-mailadres',
      type: 'string',
    }),
    defineField({
      name: 'region',
      title: 'Werkgebied (kort)',
      type: 'string',
      description: 'Bijv. "Friesland & Groningen"',
    }),
    defineField({
      name: 'bio',
      title: 'Biografie',
      type: 'array',
      description: 'Elke alinea is een apart item. Eerste alinea verschijnt op de homepage, de rest op "Over mij".',
      of: [defineArrayMember({ type: 'text', rows: 4 })],
    }),
    defineField({
      name: 'values',
      title: 'Kernwaarden',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Titel', type: 'string' }),
            defineField({ name: 'description', title: 'Omschrijving', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),
    defineField({
      name: 'credentials',
      title: 'Opleidingen & Registraties',
      type: 'array',
      description: 'Elk certificaat of diploma als apart item.',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'experience',
      title: 'Werkervaring',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'org', title: 'Organisatie', type: 'string' }),
            defineField({ name: 'role', title: 'Functie', type: 'string' }),
            defineField({ name: 'period', title: 'Periode', type: 'string', description: 'Bijv. "2020–2024"' }),
          ],
          preview: { select: { title: 'org', subtitle: 'role' } },
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Diensten',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Naam dienst', type: 'string' }),
            defineField({ name: 'description', title: 'Omschrijving', type: 'text', rows: 3 }),
            defineField({ name: 'forWho', title: 'Voor wie', type: 'text', rows: 2 }),
            defineField({ name: 'approach', title: 'Werkwijze', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
    }),
    defineField({
      name: 'regionDetails',
      title: 'Werkgebied details',
      type: 'object',
      fields: [
        defineField({ name: 'description', title: 'Omschrijving werkgebied', type: 'text', rows: 3 }),
        defineField({
          name: 'areas',
          title: 'Specialisatiegebieden',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({ name: 'tariff', title: 'Tarief', type: 'string' }),
      ],
    }),
    defineField({
      name: 'practiceInfo',
      title: 'Praktijkinformatie',
      type: 'object',
      fields: [
        defineField({ name: 'application', title: 'Aanmelding', type: 'text', rows: 2 }),
        defineField({ name: 'noShow', title: 'Verhindering & no-show', type: 'text', rows: 2 }),
        defineField({ name: 'confidentiality', title: 'Geheimhouding', type: 'text', rows: 2 }),
        defineField({ name: 'kvk', title: 'KVK', type: 'string' }),
        defineField({
          name: 'registrations',
          title: 'Registraties',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'business', subtitle: 'name' },
  },
})
