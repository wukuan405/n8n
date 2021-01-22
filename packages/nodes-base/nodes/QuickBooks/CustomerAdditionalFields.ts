export const customerAdditionalFields = [
	{
		displayName: 'Accounts Receivable Account',
		name: 'ARAccountRef',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Active',
		name: 'Active',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Alternate Phone',
		name: 'AlternatePhone',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Balance',
		name: 'Balance',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Balance With Jobs',
		name: 'BalanceWithJobs',
		type: 'number',
		default: 0,
	},
	{
		displayName: 'Billing Address',
		name: 'BillingAddress',
		placeholder: 'Add Billing Address Fields',
		type: 'fixedCollection',
		default: {},
		options: [
			{
				displayName: 'Details',
				name: 'details',
				values: [
					{
						displayName: 'City',
						name: 'City',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Line 1',
						name: 'Line1',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Postal Code',
						name: 'PostalCode',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Latitude',
						name: 'Lat',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Longitude',
						name: 'Long',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Country Subdivision Code',
						name: 'CountrySubDivisionCode',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Bill With Parent',
		name: 'BillWithParent',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Business Number',
		name: 'BusinessNumber',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Company Name',
		name: 'CompanyName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Currency',
		name: 'CurrencyRef',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Customer Type',
		name: 'CustomerTypeRef',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Default Tax Code',
		name: 'DefaultTaxCodeRef',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Family Name',
		name: 'FamilyName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Fax',
		name: 'Fax',
		type: 'string',
		default: '',
	},
	{
		name: 'Fully Qualified Name',
		value: 'FullyQualifiedName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'GSTIN',
		name: 'GSTIN',
		type: 'string',
		default: '',
	},
	{
		displayName: 'GST Registration Type',
		name: 'GSTRegistrationType',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Given Name',
		name: 'GivenName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Is Project',
		name: 'IsProject',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Job',
		name: 'Job',
		type: 'string',
		default: '',
	},
	{
		name: 'Level',
		value: 'Level',
		type: 'number',
		default: 0,
	},
	{
		displayName: 'Middle Name',
		name: 'MiddleName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Mobile',
		name: 'Mobile',
		type: 'string',
		default: '',
	},
	{ displayName: 'Notes',
		name: 'Notes',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Open Balance Date',
		name: 'OpenBalanceDate',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Parent',
		name: 'ParentRef',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Payment Method',
		name: 'PaymentMethodRef',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Preferred Delivery Method',
		name: 'PreferredDeliveryMethod',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Primary Email Address',
		name: 'PrimaryEmailAddr',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Primary Phone Number',
		name: 'PrimaryPhonenumber',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Primary Tax Identifier',
		name: 'PrimaryTaxIdentifier',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Print on Check Name',
		name: 'PrintOnCheckName',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Resale Number',
		name: 'ResaleNumber',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Sales Term',
		name: 'SalesTermRef',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Secondary Tax Identifier',
		name: 'SecondaryTaxIdentifier',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Shipping Address',
		name: 'ShipAddr',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Suffix',
		name: 'Suffix',
		type: 'string',
		default: '',
	},
	{
		name: 'Tax Exemption Reason',
		value: 'TaxExemptionReason',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Taxable',
		name: 'Taxable',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Title',
		name: 'Title',
		type: 'string',
		default: '',
	},
	{
		displayName: 'Website Address',
		name: 'WebAddr',
		type: 'string',
		default: '',
	},
];

export interface CustomerBillingAddress {
	details: {
		[key: string]: string;
		City: string,
		Line1: string,
		PostalCode: string,
		Lat: string,
		Long: string,
		CountrySubDivisionCode: string,
	};
}
