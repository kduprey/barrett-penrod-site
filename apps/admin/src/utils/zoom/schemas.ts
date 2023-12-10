import { z } from "zod";

export const ZoomGetUserId = z
	.object({
		id: z.string().describe("User ID.").optional(),
		created_at: z
			.string()
			.describe(
				"The date and time when this user's latest login type was created."
			)
			.optional(),
		dept: z.string().describe("Department.").optional(),
		email: z.string().describe("User's email address.").optional(),
		first_name: z.string().max(64).describe("User's first name.").optional(),
		last_client_version: z
			.string()
			.describe("User last login client version.")
			.optional(),
		last_login_time: z.string().describe("User last login time.").optional(),
		last_name: z.string().max(64).describe("User's last name.").optional(),
		pmi: z
			.number()
			.int()
			.describe(
				"[Personal Meeting ID (PMI)](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#understanding-personal-meeting-id-pmi)."
			)
			.optional(),
		role_name: z
			.string()
			.describe(
				"User's [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) name."
			)
			.optional(),
		timezone: z.string().describe("The time zone of the user.").optional(),
		type: z
			.union([z.literal(1), z.literal(2), z.literal(99)])
			.describe(
				"User's plan type:  \n `1` - Basic.  \n `2` - Licensed.  \n `99` - None (this can only be set with `ssoCreate`)."
			),
		use_pmi: z
			.boolean()
			.describe(
				"Displays `true` if user has enabled a [personal meeting ID (PMI)](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#understanding-personal-meeting-id-pmi) for instant meetings, `false` otherwise."
			)
			.optional(),
		display_name: z
			.string()
			.max(128)
			.describe("User's display name.")
			.optional(),
		account_id: z.string().describe("User's account ID.").optional(),
		account_number: z
			.number()
			.int()
			.describe("The user's account number.")
			.optional(),
		cms_user_id: z
			.string()
			.describe("The user's CMS ID. Only enabled for Kaltura integration.")
			.optional(),
		company: z.string().describe("The user's company.").optional(),
		user_created_at: z
			.string()
			.describe("The date and time when this user was created.")
			.optional(),
		custom_attributes: z
			.array(
				z.object({
					key: z
						.string()
						.describe("The custom attribute's identifier.")
						.optional(),
					name: z.string().describe("The custom attribute's name.").optional(),
					value: z
						.string()
						.describe("The custom attribute's value.")
						.optional(),
				})
			)
			.describe("Custom attributes that have been assigned to the user.")
			.optional(),
		employee_unique_id: z
			.string()
			.describe(
				"The employee's unique ID. This field only returns when: \n* SAML single sign-on (SSO) is enabled. \n* The `login_type` value is `101` (SSO)."
			)
			.optional(),
		group_ids: z
			.array(z.string())
			.describe("IDs of the web groups that the user belongs to. ")
			.optional(),
		im_group_ids: z
			.array(z.string())
			.describe("IM IDs of the groups that the user belongs to.")
			.optional(),
		jid: z.string().optional(),
		job_title: z.string().describe("The user's job title.").optional(),
		language: z
			.string()
			.describe("Default language for the Zoom Web Portal.")
			.optional(),
		location: z.string().describe("Theser's location.").optional(),
		login_types: z
			.array(
				z.union([
					z.literal(0),
					z.literal(1),
					z.literal(11),
					z.literal(21),
					z.literal(23),
					z.literal(24),
					z.literal(27),
					z.literal(97),
					z.literal(98),
					z.literal(99),
					z.literal(100),
					z.literal(101),
				])
			)
			.describe(
				"The user's login method.\n\n`0` - Facebook OAuth.\n`1` - Google OAuth.\n`24` - Apple OAuth.\n`27` - Microsoft OAuth.\n`97` - Mobile device.\n`98` - RingCentral OAuth.\n`99` - API user.\n`100` - Zoom Work email.\n`101` - Single Sign-On (SSO).\n\nThese login methods are only available in China.\n\n`11` - Phone number.\n`21` - WeChat.\n`23` - Alipay."
			)
			.optional(),
		manager: z
			.string()
			.email()
			.describe("The manager for the user.")
			.optional(),
		personal_meeting_url: z
			.string()
			.describe("User's personal meeting url.")
			.optional(),
		phone_country: z
			.string()
			.describe(
				"**Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field.   \n  User's country for Company Phone Number."
			)
			.optional(),
		phone_number: z
			.string()
			.describe(
				"**Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field.\n The user's phone number."
			)
			.optional(),
		phone_numbers: z
			.array(
				z.object({
					code: z
						.string()
						.describe(
							"The phone number's ISO country code. For example, United States phone numbers' value will be `+1`."
						)
						.optional(),
					country: z
						.string()
						.describe(
							"The phone number's [country ID](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries). For example, if the `number` field contains a Brazil-based number, this value is `BR`."
						)
						.optional(),
					label: z
						.enum(["Mobile", "Office", "Home", "Fax"])
						.describe(
							"The phone number's label.\n* `Mobile`\n* `Office`\n* `Home`\n * `Fax`"
						)
						.optional(),
					number: z.string().describe("The user's phone number.").optional(),
					verified: z
						.boolean()
						.describe("Whether Zoom has verified the phone number.")
						.optional(),
				})
			)
			.optional(),
		pic_url: z
			.string()
			.describe("The URL for user's profile picture.")
			.optional(),
		plan_united_type: z
			.enum([
				"1",
				"2",
				"4",
				"8",
				"16",
				"32",
				"64",
				"128",
				"256",
				"512",
				"1024",
				"2048",
				"4096",
				"8192",
				"16384",
				"32768",
				"65536",
				"131072",
			])
			.describe(
				"This field is returned if the user is enrolled in the [Zoom United](https://zoom.us/pricing/zoom-bundles) plan. The license option: \n* `1` - Zoom United Pro-United with US/CA Unlimited. \n* `2` - Zoom United Pro-United with UK/IR Unlimited. \n* `4` - Zoom United Pro-United with AU/NZ Unlimited. \n* `8` - Zoom United Pro-United with Global Select. \n* `16` - Zoom United Pro-United with Zoom Phone Pro. \n* `32` - Zoom United Biz-United with US/CA Unlimited. \n* `64` - Zoom United Biz-United with UK/IR Unlimited. \n* `128` - Zoom United Biz-United with AU/NZ Unlimited. \n* `256` - Zoom United Biz-United with Global Select. \n* `512` - Zoom United Biz-United with Zoom Phone Pro. \n* `1024` - Zoom United Ent-United with US/CA Unlimited. \n* `2048` - Zoom United Ent-United with UK/IR Unlimited. \n* `4096` - Zoom United Ent-United with AU/NZ Unlimited. \n* `8192` - Zoom United Ent-United with Global Select. \n* `16384` - Zoom United Ent-United with Zoom Phone Pro. \n* `32768` - Zoom United Pro-United with JP Unlimited. \n* `65536` - Zoom United Biz-United with JP Unlimited. \n* `131072` - Zoom United Ent-United with JP Unlimited."
			)
			.optional(),
		pronouns: z.string().describe("The user's pronouns.").optional(),
		pronouns_option: z
			.union([z.literal(1), z.literal(2), z.literal(3)])
			.describe(
				"The user's display pronouns setting.\n* `1` - Ask the user every time they join meetings and webinars. \n* `2` - Always display pronouns in meetings and webinars. \n* `3` - Do not display pronouns in meetings and webinars."
			)
			.optional(),
		role_id: z
			.string()
			.describe(
				"Unique identifier of the user's assigned [role](/docs/api-reference/zoom-api/methods#operation/roles)."
			)
			.optional(),
		status: z
			.enum(["pending", "active", "inactive"])
			.describe("Status of user's account.")
			.optional(),
		vanity_url: z
			.string()
			.describe("Personal meeting room URL, if the user has one.")
			.optional(),
		verified: z
			.number()
			.int()
			.describe(
				"Displays whether user is verified or not.\n \n`1` - Account verified.  \n \n`0` - Account not verified."
			)
			.optional(),
		cluster: z.string().describe("The user's cluster.").optional(),
		zoom_one_type: z
			.number()
			.int()
			.describe(
				"The user's Zoom One plan option.  \n `4` - Zoom One Enterprise.  \n `8` - Zoom One Enterprise Plus.  \n `16` - Zoom One Business Plus with US/CA Unlimited.  \n `32` - Zoom One Business Plus with UK/IR Unlimited.  \n `64` - Zoom One Business Plus with AU/NZ Unlimited.  \n `128` - Zoom One Business Plus with Japan Unlimited.  \n `33554432` - Zoom One Business Plus with Global Select.  \n `134217728` - Zoom One Enterprise Premier with US/CA Unlimited.  \n `1073741824` - Zoom One Enterprise Premier with AU/NZ Unlimited.  \n `536870912` - Zoom One Enterprise Premier with UK/IR Unlimited.  \n `268435456` - Zoom One Enterprise Premier with Japan Unlimited.  \n\n The Zoom One plan option for Gov accounts:  \n `4` - Zoom One Enterprise.  \n `8` - Zoom One Enterprise Plus.  \n `16` - Zoom One Business Plus. \n\n The Zoom One plan option for Education accounts:  \n `18014398509481984` - Zoom One for Education School and Campus.  \n `72057594037927936` - Zoom One for Education Enterprise Essentials.  \n `576460752303423488` - Zoom One for Education Enterprise Student. \n `144115188075855872` - Zoom One for Education Enterprise Plus.  \n `137438953472` - Zoom One for Education School and Campus Plus with US/CA Unlimited.  \n `1099511627776` -Zoom One for Education School and Campus Plus with AU/NZ Unlimited.  \n `549755813888` - Zoom One for Education School and Campus Plus with UK/IR Unlimited.  \n `274877906944` - Zoom One for Education School and Campus Plus with Japan Unlimited.  \n `2199023255552` - Zoom One for Education School and Campus Plus with Global Select.  \n `4294967296` - Zoom One for Education Enterprise Premier with US/CA Unlimited.  \n `34359738368` - Zoom One for Education Enterprise Premier with AU/NZ Unlimited.  \n `17179869184` -Zoom One for Education Enterprise Premier with UK/IR Unlimited.  \n `8589934592` - Zoom One for Education Enterprise Premier with with Japan Unlimited.  \n `68719476736` - Zoom One for Education Enterprise Premier with Global Select."
			)
			.optional(),
	})
	.describe("The user object represents a specific user on Zoom.");

export type ZoomGetUserId = z.infer<typeof ZoomGetUserId>;
