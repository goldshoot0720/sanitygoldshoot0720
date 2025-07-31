export const schemaTypes = [
  {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
      },
      {
        name: 'newDate',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'url1',
        title: 'URL1',
        type: 'url',
      },
      {
        name: 'url2',
        title: 'URL2',
        type: 'url',
      },
      {
        name: 'url3',
        title: 'URL3',
        type: 'url',
      },
      {
        name: 'file1',
        title: 'File1',
        type: 'text',
      },
      {
        name: 'file1type',
        title: 'File1Type',
        type: 'string',
      },
      {
        name: 'file2',
        title: 'File2',
        type: 'string',
      },
      {
        name: 'file2type',
        title: 'File2Type',
        type: 'string',
      },
      {
        name: 'file3',
        title: 'File3',
        type: 'string',
      },
      {
        name: 'file3type',
        title: 'File3Type',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'video',
        title: 'Video',
        type: 'file',
      },
      {
        name: 'pdf',
        title: 'Pdf',
        type: 'file',
      },
    ],
  },
  {
    name: 'mail',
    title: 'Mail',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'host',
        title: 'Host',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'account',
        title: 'Account',
        type: 'string',
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
    ],
  },
  {
    name: 'inventory',
    title: 'Inventory',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
      },
      {
        name: 'imgurl',
        title: 'Imgurl',
        type: 'url',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'shop',
        title: 'Shop',
        type: 'string',
      },
    ],
  },
  {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'year',
        title: 'Year',
        type: 'number',
      },
      {
        name: 'gov',
        title: 'Gov',
        type: 'string',
      },
      {
        name: 'site',
        title: 'Site',
        type: 'url',
      },
    ],
  },
  {
    name: 'member',
    title: 'Member',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'relation',
        title: 'Relation',
        type: 'string',
      },
      {
        name: 'gov',
        title: 'Gov',
        type: 'string',
      },
      {
        name: 'site',
        title: 'Site',
        type: 'url',
      },
      {
        name: 'img',
        title: 'Img',
        type: 'url',
      },
    ],
  },
  {
    name: 'bank',
    title: 'Bank',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'deposit',
        title: 'Deposit',
        type: 'number',
      },
      {
        name: 'site',
        title: 'Site',
        type: 'url',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text',
      },
      {
        name: 'withdrawals',
        title: 'Withdrawals',
        type: 'number',
      },
      {
        name: 'transfer',
        title: 'Transfer',
        type: 'number',
      },
      {
        name: 'activity',
        title: 'Activity',
        type: 'url',
      },
      {
        name: 'card',
        title: 'Card',
        type: 'string',
      },
      {
        name: 'account',
        title: 'Account',
        type: 'string',
      },
    ],
  },
  {
    name: 'cloud',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'site',
        title: 'Site',
        type: 'url',
      },
      {
        name: 'account',
        title: 'Account',
        type: 'string',
      },
      {
        name: 'space',
        title: 'Space',
        type: 'number',
      },
    ],
  },
  {
    name: 'routine',
    title: 'routine',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'date1',
        title: 'Date1',
        type: 'date',
      },
      {
        name: 'date2',
        title: 'Date2',
        type: 'date',
      },
      {
        name: 'date3',
        title: 'Date3',
        type: 'date',
      },
      {
        name: 'note',
        title: 'Note',
        type: 'text',
      },
      {
        name: 'site',
        title: 'Site',
        type: 'url',
      },
    ],
  },
  {
    name: 'host',
    title: 'Host',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'site',
        title: 'Site',
        type: 'url',
      },
      {
        name: 'account',
        title: 'Account',
        type: 'string',
      },
    ],
  },
  {
    name: 'subscription',
    title: 'Subscription',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'site',
        title: 'Site',
        type: 'url',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'nextdate',
        title: 'NextDate',
        type: 'date',
      },
      {
        name: 'note',
        title: 'Note',
        type: 'text',
      },
      {
        name: 'account',
        title: 'Account',
        type: 'string',
      },
    ],
  },
  {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
      {
        name: 'video',
        title: 'Video',
        type: 'file',
      },
      {
        name: 'imgurl',
        title: 'Imgurl',
        type: 'url',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
      },
      {
        name: 'datetime',
        title: 'Datetime',
        type: 'datetime',
      },
      {
        name: 'song',
        title: 'Song',
        type: 'string',
      },
      {
        name: 'site',
        title: 'Site',
        type: 'url',
      },
      {
        name: 'watch',
        title: 'Watch',
        type: 'url',
      },
      {
        name: 'youtube',
        title: 'YouTube',
        type: 'url',
      },
      {
        name: 'year',
        title: 'Year',
        type: 'number',
      },
      {
        name: 'season',
        title: 'Season',
        type: 'string',
      },
    ],
  },
  {
    name: 'food',
    title: 'Food',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'shop',
        title: 'Shop',
        type: 'string',
      },
      {
        name: 'todate',
        title: 'ToDate',
        type: 'date',
      },
      {
        name: 'photourl',
        title: 'Photourl',
        type: 'url',
      },
      {
        name: 'photo',
        title: 'Photo',
        type: 'image',
      },
      {
        name: 'photohash',
        title: 'Photohash',
        type: 'string',
      },
    ],
  },
]
