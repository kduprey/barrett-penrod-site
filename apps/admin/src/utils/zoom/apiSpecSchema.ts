// /* eslint-disable camelcase -- This is a generated file */
// import { z } from "zod";

// const UpdateLockedSettings_Body = z.union([
// 	z
// 		.object({
// 			audio_conferencing: z
// 				.object({ toll_free_and_fee_based_toll_call: z.boolean() })
// 				.partial()
// 				.passthrough(),
// 			chat: z
// 				.object({
// 					share_files: z.boolean(),
// 					chat_emojis: z.boolean(),
// 					record_voice_messages: z.boolean(),
// 					record_video_messages: z.boolean(),
// 					screen_capture: z.boolean(),
// 					share_links_in_chat: z.boolean(),
// 					schedule_meetings_in_chat: z.boolean(),
// 					set_retention_period_in_cloud: z.boolean(),
// 					set_retention_period_in_local: z.boolean(),
// 					allow_users_to_add_contacts: z.boolean(),
// 					allow_users_to_chat_with_others: z.boolean(),
// 					chat_etiquette_tool: z.boolean(),
// 					send_data_to_third_party_archiving_service: z.boolean(),
// 					translate_messages: z.boolean(),
// 					search_and_send_animated_gif_images: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			email_notification: z
// 				.object({
// 					alternative_host_reminder: z.boolean(),
// 					cancel_meeting_reminder: z.boolean(),
// 					cloud_recording_available_reminder: z.boolean(),
// 					jbh_reminder: z.boolean(),
// 					schedule_for_reminder: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			in_meeting: z
// 				.object({
// 					alert_guest_join: z.boolean(),
// 					allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 					allow_live_streaming: z.boolean(),
// 					allow_show_zoom_windows: z.boolean(),
// 					annotation: z.boolean(),
// 					anonymous_question_answer: z.boolean(),
// 					attendee_on_hold: z.boolean(),
// 					attention_mode_focus_mode: z.boolean(),
// 					auto_answer: z.boolean(),
// 					auto_generated_captions: z.boolean(),
// 					auto_saving_chat: z.boolean(),
// 					breakout_room: z.boolean(),
// 					chat: z.boolean(),
// 					meeting_question_answer: z.boolean(),
// 					closed_caption: z.boolean(),
// 					co_host: z.boolean(),
// 					custom_data_center_regions: z.boolean(),
// 					disable_screen_sharing_for_host_meetings: z.boolean(),
// 					disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 					dscp_marking: z.boolean(),
// 					e2e_encryption: z.boolean(),
// 					entry_exit_chime: z.string(),
// 					far_end_camera_control: z.boolean(),
// 					feedback: z.boolean(),
// 					file_transfer: z.boolean(),
// 					full_transcript: z.boolean(),
// 					group_hd: z.boolean(),
// 					webinar_group_hd: z.boolean(),
// 					language_interpretation: z.boolean(),
// 					sign_language_interpretation: z.boolean(),
// 					webinar_reactions: z.boolean(),
// 					meeting_survey: z.boolean(),
// 					original_audio: z.boolean(),
// 					polling: z.boolean(),
// 					post_meeting_feedback: z.boolean(),
// 					private_chat: z.boolean(),
// 					remote_control: z.boolean(),
// 					non_verbal_feedback: z.boolean(),
// 					remote_support: z.boolean(),
// 					request_permission_to_unmute_participants: z.boolean(),
// 					save_caption: z.boolean(),
// 					save_captions: z.boolean(),
// 					screen_sharing: z.boolean(),
// 					sending_default_email_invites: z.boolean(),
// 					show_meeting_control_toolbar: z.boolean(),
// 					slide_control: z.boolean(),
// 					stereo_audio: z.boolean(),
// 					use_html_format_email: z.boolean(),
// 					virtual_background: z.boolean(),
// 					webinar_chat: z.boolean(),
// 					webinar_live_streaming: z.boolean(),
// 					webinar_polling: z.boolean(),
// 					webinar_question_answer: z.boolean(),
// 					webinar_survey: z.boolean(),
// 					whiteboard: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			other_options: z
// 				.object({
// 					blur_snapshot: z.boolean(),
// 					webinar_registration_options: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			recording: z
// 				.object({
// 					account_user_access_recording: z.boolean(),
// 					auto_delete_cmr: z.boolean(),
// 					auto_recording: z.boolean(),
// 					cloud_recording: z.boolean(),
// 					cloud_recording_download: z.boolean(),
// 					host_delete_cloud_recording: z.boolean(),
// 					ip_address_access_control: z.boolean(),
// 					local_recording: z.boolean(),
// 					prevent_host_access_recording: z.boolean(),
// 					recording_authentication: z.boolean(),
// 					archive: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			schedule_meeting: z
// 				.object({
// 					audio_type: z.boolean(),
// 					embed_password_in_join_link: z.boolean(),
// 					enforce_login: z.boolean(),
// 					enforce_login_domains: z.string(),
// 					enforce_login_with_domains: z.boolean(),
// 					host_video: z.boolean(),
// 					join_before_host: z.boolean(),
// 					meeting_authentication: z.boolean(),
// 					not_store_meeting_topic: z.boolean(),
// 					always_display_zoom_webinar_as_topic: z.boolean(),
// 					participant_video: z.boolean(),
// 					personal_meeting: z.boolean(),
// 					require_password_for_instant_meetings: z.boolean(),
// 					require_password_for_pmi_meetings: z.boolean(),
// 					require_password_for_scheduling_new_meetings: z.boolean(),
// 					use_pmi_for_instant_meetings: z.boolean(),
// 					use_pmi_for_scheduled_meetings: z.boolean(),
// 					continuous_meeting_chat: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			telephony: z
// 				.object({
// 					telephony_regions: z.boolean(),
// 					third_party_audio: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			tsp: z
// 				.object({
// 					call_out: z.boolean(),
// 					show_international_numbers_link: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// 	z
// 		.object({
// 			meeting_security: z
// 				.object({
// 					approved_or_denied_countries_or_regions: z.boolean(),
// 					auto_security: z.boolean(),
// 					block_user_domain: z.boolean(),
// 					chat_etiquette_tool: z.boolean(),
// 					embed_password_in_join_link: z.boolean(),
// 					encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 					end_to_end_encrypted_meetings: z.boolean(),
// 					meeting_password: z.boolean(),
// 					only_authenticated_can_join_from_webclient: z.boolean(),
// 					phone_password: z.boolean(),
// 					pmi_password: z.boolean(),
// 					waiting_room: z.boolean(),
// 					webinar_password: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// ]);
// const accountSettingsUpdate_Body = z.union([
// 	z
// 		.object({
// 			security: z
// 				.object({
// 					admin_change_name_pic: z.boolean(),
// 					admin_change_user_info: z.boolean(),
// 					user_modifiable_info_by_admin: z.array(
// 						z.enum(["name", "profile_picture", "sign_in_email", "host_key"])
// 					),
// 					signin_with_sso: z
// 						.object({
// 							enable: z.boolean(),
// 							require_sso_for_domains: z.boolean(),
// 							domains: z.array(z.string()),
// 							sso_bypass_user_ids: z.array(z.string()),
// 						})
// 						.partial()
// 						.passthrough(),
// 					hide_billing_info: z.boolean(),
// 					import_photos_from_devices: z.boolean(),
// 					password_requirement: z
// 						.object({
// 							consecutive_characters_length: z.number().int(),
// 							have_special_character: z.boolean(),
// 							minimum_password_length: z.number().int().gte(8).lte(14),
// 							weak_enhance_detection: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					sign_again_period_for_inactivity_on_client: z.number().int(),
// 					sign_again_period_for_inactivity_on_web: z.number().int(),
// 					sign_in_with_two_factor_auth: z.enum([
// 						"all",
// 						"group",
// 						"role",
// 						"none",
// 					]),
// 					sign_in_with_two_factor_auth_groups: z.array(z.string()),
// 					sign_in_with_two_factor_auth_roles: z.array(z.string()),
// 				})
// 				.partial()
// 				.passthrough(),
// 			audio_conferencing: z
// 				.object({
// 					toll_free_and_fee_based_toll_call: z
// 						.object({
// 							allow_webinar_attendees_dial: z.boolean(),
// 							enable: z.boolean(),
// 							numbers: z
// 								.array(
// 									z
// 										.object({
// 											code: z.string(),
// 											country_code: z.string(),
// 											country_name: z.string(),
// 											display_number: z.string().max(30),
// 											number: z.string().max(30),
// 										})
// 										.partial()
// 										.passthrough()
// 								)
// 								.max(100),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			chat: z
// 				.object({
// 					allow_bots_chat: z.boolean(),
// 					share_files: z
// 						.object({
// 							enable: z.boolean(),
// 							share_option: z.enum(["anyone", "account", "organization"]),
// 							restrictions: z
// 								.object({
// 									only_allow_specific_file_types: z.boolean(),
// 									file_type_restrictions: z.array(
// 										z.enum([
// 											".gz",
// 											".rar",
// 											".zip",
// 											".xls",
// 											".xlsx",
// 											".json",
// 											".png",
// 											".pptx",
// 											".ppt",
// 											".7z",
// 											".xmind",
// 											".pdf",
// 											".pps",
// 											".txt",
// 											".docx",
// 											".doc",
// 										])
// 									),
// 									file_type_restrictions_for_external: z.array(
// 										z.enum([
// 											".gz",
// 											".rar",
// 											".zip",
// 											".xls",
// 											".xlsx",
// 											".json",
// 											".png",
// 											".pptx",
// 											".ppt",
// 											".7z",
// 											".xmind",
// 											".pdf",
// 											".pps",
// 											".txt",
// 											".docx",
// 											".doc",
// 										])
// 									),
// 									maximum_file_size: z.boolean(),
// 									file_size_restrictions: z.union([
// 										z.literal(50),
// 										z.literal(100),
// 										z.literal(200),
// 										z.literal(300),
// 										z.literal(400),
// 										z.literal(500),
// 									]),
// 									file_size_restrictions_for_external: z.union([
// 										z.literal(50),
// 										z.literal(100),
// 										z.literal(200),
// 										z.literal(300),
// 										z.literal(400),
// 										z.literal(500),
// 									]),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					chat_emojis: z
// 						.object({
// 							enable: z.boolean(),
// 							emojis_option: z.enum(["all", "selected"]),
// 						})
// 						.partial()
// 						.passthrough(),
// 					record_voice_messages: z.boolean(),
// 					record_video_messages: z.boolean(),
// 					screen_capture: z.boolean(),
// 					create_public_channels: z.boolean(),
// 					create_private_channels: z.boolean(),
// 					share_links_in_chat: z.boolean(),
// 					schedule_meetings_in_chat: z.boolean(),
// 					set_retention_period_in_cloud: z
// 						.object({
// 							enable: z.boolean(),
// 							retention_period_of_direct_messages_and_group_conversation:
// 								z.string(),
// 							retention_period_of_channels: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					set_retention_period_in_local: z
// 						.object({
// 							enable: z.boolean(),
// 							retention_period_of_direct_messages_and_group_conversation:
// 								z.string(),
// 							retention_period_of_channels: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					allow_users_to_add_contacts: z
// 						.object({
// 							enable: z.boolean(),
// 							selected_option: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							]),
// 							user_email_addresses: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					allow_users_to_chat_with_others: z
// 						.object({
// 							enable: z.boolean(),
// 							selected_option: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							]),
// 							user_email_addresses: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					chat_etiquette_tool: z
// 						.object({
// 							enable: z.boolean(),
// 							operate: z.enum(["create", "update", "delete"]),
// 							policies: z.array(
// 								z
// 									.object({
// 										description: z.string(),
// 										id: z.string(),
// 										is_locked: z.boolean(),
// 										keywords: z.array(z.string()),
// 										name: z.string(),
// 										regular_expression: z.string(),
// 										status: z.enum(["activated", "deactivated"]),
// 										trigger_action: z.union([z.literal(1), z.literal(2)]),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					send_data_to_third_party_archiving_service: z
// 						.object({
// 							enable: z.boolean(),
// 							type: z.enum(["global_relay", "smarsh"]),
// 							smtp_delivery_address: z.string(),
// 							user_name: z.string(),
// 							passcode: z.string(),
// 							authorized_channel_token: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					apply_local_storage_to_personal_channel: z
// 						.object({ enable: z.boolean(), retention_period: z.string() })
// 						.partial()
// 						.passthrough(),
// 					translate_messages: z.boolean(),
// 					search_and_send_animated_gif_images: z
// 						.object({
// 							enable: z.boolean(),
// 							giphy_content_rating: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							]),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			email_notification: z
// 				.object({
// 					alternative_host_reminder: z.boolean(),
// 					cancel_meeting_reminder: z.boolean(),
// 					cloud_recording_available_reminder: z.boolean(),
// 					jbh_reminder: z.boolean(),
// 					low_host_count_reminder: z.boolean(),
// 					recording_available_reminder_alternative_hosts: z.boolean(),
// 					recording_available_reminder_schedulers: z.boolean(),
// 					schedule_for_reminder: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			feature: z
// 				.object({ meeting_capacity: z.number().int() })
// 				.partial()
// 				.passthrough(),
// 			in_meeting: z
// 				.object({
// 					alert_guest_join: z.boolean(),
// 					allow_host_to_enable_focus_mode: z.boolean(),
// 					allow_live_streaming: z.boolean(),
// 					allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 					allow_participants_chat_with: z.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 					]),
// 					allow_participants_to_rename: z.boolean(),
// 					allow_show_zoom_windows: z.boolean(),
// 					allow_users_save_chats: z.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 					]),
// 					annotation: z.boolean(),
// 					anonymous_question_answer: z.boolean(),
// 					attendee_on_hold: z.boolean(),
// 					attention_mode_focus_mode: z.boolean(),
// 					auto_answer: z.boolean(),
// 					auto_saving_chat: z.boolean(),
// 					breakout_room: z.boolean(),
// 					breakout_room_schedule: z.boolean(),
// 					chat: z.boolean(),
// 					meeting_question_answer: z.boolean(),
// 					closed_caption: z.boolean(),
// 					closed_captioning: z
// 						.object({
// 							auto_transcribing: z.boolean(),
// 							enable: z.boolean(),
// 							save_caption: z.boolean(),
// 							third_party_captioning_service: z.boolean(),
// 							view_full_transcript: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					co_host: z.boolean(),
// 					custom_data_center_regions: z.boolean(),
// 					custom_live_streaming_service: z.boolean(),
// 					custom_service_instructions: z.string(),
// 					meeting_data_transit_and_residency_method: z.enum([
// 						"cloud",
// 						"On-Prem",
// 					]),
// 					data_center_regions: z.array(
// 						z.enum([
// 							"AU",
// 							"LA",
// 							"CA",
// 							"CN",
// 							"DE",
// 							"HK",
// 							"IN",
// 							"IE",
// 							"TY",
// 							"MX",
// 							"NL",
// 							"SG",
// 							"US",
// 						])
// 					),
// 					disable_screen_sharing_for_host_meetings: z.boolean(),
// 					disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 					dscp_audio: z.number().int().gte(1).lte(63).default(56),
// 					dscp_marking: z.boolean(),
// 					dscp_video: z.number().int().gte(1).lte(63).default(40),
// 					dscp_dual: z.boolean(),
// 					e2e_encryption: z.boolean(),
// 					entry_exit_chime: z.enum(["host", "all", "none"]),
// 					far_end_camera_control: z.boolean(),
// 					feedback: z.boolean(),
// 					file_transfer: z.boolean(),
// 					group_hd: z.boolean(),
// 					webinar_group_hd: z.boolean(),
// 					join_from_desktop: z.boolean(),
// 					join_from_mobile: z.boolean(),
// 					auto_generated_translation: z
// 						.object({
// 							language_item_pairList: z
// 								.object({
// 									trans_lang_config: z.array(
// 										z
// 											.object({
// 												speak_language: z
// 													.object({
// 														name: z.enum([
// 															"Chinese (Simplified)",
// 															"Dutch",
// 															"English",
// 															"French",
// 															"German",
// 															"Italian",
// 															"Japanese",
// 															"Korean",
// 															"Portuguese",
// 															"Russian",
// 															"Spanish",
// 															"Ukrainian",
// 														]),
// 														code: z.enum([
// 															"zh",
// 															"nl",
// 															"en",
// 															"fr",
// 															"de",
// 															"it",
// 															"ja",
// 															"ko",
// 															"pt",
// 															"ru",
// 															"es",
// 															"uk",
// 														]),
// 													})
// 													.partial()
// 													.passthrough(),
// 												translate_to: z
// 													.object({
// 														all: z.boolean(),
// 														language_config: z.array(
// 															z
// 																.object({
// 																	name: z.literal("English"),
// 																	code: z.literal("en"),
// 																})
// 																.partial()
// 																.passthrough()
// 														),
// 													})
// 													.partial()
// 													.passthrough(),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 									all: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					language_interpretation: z
// 						.object({
// 							custom_languages: z.array(z.string()),
// 							enable_language_interpretation_by_default: z.boolean(),
// 							allow_participants_to_speak_in_listening_channel: z.boolean(),
// 							allow_up_to_25_custom_languages_when_scheduling_meetings:
// 								z.boolean(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					sign_language_interpretation: z
// 						.object({
// 							enable: z.boolean(),
// 							enable_sign_language_interpretation_by_default: z.boolean(),
// 							custom_languages: z.array(z.string()),
// 						})
// 						.partial()
// 						.passthrough(),
// 					live_streaming_facebook: z.boolean(),
// 					live_streaming_youtube: z.boolean(),
// 					manual_captioning: z
// 						.object({
// 							allow_to_type: z.boolean(),
// 							auto_generated_captions: z.boolean(),
// 							full_transcript: z.boolean(),
// 							manual_captions: z.boolean(),
// 							save_captions: z.boolean(),
// 							third_party_captioning_service: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					meeting_polling: z
// 						.object({
// 							advanced_polls: z.boolean(),
// 							allow_alternative_host_to_add_edit: z.boolean(),
// 							require_answers_to_be_anonymous: z.boolean(),
// 							manage_saved_polls_and_quizzes: z.boolean(),
// 							allow_host_to_upload_image: z.boolean(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					meeting_reactions: z.boolean(),
// 					meeting_reactions_emojis: z.enum(["all", "selected"]),
// 					allow_host_panelists_to_use_audible_clap: z.boolean(),
// 					webinar_reactions: z.boolean(),
// 					meeting_survey: z.boolean(),
// 					original_audio: z.boolean(),
// 					p2p_connetion: z.boolean(),
// 					p2p_ports: z.boolean(),
// 					polling: z.boolean(),
// 					ports_range: z.string(),
// 					post_meeting_feedback: z.boolean(),
// 					private_chat: z.boolean(),
// 					record_play_own_voice: z.boolean(),
// 					remote_control: z.boolean(),
// 					non_verbal_feedback: z.boolean(),
// 					remote_support: z.boolean(),
// 					request_permission_to_unmute_participants: z.boolean(),
// 					screen_sharing: z.boolean(),
// 					sending_default_email_invites: z.boolean(),
// 					show_a_join_from_your_browser_link: z.boolean(),
// 					show_meeting_control_toolbar: z.boolean(),
// 					slide_control: z.boolean(),
// 					stereo_audio: z.boolean(),
// 					use_html_format_email: z.boolean(),
// 					virtual_background: z.boolean(),
// 					virtual_background_settings: z
// 						.object({
// 							allow_upload_custom: z.boolean(),
// 							allow_videos: z.boolean(),
// 							enable: z.boolean(),
// 							files: z.array(
// 								z
// 									.object({
// 										id: z.string(),
// 										is_default: z.boolean(),
// 										name: z.string(),
// 										size: z.number().int(),
// 										type: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					watermark: z.boolean(),
// 					webinar_chat: z
// 						.object({
// 							allow_attendees_chat_with: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 							]),
// 							allow_auto_save_local_chat_file: z.boolean(),
// 							allow_panelists_chat_with: z.union([z.literal(1), z.literal(2)]),
// 							allow_panelists_send_direct_message: z.boolean(),
// 							allow_users_save_chats: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 								z.literal(2),
// 							]),
// 							default_attendees_chat_with: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 							]),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_live_streaming: z
// 						.object({
// 							custom_service_instructions: z.string(),
// 							enable: z.boolean(),
// 							live_streaming_reminder: z.boolean(),
// 							live_streaming_service: z.array(
// 								z.enum([
// 									"facebook",
// 									"workplace_by_facebook",
// 									"youtube",
// 									"custom_live_streaming_service",
// 								])
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_polling: z
// 						.object({
// 							advanced_polls: z.boolean(),
// 							allow_alternative_host_to_add_edit: z.boolean(),
// 							require_answers_to_be_anonymous: z.boolean(),
// 							manage_saved_polls_and_quizzes: z.boolean(),
// 							allow_host_to_upload_image: z.boolean(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_question_answer: z.boolean(),
// 					webinar_survey: z.boolean(),
// 					whiteboard: z.boolean(),
// 					who_can_share_screen: z.enum(["host", "all"]),
// 					who_can_share_screen_when_someone_is_sharing: z.enum(["host", "all"]),
// 					participants_share_simultaneously: z.enum(["multiple", "one"]),
// 					workplace_by_facebook: z.boolean(),
// 					transfer_meetings_between_devices: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			integration: z
// 				.object({
// 					box: z.boolean(),
// 					dropbox: z.boolean(),
// 					google_calendar: z.boolean(),
// 					google_drive: z.boolean(),
// 					kubi: z.boolean(),
// 					microsoft_one_drive: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			other_options: z
// 				.object({
// 					allow_auto_active_users: z.boolean(),
// 					allow_users_contact_support_via_chat: z.boolean(),
// 					allow_users_enter_and_share_pronouns: z.boolean(),
// 					blur_snapshot: z.boolean(),
// 					display_meetings_scheduled_for_others: z.boolean(),
// 					meeting_qos_and_mos: z.union([
// 						z.literal(0),
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 					]),
// 					show_one_user_meeting_on_dashboard: z.boolean(),
// 					use_cdn: z.enum(["none", "default", "wangsu"]),
// 					webinar_registration_options: z
// 						.object({
// 							allow_host_to_enable_join_info: z.boolean(),
// 							allow_host_to_enable_social_share_buttons: z.boolean(),
// 							enable_custom_questions: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					email_in_attendee_report_for_meeting: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			profile: z
// 				.object({
// 					recording_storage_location: z
// 						.object({ allowed_values: z.array(z.string()), value: z.string() })
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			recording: z
// 				.object({
// 					account_user_access_recording: z.boolean(),
// 					allow_recovery_deleted_cloud_recordings: z.boolean(),
// 					archive: z
// 						.object({
// 							enable: z.boolean(),
// 							settings: z
// 								.object({
// 									audio_file: z.boolean(),
// 									cc_transcript_file: z.boolean(),
// 									chat_file: z.boolean(),
// 									chat_with_sender_email: z.boolean(),
// 									video_file: z.boolean(),
// 									chat_with_direct_message: z.boolean(),
// 									archive_retention: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 										z.literal(4),
// 										z.literal(5),
// 										z.literal(6),
// 										z.literal(7),
// 										z.literal(8),
// 										z.literal(9),
// 										z.literal(10),
// 										z.literal(11),
// 										z.literal(12),
// 										z.literal(13),
// 										z.literal(14),
// 										z.literal(15),
// 										z.literal(16),
// 										z.literal(17),
// 										z.literal(18),
// 										z.literal(19),
// 										z.literal(20),
// 										z.literal(21),
// 										z.literal(22),
// 										z.literal(23),
// 										z.literal(24),
// 										z.literal(25),
// 										z.literal(26),
// 										z.literal(27),
// 										z.literal(28),
// 										z.literal(29),
// 										z.literal(30),
// 									]),
// 									action_when_archive_failed: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									notification_when_archiving_starts: z.enum([
// 										"participants",
// 										"guest",
// 									]),
// 									play_voice_prompt_when_archiving_starts: z.enum([
// 										"participants",
// 										"guest",
// 										"none",
// 									]),
// 								})
// 								.partial()
// 								.passthrough(),
// 							type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 						})
// 						.partial()
// 						.passthrough(),
// 					auto_delete_cmr: z.boolean(),
// 					auto_delete_cmr_days: z.union([
// 						z.literal(30),
// 						z.literal(60),
// 						z.literal(90),
// 						z.literal(120),
// 					]),
// 					auto_recording: z.enum(["local", "cloud", "none"]),
// 					cloud_recording: z.boolean(),
// 					cloud_recording_download: z.boolean(),
// 					cloud_recording_download_host: z.boolean(),
// 					display_participant_name: z.boolean(),
// 					host_delete_cloud_recording: z.boolean(),
// 					ip_address_access_control: z
// 						.object({ enable: z.boolean(), ip_addresses_or_ranges: z.string() })
// 						.partial()
// 						.passthrough(),
// 					local_recording: z.boolean(),
// 					optimize_recording_for_3rd_party_video_editor: z.boolean(),
// 					prevent_host_access_recording: z.boolean(),
// 					record_audio_file: z.boolean(),
// 					record_audio_file_each_participant: z.boolean(),
// 					record_files_separately: z
// 						.object({
// 							active_speaker: z.boolean(),
// 							gallery_view: z.boolean(),
// 							shared_screen: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					record_gallery_view: z.boolean(),
// 					record_speaker_view: z.boolean(),
// 					recording_audio_transcript: z.boolean(),
// 					recording_disclaimer: z.boolean(),
// 					recording_highlight: z.boolean(),
// 					smart_recording: z
// 						.object({
// 							create_recording_highlights: z.boolean(),
// 							create_smart_chapters: z.boolean(),
// 							create_next_steps: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					recording_password_requirement: z
// 						.object({
// 							have_letter: z.boolean(),
// 							have_number: z.boolean(),
// 							have_special_character: z.boolean(),
// 							length: z.number().int().lte(10),
// 							only_allow_numeric: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					recording_thumbnails: z.boolean(),
// 					required_password_for_existing_cloud_recordings: z.boolean(),
// 					required_password_for_shared_cloud_recordings: z.boolean(),
// 					save_chat_text: z.boolean(),
// 					save_close_caption: z.boolean(),
// 					save_panelist_chat: z.boolean(),
// 					save_poll_results: z.boolean(),
// 					show_timestamp: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			schedule_meeting: z
// 				.object({
// 					audio_type: z
// 						.enum(["both", "telephony", "voip", "thirdParty"])
// 						.default("both"),
// 					enforce_login: z.boolean(),
// 					enforce_login_domains: z.string(),
// 					enforce_login_with_domains: z.boolean(),
// 					force_pmi_jbh_password: z.boolean(),
// 					host_video: z.boolean(),
// 					enable_dedicated_group_chat: z.boolean(),
// 					jbh_time: z.union([
// 						z.literal(0),
// 						z.literal(5),
// 						z.literal(10),
// 						z.literal(15),
// 					]),
// 					join_before_host: z.boolean(),
// 					meeting_password_requirement: z
// 						.object({
// 							consecutive_characters_length: z.union([
// 								z.literal(0),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 								z.literal(8),
// 							]),
// 							have_letter: z.boolean(),
// 							have_number: z.boolean(),
// 							have_special_character: z.boolean(),
// 							have_upper_and_lower_characters: z.boolean(),
// 							length: z.number().int(),
// 							only_allow_numeric: z.boolean(),
// 							weak_enhance_detection: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					not_store_meeting_topic: z.boolean(),
// 					participant_video: z.boolean(),
// 					allow_host_to_disable_participant_video: z.boolean(),
// 					personal_meeting: z.boolean(),
// 					require_password_for_instant_meetings: z.boolean(),
// 					require_password_for_pmi_meetings: z.enum([
// 						"jbh_only",
// 						"all",
// 						"none",
// 					]),
// 					require_password_for_scheduled_meetings: z.boolean(),
// 					require_password_for_scheduling_new_meetings: z.boolean(),
// 					use_pmi_for_instant_meetings: z.boolean(),
// 					use_pmi_for_scheduled_meetings: z.boolean(),
// 					always_display_zoom_meeting_as_topic: z
// 						.object({
// 							enable: z.boolean(),
// 							display_topic_for_scheduled_meetings: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					hide_meeting_description: z
// 						.object({
// 							enable: z.boolean(),
// 							hide_description_for_scheduled_meetings: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					always_display_zoom_webinar_as_topic: z
// 						.object({
// 							enable: z.boolean(),
// 							display_topic_for_scheduled_webinars: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					hide_webinar_description: z
// 						.object({
// 							enable: z.boolean(),
// 							hide_description_for_scheduled_webinars: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					meeting_template: z
// 						.object({
// 							enable: z.boolean(),
// 							action: z.string(),
// 							templates: z.array(
// 								z
// 									.object({ id: z.string(), enable: z.boolean() })
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					continuous_meeting_chat: z
// 						.object({
// 							enable: z.boolean(),
// 							can_add_external_users: z.boolean(),
// 							auto_add_invited_external_users: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			telephony: z
// 				.object({
// 					audio_conference_info: z.string(),
// 					telephony_regions: z
// 						.object({ selection_values: z.string() })
// 						.partial()
// 						.passthrough(),
// 					third_party_audio: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			tsp: z
// 				.object({
// 					call_out: z.boolean(),
// 					call_out_countries: z.array(z.string()),
// 					display_toll_free_numbers: z.boolean(),
// 					show_international_numbers_link: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			zoom_rooms: z
// 				.object({
// 					auto_start_stop_scheduled_meetings: z.boolean(),
// 					cmr_for_instant_meeting: z.boolean(),
// 					force_private_meeting: z.boolean(),
// 					hide_host_information: z.boolean(),
// 					list_meetings_with_calendar: z.boolean(),
// 					start_airplay_manually: z.boolean(),
// 					ultrasonic: z.boolean(),
// 					upcoming_meeting_alert: z.boolean(),
// 					weekly_system_restart: z.boolean(),
// 					zr_post_meeting_feedback: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// 	z.union([
// 		z
// 			.object({
// 				allow_authentication_exception: z.boolean(),
// 				authentication_option: z
// 					.object({
// 						action: z.enum(["update", "delete", "add"]),
// 						default_option: z.boolean(),
// 						domains: z.string(),
// 						id: z.string(),
// 						name: z.string(),
// 						type: z.enum([
// 							"enforce_login",
// 							"enforce_login_with_same_account",
// 							"enforce_login_with_domains",
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				meeting_authentication: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		z
// 			.object({
// 				authentication_option: z
// 					.object({
// 						action: z.enum(["update", "delete", "add"]),
// 						default_option: z.boolean(),
// 						domains: z.string(),
// 						id: z.string(),
// 						name: z.string(),
// 						type: z.enum([
// 							"internally",
// 							"enforce_login",
// 							"enforce_login_with_domains",
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				recording_authentication: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	]),
// 	z
// 		.object({
// 			meeting_security: z
// 				.object({
// 					auto_security: z.boolean(),
// 					block_user_domain: z.boolean(),
// 					block_user_domain_list: z.array(z.string()).max(20),
// 					chat_etiquette_tool: z
// 						.object({
// 							enable: z.boolean(),
// 							operate: z.enum(["create", "update", "delete"]),
// 							policies: z.array(
// 								z
// 									.object({
// 										description: z.string(),
// 										id: z.string(),
// 										is_locked: z.boolean(),
// 										keywords: z.array(z.string()),
// 										name: z.string(),
// 										regular_expression: z.string(),
// 										status: z.enum(["activated", "deactivated"]),
// 										trigger_action: z.union([z.literal(1), z.literal(2)]),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					embed_password_in_join_link: z.boolean(),
// 					encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 					end_to_end_encrypted_meetings: z.boolean(),
// 					meeting_password: z.boolean(),
// 					meeting_password_requirement: z
// 						.object({
// 							consecutive_characters_length: z.union([
// 								z.literal(0),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 								z.literal(8),
// 							]),
// 							have_letter: z.boolean(),
// 							have_number: z.boolean(),
// 							have_special_character: z.boolean(),
// 							have_upper_and_lower_characters: z.boolean(),
// 							length: z.number().int(),
// 							only_allow_numeric: z.boolean(),
// 							weak_enhance_detection: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					only_authenticated_can_join_from_webclient: z.boolean(),
// 					phone_password: z.boolean(),
// 					pmi_password: z.boolean(),
// 					require_password_for_scheduled_meeting: z.boolean(),
// 					require_password_for_scheduled_webinar: z.boolean(),
// 					waiting_room: z.boolean(),
// 					waiting_room_settings: z
// 						.object({
// 							participants_to_place_in_waiting_room: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 								z.literal(2),
// 							]),
// 							users_who_can_admit_participants_from_waiting_room: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 							]),
// 							whitelisted_domains_for_waiting_room: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_password: z.boolean(),
// 					waiting_room_options: z
// 						.object({
// 							enable: z.boolean(),
// 							locked: z.boolean(),
// 							admit_type: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							]),
// 							internal_user_auto_admit: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 								z.literal(5),
// 							]),
// 							admit_domain_allowlist: z.string(),
// 							who_can_admit_participants: z.union([z.literal(0), z.literal(1)]),
// 							sort_order_of_people: z.union([z.literal(0), z.literal(1)]),
// 							more_options: z
// 								.object({
// 									user_invited_by_host_can_bypass_waiting_room: z.boolean(),
// 									move_participants_to_waiting_room_when_host_dropped:
// 										z.boolean(),
// 									allow_participants_to_reply_to_host: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// 	z
// 		.object({
// 			in_meeting: z
// 				.object({
// 					custom_data_center_regions: z.boolean(),
// 					data_center_regions: z.array(
// 						z.enum([
// 							"AU",
// 							"LA",
// 							"CA",
// 							"CN",
// 							"DE",
// 							"HK",
// 							"IN",
// 							"IE",
// 							"TY",
// 							"MX",
// 							"NL",
// 							"SG",
// 							"US",
// 						])
// 					),
// 				})
// 				.partial()
// 				.passthrough(),
// 			in_session: z
// 				.object({
// 					custom_data_center_regions: z.boolean(),
// 					data_center_regions: z.array(
// 						z.enum([
// 							"AU",
// 							"LA",
// 							"CA",
// 							"CN",
// 							"DE",
// 							"HK",
// 							"IN",
// 							"IE",
// 							"TY",
// 							"MX",
// 							"NL",
// 							"SG",
// 							"US",
// 						])
// 					),
// 					p2p_connetion: z.boolean(),
// 					p2p_ports: z.boolean(),
// 					ports_range: z.string(),
// 					dscp_audio: z.number().int().gte(1).lte(63).default(56),
// 					dscp_marking: z.boolean(),
// 					dscp_video: z.number().int().gte(1).lte(63).default(40),
// 					dscp_dual: z.boolean(),
// 					subsession: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			session_security: z
// 				.object({
// 					approved_or_denied_countries_or_regions: z
// 						.object({
// 							approved_list: z.array(z.string()),
// 							denied_list: z.array(z.string()),
// 							enable: z.boolean(),
// 							method: z.enum(["approve", "deny"]),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			recording: z
// 				.object({
// 					record_speaker_view: z.boolean(),
// 					record_gallery_view: z.boolean(),
// 					record_audio_file: z.boolean(),
// 					save_chat_text: z.boolean(),
// 					show_timestamp: z.boolean(),
// 					cloud_recording_download: z.boolean(),
// 					auto_delete_cmr: z.boolean(),
// 					auto_delete_cmr_days: z.union([
// 						z.literal(30),
// 						z.literal(60),
// 						z.literal(90),
// 						z.literal(120),
// 					]),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// ]);
// const accountSettingsRegistrationUpdate_Body = z
// 	.object({
// 		options: z
// 			.object({
// 				host_email_notification: z.boolean(),
// 				close_registration: z.boolean(),
// 				allow_participants_to_join_from_multiple_devices: z.boolean(),
// 				show_social_share_buttons: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		questions: z.array(
// 			z
// 				.object({
// 					field_name: z.enum([
// 						"last_name",
// 						"address",
// 						"city",
// 						"country",
// 						"zip",
// 						"state",
// 						"phone",
// 						"industry",
// 						"org",
// 						"job_title",
// 						"purchasing_time_frame",
// 						"role_in_purchase_process",
// 						"no_of_employees",
// 						"comments",
// 					]),
// 					required: z.boolean(),
// 					selected: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 		approve_type: z.union([z.literal(0), z.literal(1)]),
// 		custom_questions: z.array(
// 			z
// 				.object({
// 					title: z.string(),
// 					type: z.enum([
// 						"short",
// 						"single_dropdown",
// 						"single_radio",
// 						"multiple",
// 					]),
// 					required: z.boolean(),
// 					selected: z.boolean(),
// 					answers: z.array(z.string()),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const Sendappnotifications_Body = z
// 	.object({
// 		notification_id: z.string(),
// 		message: z.object({ text: z.string() }).partial().passthrough(),
// 		user_id: z.string(),
// 	})
// 	.partial()
// 	.passthrough();
// const generateAppDeeplink_Body = z
// 	.object({
// 		type: z.union([z.literal(1), z.literal(2)]),
// 		user_id: z.string(),
// 		action: z.string().max(256),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingRecordingRegistrantCreate_Body = z
// 	.object({
// 		address: z.string().optional(),
// 		city: z.string().optional(),
// 		comments: z.string().optional(),
// 		country: z.string().optional(),
// 		custom_questions: z
// 			.array(
// 				z
// 					.object({ title: z.string(), value: z.string().max(128) })
// 					.partial()
// 					.passthrough()
// 			)
// 			.optional(),
// 		email: z.string().max(128).email(),
// 		first_name: z.string().max(64),
// 		industry: z.string().optional(),
// 		job_title: z.string().optional(),
// 		last_name: z.string().max(64).optional(),
// 		no_of_employees: z
// 			.enum([
// 				"",
// 				"1-20",
// 				"21-50",
// 				"51-100",
// 				"101-250",
// 				"251-500",
// 				"501-1,000",
// 				"1,001-5,000",
// 				"5,001-10,000",
// 				"More than 10,000",
// 			])
// 			.optional(),
// 		org: z.string().optional(),
// 		phone: z.string().optional(),
// 		purchasing_time_frame: z
// 			.enum([
// 				"",
// 				"Within a month",
// 				"1-3 months",
// 				"4-6 months",
// 				"More than 6 months",
// 				"No timeframe",
// 			])
// 			.optional(),
// 		role_in_purchase_process: z
// 			.enum([
// 				"",
// 				"Decision Maker",
// 				"Evaluator/Recommender",
// 				"Influencer",
// 				"Not involved",
// 			])
// 			.optional(),
// 		state: z.string().optional(),
// 		status: z.enum(["approved", "denied", "pending"]).optional(),
// 		zip: z.string().optional(),
// 	})
// 	.passthrough();
// const recordingRegistrantQuestionUpdate_Body = z
// 	.object({
// 		custom_questions: z.array(
// 			z
// 				.object({
// 					answers: z.array(z.string()),
// 					required: z.boolean(),
// 					title: z.string(),
// 					type: z.enum(["short", "single", "multiple"]),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 		questions: z.array(
// 			z
// 				.object({
// 					field_name: z.enum([
// 						"last_name",
// 						"address",
// 						"city",
// 						"country",
// 						"zip",
// 						"state",
// 						"phone",
// 						"industry",
// 						"org",
// 						"job_title",
// 						"purchasing_time_frame",
// 						"role_in_purchase_process",
// 						"no_of_employees",
// 						"comments",
// 					]),
// 					required: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingRecordingRegistrantStatus_Body = z
// 	.object({
// 		action: z.enum(["approve", "deny"]),
// 		registrants: z
// 			.array(z.object({ id: z.string() }).partial().passthrough())
// 			.optional(),
// 	})
// 	.passthrough();
// const recordingSettingsUpdate_Body = z
// 	.object({
// 		approval_type: z.union([z.literal(0), z.literal(1), z.literal(2)]),
// 		authentication_domains: z.string(),
// 		authentication_option: z.string(),
// 		on_demand: z.boolean(),
// 		password: z.string().min(8).max(10),
// 		recording_authentication: z.boolean(),
// 		send_email_to_host: z.boolean(),
// 		share_recording: z.enum(["publicly", "internally", "none"]),
// 		show_social_share_buttons: z.boolean(),
// 		topic: z.string(),
// 		viewer_download: z.boolean(),
// 	})
// 	.partial()
// 	.passthrough();
// const recordingStatusUpdateOne_Body = z
// 	.object({ action: z.literal("recover") })
// 	.partial()
// 	.passthrough();
// const contactGroupCreate_Body = z
// 	.object({
// 		group_name: z.string(),
// 		group_privacy: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 		description: z.string(),
// 		group_members: z.array(
// 			z
// 				.object({ type: z.union([z.literal(1), z.literal(2)]), id: z.string() })
// 				.partial()
// 				.passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const contactGroupUpdate_Body = z
// 	.object({
// 		name: z.string(),
// 		privacy: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 		description: z.string(),
// 	})
// 	.partial()
// 	.passthrough();
// const contactGroupMemberAdd_Body = z
// 	.object({
// 		group_members: z.array(
// 			z
// 				.object({ type: z.union([z.literal(1), z.literal(2)]), id: z.string() })
// 				.partial()
// 				.passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingId = z.union([z.number(), z.string()]);
// const addDevice_Body = z
// 	.object({
// 		device_name: z.string(),
// 		mac_address: z.string(),
// 		serial_number: z.string(),
// 		vendor: z.string(),
// 		model: z.string(),
// 		room_id: z.string().optional(),
// 		user_email: z.string().optional(),
// 		device_type: z.union([z.literal(0), z.literal(1), z.literal(5)]),
// 		tag: z.string().optional(),
// 	})
// 	.passthrough();
// const updateDevice_Body = z
// 	.object({
// 		device_name: z.string(),
// 		tag: z.string().optional(),
// 		room_id: z.string().optional(),
// 		device_type: z.union([z.literal(0), z.literal(1), z.literal(3)]).optional(),
// 	})
// 	.passthrough();
// const changeDeviceAssociation_Body = z
// 	.object({
// 		room_id: z.string().optional(),
// 		app_type: z.enum(["ZR", "ZRC", "ZRP", "ZRW"]).optional().default("ZR"),
// 	})
// 	.passthrough();
// const groupAdminsCreate_Body = z
// 	.object({
// 		admins: z.array(
// 			z.object({ email: z.string(), id: z.string() }).partial().passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const userId = z.union([z.string(), z.string(), z.literal("me")]);
// const groupLockedSettings_Body = z.union([
// 	z
// 		.object({
// 			audio_conferencing: z
// 				.object({ toll_free_and_fee_based_toll_call: z.boolean() })
// 				.partial()
// 				.passthrough(),
// 			email_notification: z
// 				.object({
// 					alternative_host_reminder: z.boolean(),
// 					cancel_meeting_reminder: z.boolean(),
// 					cloud_recording_available_reminder: z.boolean(),
// 					jbh_reminder: z.boolean(),
// 					schedule_for_reminder: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			in_meeting: z
// 				.object({
// 					alert_guest_join: z.boolean(),
// 					allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 					allow_live_streaming: z.boolean(),
// 					allow_show_zoom_windows: z.boolean(),
// 					annotation: z.boolean(),
// 					attendee_on_hold: z.boolean(),
// 					auto_answer: z.boolean(),
// 					auto_generated_captions: z.boolean(),
// 					auto_saving_chat: z.boolean(),
// 					breakout_room: z.boolean(),
// 					chat: z.boolean(),
// 					meeting_question_answer: z.boolean(),
// 					closed_caption: z.boolean(),
// 					co_host: z.boolean(),
// 					custom_data_center_regions: z.boolean(),
// 					disable_screen_sharing_for_host_meetings: z.boolean(),
// 					disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 					e2e_encryption: z.boolean(),
// 					entry_exit_chime: z.string(),
// 					far_end_camera_control: z.boolean(),
// 					feedback: z.boolean(),
// 					file_transfer: z.boolean(),
// 					full_transcript: z.boolean(),
// 					group_hd: z.boolean(),
// 					webinar_group_hd: z.boolean(),
// 					language_interpretation: z.boolean(),
// 					sign_language_interpretation: z.boolean(),
// 					webinar_reactions: z.boolean(),
// 					meeting_survey: z.boolean(),
// 					non_verbal_feedback: z.boolean(),
// 					original_audio: z.boolean(),
// 					polling: z.boolean(),
// 					post_meeting_feedback: z.boolean(),
// 					private_chat: z.boolean(),
// 					remote_control: z.boolean(),
// 					remote_support: z.boolean(),
// 					request_permission_to_unmute: z.boolean(),
// 					save_caption: z.boolean(),
// 					save_captions: z.boolean(),
// 					screen_sharing: z.boolean(),
// 					sending_default_email_invites: z.boolean(),
// 					show_a_join_from_your_browser_link: z.boolean(),
// 					show_browser_join_link: z.boolean(),
// 					show_meeting_control_toolbar: z.boolean(),
// 					slide_control: z.boolean(),
// 					stereo_audio: z.boolean(),
// 					use_html_format_email: z.boolean(),
// 					virtual_background: z.boolean(),
// 					waiting_room: z.boolean(),
// 					webinar_chat: z.boolean(),
// 					webinar_live_streaming: z.boolean(),
// 					webinar_polling: z.boolean(),
// 					webinar_question_answer: z.boolean(),
// 					webinar_survey: z.boolean(),
// 					whiteboard: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			other_options: z
// 				.object({ blur_snapshot: z.boolean() })
// 				.partial()
// 				.passthrough(),
// 			recording: z
// 				.object({
// 					account_user_access_recording: z.boolean(),
// 					auto_delete_cmr: z.boolean(),
// 					auto_recording: z.boolean(),
// 					cloud_recording: z.boolean(),
// 					cloud_recording_download: z.boolean(),
// 					host_delete_cloud_recording: z.boolean(),
// 					ip_address_access_control: z
// 						.object({ enable: z.boolean(), ip_addresses_or_ranges: z.string() })
// 						.partial()
// 						.passthrough(),
// 					local_recording: z.boolean(),
// 					recording_authentication: z.boolean(),
// 					archive: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			schedule_meeting: z
// 				.object({
// 					audio_type: z.boolean(),
// 					embed_password_in_join_link: z.boolean(),
// 					force_pmi_jbh_password: z.boolean(),
// 					host_video: z.boolean(),
// 					join_before_host: z.boolean(),
// 					meeting_authentication: z.boolean(),
// 					mute_upon_entry: z.boolean(),
// 					participant_video: z.boolean(),
// 					personal_meeting: z.boolean(),
// 					pstn_password_protected: z.boolean(),
// 					require_password_for_instant_meetings: z.boolean(),
// 					require_password_for_pmi_meetings: z.boolean(),
// 					require_password_for_scheduling_new_meetings: z.boolean(),
// 					upcoming_meeting_reminder: z.boolean(),
// 					continuous_meeting_chat: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			telephony: z
// 				.object({
// 					telephony_regions: z.boolean(),
// 					third_party_audio: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// 	z
// 		.object({
// 			meeting_security: z
// 				.object({
// 					approved_or_denied_countries_or_regions: z.boolean(),
// 					auto_security: z.boolean(),
// 					block_user_domain: z.boolean(),
// 					embed_password_in_join_link: z.boolean(),
// 					encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 					end_to_end_encrypted_meetings: z.boolean(),
// 					meeting_password: z.boolean(),
// 					only_authenticated_can_join_from_webclient: z.boolean(),
// 					phone_password: z.boolean(),
// 					pmi_password: z.boolean(),
// 					waiting_room: z.boolean(),
// 					webinar_password: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// ]);
// const groupMembersCreate_Body = z
// 	.object({
// 		members: z.array(
// 			z.object({ email: z.string(), id: z.string() }).partial().passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const updateAGroupMember_Body = z
// 	.object({
// 		action: z.enum(["move", "set_primary"]),
// 		target_group_id: z.string().optional(),
// 	})
// 	.passthrough();
// const updateGroupSettings_Body = z.union([
// 	z
// 		.object({
// 			audio_conferencing: z
// 				.object({
// 					toll_free_and_fee_based_toll_call: z
// 						.object({
// 							allow_webinar_attendees_dial: z.boolean(),
// 							enable: z.boolean(),
// 							numbers: z
// 								.array(
// 									z
// 										.object({
// 											code: z.string(),
// 											country_code: z.string(),
// 											country_name: z.string(),
// 											display_number: z.string().max(30),
// 											number: z.string().max(30),
// 										})
// 										.partial()
// 										.passthrough()
// 								)
// 								.max(100),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			email_notification: z
// 				.object({
// 					alternative_host_reminder: z.boolean(),
// 					cancel_meeting_reminder: z.boolean(),
// 					cloud_recording_available_reminder: z.boolean(),
// 					jbh_reminder: z.boolean(),
// 					recording_available_reminder_alternative_hosts: z.boolean(),
// 					recording_available_reminder_schedulers: z.boolean(),
// 					schedule_for_reminder: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			in_meeting: z
// 				.object({
// 					alert_guest_join: z.boolean(),
// 					allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 					allow_live_streaming: z.boolean(),
// 					allow_participants_chat_with: z.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 					]),
// 					allow_show_zoom_windows: z.boolean(),
// 					allow_users_save_chats: z.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 					]),
// 					annotation: z.boolean(),
// 					attendee_on_hold: z.boolean(),
// 					auto_answer: z.boolean(),
// 					auto_saving_chat: z.boolean(),
// 					breakout_room: z.boolean(),
// 					breakout_room_schedule: z.boolean(),
// 					chat: z.boolean(),
// 					meeting_question_answer: z.boolean(),
// 					closed_caption: z.boolean(),
// 					closed_captioning: z
// 						.object({
// 							auto_transcribing: z.boolean(),
// 							enable: z.boolean(),
// 							save_caption: z.boolean(),
// 							third_party_captioning_service: z.boolean(),
// 							view_full_transcript: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					co_host: z.boolean(),
// 					custom_data_center_regions: z.boolean(),
// 					custom_live_streaming_service: z.boolean(),
// 					custom_service_instructions: z.string(),
// 					data_center_regions: z.array(
// 						z.enum([
// 							"AU",
// 							"LA",
// 							"CA",
// 							"CN",
// 							"DE",
// 							"HK",
// 							"IN",
// 							"IE",
// 							"TY",
// 							"MX",
// 							"NL",
// 							"SG",
// 							"US",
// 						])
// 					),
// 					disable_screen_sharing_for_host_meetings: z.boolean(),
// 					disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 					e2e_encryption: z.boolean(),
// 					entry_exit_chime: z.enum(["host", "all", "none"]),
// 					far_end_camera_control: z.boolean(),
// 					feedback: z.boolean(),
// 					file_transfer: z.boolean(),
// 					group_hd: z.boolean(),
// 					webinar_group_hd: z.boolean(),
// 					join_from_desktop: z.boolean(),
// 					join_from_mobile: z.boolean(),
// 					auto_generated_translation: z
// 						.object({
// 							language_item_pairList: z
// 								.object({
// 									trans_lang_config: z.array(
// 										z
// 											.object({
// 												speak_language: z
// 													.object({
// 														name: z.enum([
// 															"Chinese (Simplified)",
// 															"Dutch",
// 															"English",
// 															"French",
// 															"German",
// 															"Italian",
// 															"Japanese",
// 															"Korean",
// 															"Portuguese",
// 															"Russian",
// 															"Spanish",
// 															"Ukrainian",
// 														]),
// 														code: z.enum([
// 															"zh",
// 															"nl",
// 															"en",
// 															"fr",
// 															"de",
// 															"it",
// 															"ja",
// 															"ko",
// 															"pt",
// 															"ru",
// 															"es",
// 															"uk",
// 														]),
// 													})
// 													.partial()
// 													.passthrough(),
// 												translate_to: z
// 													.object({
// 														all: z.boolean(),
// 														language_config: z.array(
// 															z
// 																.object({
// 																	name: z.literal("English"),
// 																	code: z.literal("en"),
// 																})
// 																.partial()
// 																.passthrough()
// 														),
// 													})
// 													.partial()
// 													.passthrough(),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 									all: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					language_interpretation: z
// 						.object({
// 							custom_languages: z.array(z.string()),
// 							enable_language_interpretation_by_default: z.boolean(),
// 							allow_participants_to_speak_in_listening_channel: z.boolean(),
// 							allow_up_to_25_custom_languages_when_scheduling_meetings:
// 								z.boolean(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					sign_language_interpretation: z
// 						.object({
// 							enable: z.boolean(),
// 							enable_sign_language_interpretation_by_default: z.boolean(),
// 							custom_languages: z.array(z.string()),
// 						})
// 						.partial()
// 						.passthrough(),
// 					live_streaming_facebook: z.boolean(),
// 					live_streaming_youtube: z.boolean(),
// 					manual_captioning: z
// 						.object({
// 							allow_to_type: z.boolean(),
// 							auto_generated_captions: z.boolean(),
// 							full_transcript: z.boolean(),
// 							manual_captions: z.boolean(),
// 							save_captions: z.boolean(),
// 							third_party_captioning_service: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					meeting_reactions: z.boolean(),
// 					meeting_reactions_emojis: z.enum(["all", "selected"]),
// 					allow_host_panelists_to_use_audible_clap: z.boolean(),
// 					webinar_reactions: z.boolean(),
// 					meeting_survey: z.boolean(),
// 					non_verbal_feedback: z.boolean(),
// 					only_host_view_device_list: z.boolean(),
// 					original_audio: z.boolean(),
// 					polling: z.boolean(),
// 					post_meeting_feedback: z.boolean(),
// 					private_chat: z.boolean(),
// 					record_play_own_voice: z.boolean(),
// 					remote_control: z.boolean(),
// 					remote_support: z.boolean(),
// 					request_permission_to_unmute: z.boolean(),
// 					screen_sharing: z.boolean(),
// 					sending_default_email_invites: z.boolean(),
// 					show_a_join_from_your_browser_link: z.boolean(),
// 					show_browser_join_link: z.boolean(),
// 					show_device_list: z.boolean(),
// 					show_meeting_control_toolbar: z.boolean(),
// 					slide_control: z.boolean(),
// 					stereo_audio: z.boolean(),
// 					use_html_format_email: z.boolean(),
// 					virtual_background: z.boolean(),
// 					waiting_room: z.boolean(),
// 					webinar_chat: z
// 						.object({
// 							allow_attendees_chat_with: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 							]),
// 							allow_auto_save_local_chat_file: z.boolean(),
// 							allow_panelists_chat_with: z.union([z.literal(1), z.literal(2)]),
// 							allow_panelists_send_direct_message: z.boolean(),
// 							allow_users_save_chats: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 								z.literal(2),
// 							]),
// 							default_attendees_chat_with: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 							]),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_live_streaming: z
// 						.object({
// 							custom_service_instructions: z.string(),
// 							enable: z.boolean(),
// 							live_streaming_reminder: z.boolean(),
// 							live_streaming_service: z.array(
// 								z.enum([
// 									"facebook",
// 									"workplace_by_facebook",
// 									"youtube",
// 									"custom_live_streaming_service",
// 								])
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					meeting_polling: z
// 						.object({
// 							enable: z.boolean(),
// 							advanced_polls: z.boolean(),
// 							manage_saved_polls_and_quizzes: z.boolean(),
// 							require_answers_to_be_anonymous: z.boolean(),
// 							allow_host_to_upload_image: z.boolean(),
// 							allow_alternative_host_to_add_edit: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_polling: z
// 						.object({
// 							advanced_polls: z.boolean(),
// 							allow_alternative_host_to_add_edit: z.boolean(),
// 							manage_saved_polls_and_quizzes: z.boolean(),
// 							require_answers_to_be_anonymous: z.boolean(),
// 							allow_host_to_upload_image: z.boolean(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_question_answer: z.boolean(),
// 					webinar_survey: z.boolean(),
// 					whiteboard: z.boolean(),
// 					who_can_share_screen: z.enum(["host", "all"]),
// 					who_can_share_screen_when_someone_is_sharing: z.enum(["host", "all"]),
// 					participants_share_simultaneously: z.enum(["multiple", "one"]),
// 					workplace_by_facebook: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			other_options: z
// 				.object({
// 					allow_users_contact_support_via_chat: z.boolean(),
// 					blur_snapshot: z.boolean(),
// 					webinar_registration_options: z
// 						.object({
// 							allow_host_to_enable_join_info: z.boolean(),
// 							allow_host_to_enable_social_share_buttons: z.boolean(),
// 							enable_custom_questions: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			profile: z
// 				.object({
// 					recording_storage_location: z
// 						.object({ allowed_values: z.array(z.string()), value: z.string() })
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			recording: z
// 				.object({
// 					account_user_access_recording: z.boolean(),
// 					archive: z
// 						.object({
// 							enable: z.boolean(),
// 							settings: z
// 								.object({
// 									audio_file: z.boolean(),
// 									cc_transcript_file: z.boolean(),
// 									chat_file: z.boolean(),
// 									chat_with_sender_email: z.boolean(),
// 									video_file: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 						})
// 						.partial()
// 						.passthrough(),
// 					auto_recording: z.string(),
// 					cloud_recording: z.boolean(),
// 					cloud_recording_download: z.boolean(),
// 					cloud_recording_download_host: z.boolean(),
// 					host_delete_cloud_recording: z.boolean(),
// 					record_files_separately: z
// 						.object({
// 							active_speaker: z.boolean(),
// 							gallery_view: z.boolean(),
// 							shared_screen: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					display_participant_name: z.boolean(),
// 					recording_thumbnails: z.boolean(),
// 					optimize_recording_for_3rd_party_video_editor: z.boolean(),
// 					recording_highlight: z.boolean(),
// 					save_panelist_chat: z.boolean(),
// 					save_poll_results: z.boolean(),
// 					save_close_caption: z.boolean(),
// 					ip_address_access_control: z
// 						.object({ enable: z.boolean(), ip_addresses_or_ranges: z.string() })
// 						.partial()
// 						.passthrough(),
// 					local_recording: z.boolean(),
// 					prevent_host_access_recording: z.boolean(),
// 					record_audio_file: z.boolean(),
// 					record_gallery_view: z.boolean(),
// 					record_speaker_view: z.boolean(),
// 					recording_audio_transcript: z.boolean(),
// 					smart_recording: z
// 						.object({
// 							create_recording_highlights: z.boolean(),
// 							create_smart_chapters: z.boolean(),
// 							create_next_steps: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					save_chat_text: z.boolean(),
// 					show_timestamp: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			schedule_meeting: z
// 				.object({
// 					audio_type: z.string(),
// 					embed_password_in_join_link: z.boolean(),
// 					force_pmi_jbh_password: z.boolean(),
// 					host_video: z.boolean(),
// 					join_before_host: z.boolean(),
// 					mute_upon_entry: z.boolean(),
// 					participant_video: z.boolean(),
// 					pstn_password_protected: z.boolean(),
// 					require_password_for_all_meetings: z.boolean(),
// 					require_password_for_instant_meetings: z.boolean(),
// 					require_password_for_pmi_meetings: z.enum([
// 						"all",
// 						"jbh_only",
// 						"none",
// 					]),
// 					require_password_for_scheduled_meetings: z.boolean(),
// 					require_password_for_scheduling_new_meetings: z.boolean(),
// 					upcoming_meeting_reminder: z.boolean(),
// 					always_display_zoom_meeting_as_topic: z
// 						.object({
// 							enable: z.boolean(),
// 							display_topic_for_scheduled_meetings: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					always_display_zoom_webinar_as_topic: z
// 						.object({
// 							enable: z.boolean(),
// 							display_topic_for_scheduled_webinars: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					continuous_meeting_chat: z
// 						.object({
// 							enable: z.boolean(),
// 							can_add_external_users: z.boolean(),
// 							auto_add_invited_external_users: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			telephony: z
// 				.object({
// 					audio_conference_info: z.string(),
// 					third_party_audio: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			chat: z
// 				.object({
// 					share_files: z
// 						.object({
// 							enable: z.boolean(),
// 							share_option: z.enum(["anyone", "account", "organization"]),
// 						})
// 						.partial()
// 						.passthrough(),
// 					chat_emojis: z
// 						.object({
// 							enable: z.boolean(),
// 							emojis_option: z.enum(["all", "selected"]),
// 						})
// 						.partial()
// 						.passthrough(),
// 					record_voice_messages: z.boolean(),
// 					record_video_messages: z.boolean(),
// 					screen_capture: z.boolean(),
// 					create_public_channels: z.boolean(),
// 					create_private_channels: z.boolean(),
// 					share_links_in_chat: z.boolean(),
// 					schedule_meetings_in_chat: z.boolean(),
// 					set_retention_period_in_cloud: z
// 						.object({
// 							enable: z.boolean(),
// 							retention_period_of_direct_messages_and_group_conversation:
// 								z.string(),
// 							retention_period_of_channels: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					set_retention_period_in_local: z
// 						.object({
// 							enable: z.boolean(),
// 							retention_period_of_direct_messages_and_group_conversation:
// 								z.string(),
// 							retention_period_of_channels: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					allow_users_to_search_others_options: z.string(),
// 					allow_users_to_add_contacts: z
// 						.object({
// 							enable: z.boolean(),
// 							selected_option: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							]),
// 							user_email_addresses: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					allow_users_to_chat_with_others: z
// 						.object({
// 							enable: z.boolean(),
// 							selected_option: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							]),
// 							user_email_addresses: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					chat_etiquette_tool: z
// 						.object({
// 							enable: z.boolean(),
// 							policies: z.array(
// 								z
// 									.object({
// 										id: z.string(),
// 										status: z.enum(["activated", "deactivated"]),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					send_data_to_third_party_archiving_service: z
// 						.object({ enable: z.boolean() })
// 						.partial()
// 						.passthrough(),
// 					translate_messages: z.boolean(),
// 					search_and_send_animated_gif_images: z
// 						.object({ enable: z.boolean() })
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// 	z.union([
// 		z
// 			.object({
// 				authentication_option: z
// 					.object({
// 						action: z.enum(["update", "show", "hide"]),
// 						default_option: z.boolean(),
// 						domains: z.string(),
// 						id: z.string(),
// 						name: z.string(),
// 						type: z.enum([
// 							"enforce_login",
// 							"enforce_login_with_same_account",
// 							"enforce_login_with_domains",
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				meeting_authentication: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		z
// 			.object({
// 				authentication_option: z
// 					.object({
// 						action: z.enum(["update", "show", "hide"]),
// 						default_option: z.boolean(),
// 						domains: z.string(),
// 						id: z.string(),
// 						name: z.string(),
// 						type: z.enum([
// 							"internally",
// 							"enforce_login",
// 							"enforce_login_with_domains",
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				recording_authentication: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	]),
// 	z
// 		.object({
// 			meeting_security: z
// 				.object({
// 					auto_security: z.boolean(),
// 					block_user_domain: z.boolean(),
// 					block_user_domain_list: z.array(z.string()).max(20),
// 					chat_etiquette_tool: z
// 						.object({
// 							enable: z.boolean(),
// 							policies: z.array(
// 								z
// 									.object({
// 										id: z.string(),
// 										status: z.enum(["activated", "deactivated"]),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					embed_password_in_join_link: z.boolean(),
// 					encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 					end_to_end_encrypted_meetings: z.boolean(),
// 					meeting_password: z.boolean(),
// 					meeting_password_requirement: z
// 						.object({
// 							consecutive_characters_length: z.union([
// 								z.literal(0),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 								z.literal(8),
// 							]),
// 							have_letter: z.boolean(),
// 							have_number: z.boolean(),
// 							have_special_character: z.boolean(),
// 							have_upper_and_lower_characters: z.boolean(),
// 							length: z.number().int(),
// 							only_allow_numeric: z.boolean(),
// 							weak_enhance_detection: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					only_authenticated_can_join_from_webclient: z.boolean(),
// 					phone_password: z.boolean(),
// 					pmi_password: z.boolean(),
// 					require_password_for_scheduled_meeting: z.boolean(),
// 					require_password_for_scheduled_webinar: z.boolean(),
// 					waiting_room: z.boolean(),
// 					waiting_room_settings: z
// 						.object({
// 							participants_to_place_in_waiting_room: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 								z.literal(2),
// 							]),
// 							users_who_can_admit_participants_from_waiting_room: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 							]),
// 							whitelisted_domains_for_waiting_room: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_password: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// ]);
// const deviceCreate_Body = z
// 	.object({
// 		encryption: z.enum(["auto", "yes", "no"]),
// 		ip: z.string(),
// 		name: z.string().max(64),
// 		protocol: z.enum(["H.323", "SIP"]),
// 	})
// 	.passthrough();
// const imGroupCreate_Body = z
// 	.object({
// 		name: z.string().max(128),
// 		search_by_account: z.boolean(),
// 		search_by_domain: z.boolean(),
// 		search_by_ma_account: z.boolean(),
// 		type: z.enum(["normal", "shared", "restricted"]).default("normal"),
// 	})
// 	.partial()
// 	.passthrough();
// const imGroupUpdate_Body = z
// 	.object({
// 		name: z.string().max(128),
// 		search_by_account: z.boolean(),
// 		search_by_domain: z.boolean(),
// 		search_by_ma_account: z.boolean(),
// 		type: z.enum(["normal", "shared", "restricted"]),
// 	})
// 	.partial()
// 	.passthrough();
// const InformationBarriersCreate_Body = z
// 	.object({
// 		assigned_group_id: z.string(),
// 		id: z.string(),
// 		policy_name: z.string(),
// 		settings: z
// 			.object({
// 				complete_phone_calls: z.boolean(),
// 				file_transfer: z.boolean(),
// 				im: z.boolean(),
// 				in_meeting_chat: z.boolean(),
// 				meeting: z.boolean(),
// 				message_via_sms: z.boolean(),
// 				recording: z.boolean(),
// 				screen_share: z.boolean(),
// 			})
// 			.passthrough(),
// 		status: z.union([z.literal(0), z.literal(1)]),
// 		to_group_id: z.string(),
// 		type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
// 	})
// 	.passthrough();
// const inMeetingControl_Body = z
// 	.object({
// 		method: z.string(),
// 		params: z
// 			.object({
// 				contacts: z.array(
// 					z
// 						.object({ email: z.string(), id: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 				invitee_name: z.string(),
// 				phone_number: z.string(),
// 				invite_options: z
// 					.object({
// 						require_greeting: z.boolean().default(true),
// 						require_pressing_one: z.boolean().default(true),
// 					})
// 					.partial()
// 					.passthrough(),
// 				call_type: z.string(),
// 				device_ip: z.string(),
// 				h323_headers: z
// 					.object({
// 						from_display_name: z.string().max(64),
// 						to_display_name: z.string().max(64),
// 					})
// 					.partial()
// 					.passthrough(),
// 				sip_headers: z
// 					.object({
// 						from_display_name: z.string().max(64),
// 						to_display_name: z.string().max(64),
// 						from_uri: z.string().max(256),
// 						additional_headers: z.array(
// 							z
// 								.object({ key: z.string().max(32), value: z.string().max(256) })
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingUpdate_Body = z
// 	.object({
// 		agenda: z.string().max(2000),
// 		duration: z.number().int(),
// 		password: z.string().max(10),
// 		pre_schedule: z.boolean(),
// 		schedule_for: z.string(),
// 		recurrence: z
// 			.object({
// 				end_date_time: z.string().datetime({ offset: true }).optional(),
// 				end_times: z.number().int().lte(60).optional().default(1),
// 				monthly_day: z.number().int().optional().default(1),
// 				monthly_week: z
// 					.union([
// 						z.literal(-1),
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 					])
// 					.optional(),
// 				monthly_week_day: z
// 					.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 						z.literal(5),
// 						z.literal(6),
// 						z.literal(7),
// 					])
// 					.optional(),
// 				repeat_interval: z.number().int().optional(),
// 				type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				weekly_days: z
// 					.enum(["1", "2", "3", "4", "5", "6", "7"])
// 					.optional()
// 					.default("1"),
// 			})
// 			.passthrough(),
// 		settings: z
// 			.object({
// 				allow_multiple_devices: z.boolean(),
// 				alternative_hosts: z.string(),
// 				alternative_hosts_email_notification: z.boolean().default(true),
// 				alternative_host_update_polls: z.boolean(),
// 				approval_type: z
// 					.union([z.literal(0), z.literal(1), z.literal(2)])
// 					.default(2),
// 				approved_or_denied_countries_or_regions: z
// 					.object({
// 						approved_list: z.array(z.string()),
// 						denied_list: z.array(z.string()),
// 						enable: z.boolean(),
// 						method: z.enum(["approve", "deny"]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				audio: z
// 					.enum(["both", "telephony", "voip", "thirdParty"])
// 					.default("both"),
// 				audio_conference_info: z.string().max(2048),
// 				authentication_domains: z.string(),
// 				authentication_exception: z.array(
// 					z
// 						.object({
// 							email: z.string().email(),
// 							name: z.string(),
// 							join_url: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				authentication_name: z.string(),
// 				authentication_option: z.string(),
// 				auto_recording: z.enum(["local", "cloud", "none"]).default("none"),
// 				breakout_room: z
// 					.object({
// 						enable: z.boolean(),
// 						rooms: z.array(
// 							z
// 								.object({ name: z.string(), participants: z.array(z.string()) })
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				calendar_type: z.union([z.literal(1), z.literal(2)]),
// 				close_registration: z.boolean(),
// 				cn_meeting: z.boolean(),
// 				contact_email: z.string(),
// 				contact_name: z.string(),
// 				custom_keys: z
// 					.array(
// 						z
// 							.object({ key: z.string().max(64), value: z.string().max(256) })
// 							.partial()
// 							.passthrough()
// 					)
// 					.max(10),
// 				email_notification: z.boolean().default(true),
// 				encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 				enforce_login: z.boolean(),
// 				enforce_login_domains: z.string(),
// 				focus_mode: z.boolean(),
// 				global_dial_in_countries: z.array(z.string()),
// 				global_dial_in_numbers: z.array(
// 					z
// 						.object({
// 							city: z.string(),
// 							country: z.string(),
// 							country_name: z.string(),
// 							number: z.string(),
// 							type: z.enum(["toll", "tollfree"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				host_video: z.boolean(),
// 				in_meeting: z.boolean(),
// 				jbh_time: z.union([z.literal(0), z.literal(5), z.literal(10)]),
// 				join_before_host: z.boolean(),
// 				language_interpretation: z
// 					.object({
// 						enable: z.boolean(),
// 						interpreters: z.array(
// 							z
// 								.object({ email: z.string().email(), languages: z.string() })
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				sign_language_interpretation: z
// 					.object({
// 						enable: z.boolean(),
// 						interpreters: z.array(
// 							z
// 								.object({
// 									email: z.string().email(),
// 									sign_language: z.string(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				meeting_authentication: z.boolean(),
// 				meeting_invitees: z.array(
// 					z.object({ email: z.string().email() }).partial().passthrough()
// 				),
// 				mute_upon_entry: z.boolean(),
// 				participant_video: z.boolean(),
// 				private_meeting: z.boolean(),
// 				registrants_confirmation_email: z.boolean(),
// 				registrants_email_notification: z.boolean(),
// 				registration_type: z
// 					.union([z.literal(1), z.literal(2), z.literal(3)])
// 					.default(1),
// 				show_share_button: z.boolean(),
// 				use_pmi: z.boolean(),
// 				waiting_room: z.boolean(),
// 				watermark: z.boolean(),
// 				host_save_video_order: z.boolean(),
// 				internal_meeting: z.boolean(),
// 				continuous_meeting_chat: z
// 					.object({
// 						enable: z.boolean(),
// 						auto_add_invited_external_users: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				participant_focused_meeting: z.boolean(),
// 				resources: z.array(
// 					z
// 						.object({
// 							resource_type: z.literal("whiteboard"),
// 							resource_id: z.string(),
// 							permission_level: z
// 								.enum(["editor", "commenter", "viewer"])
// 								.default("editor"),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		start_time: z.string().datetime({ offset: true }),
// 		template_id: z.string(),
// 		timezone: z.string(),
// 		topic: z.string().max(200),
// 		tracking_fields: z.array(
// 			z.object({ field: z.string(), value: z.string() }).partial().passthrough()
// 		),
// 		type: z
// 			.union([z.literal(1), z.literal(2), z.literal(3), z.literal(8)])
// 			.default(2),
// 	})
// 	.partial()
// 	.passthrough();
// const createBatchPolls_Body = z
// 	.object({
// 		polls: z
// 			.array(
// 				z
// 					.object({
// 						anonymous: z.boolean(),
// 						poll_type: z
// 							.union([z.literal(1), z.literal(2), z.literal(3)])
// 							.default(1),
// 						questions: z.array(
// 							z
// 								.object({
// 									answer_max_character: z.number().int(),
// 									answer_min_character: z.number().int().gte(1),
// 									answer_required: z.boolean(),
// 									answers: z.array(z.string()).min(2),
// 									case_sensitive: z.boolean(),
// 									name: z.string().max(255),
// 									prompts: z.array(
// 										z
// 											.object({
// 												prompt_question: z.string(),
// 												prompt_right_answers: z.array(z.string()),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 									rating_max_label: z.string(),
// 									rating_max_value: z.number().int().lte(10),
// 									rating_min_label: z.string(),
// 									rating_min_value: z.number().int().gte(1),
// 									right_answers: z.array(z.string()).min(1),
// 									show_as_dropdown: z.boolean(),
// 									type: z.enum([
// 										"single",
// 										"multiple",
// 										"matching",
// 										"rank_order",
// 										"short_answer",
// 										"long_answer",
// 										"fill_in_the_blank",
// 										"rating_scale",
// 									]),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						title: z.string().max(64),
// 					})
// 					.partial()
// 					.passthrough()
// 			)
// 			.min(1)
// 			.max(25),
// 	})
// 	.partial()
// 	.passthrough();
// const addBatchRegistrants_Body = z
// 	.object({
// 		auto_approve: z.boolean(),
// 		registrants_confirmation_email: z.boolean(),
// 		registrants: z.array(
// 			z
// 				.object({
// 					email: z.string().email(),
// 					first_name: z.string(),
// 					last_name: z.string().optional(),
// 				})
// 				.passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingInviteLinksCreate_Body = z
// 	.object({
// 		attendees: z
// 			.array(z.object({ name: z.string().max(64) }).passthrough())
// 			.min(1)
// 			.max(500),
// 		ttl: z.number().int().gte(0).lte(7776000).default(7200),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingLiveStreamUpdate_Body = z
// 	.object({
// 		page_url: z.string().max(1024).url(),
// 		stream_key: z.string().max(512),
// 		stream_url: z.string().max(1024),
// 		resolution: z.string().optional(),
// 	})
// 	.passthrough();
// const meetingLiveStreamStatusUpdate_Body = z
// 	.object({
// 		action: z.enum(["start", "stop"]),
// 		settings: z
// 			.object({
// 				active_speaker_name: z.boolean(),
// 				display_name: z.string().min(1).max(50),
// 			})
// 			.partial()
// 			.passthrough(),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingPollCreate_Body = z
// 	.object({
// 		anonymous: z.boolean(),
// 		poll_type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 		questions: z.array(
// 			z
// 				.object({
// 					answer_max_character: z.number().int(),
// 					answer_min_character: z.number().int().gte(1),
// 					answer_required: z.boolean(),
// 					answers: z.array(z.string()).min(2),
// 					case_sensitive: z.boolean(),
// 					name: z.string().max(255),
// 					prompts: z.array(
// 						z
// 							.object({
// 								prompt_question: z.string(),
// 								prompt_right_answers: z.array(z.string()),
// 							})
// 							.partial()
// 							.passthrough()
// 					),
// 					rating_max_label: z.string(),
// 					rating_max_value: z.number().int().lte(10),
// 					rating_min_label: z.string(),
// 					rating_min_value: z.number().int().gte(0),
// 					right_answers: z.array(z.string()).min(1),
// 					show_as_dropdown: z.boolean(),
// 					type: z.enum([
// 						"single",
// 						"multiple",
// 						"matching",
// 						"rank_order",
// 						"short_answer",
// 						"long_answer",
// 						"fill_in_the_blank",
// 						"rating_scale",
// 					]),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 		title: z.string().max(64),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingRegistrantCreate_Body = z
// 	.object({
// 		first_name: z.string().max(64),
// 		last_name: z.string().max(64).optional(),
// 		email: z.string().max(128).email(),
// 		address: z.string().optional(),
// 		city: z.string().optional(),
// 		state: z.string().optional(),
// 		zip: z.string().optional(),
// 		country: z.string().optional(),
// 		phone: z.string().optional(),
// 		comments: z.string().optional(),
// 		custom_questions: z
// 			.array(
// 				z
// 					.object({ title: z.string(), value: z.string().max(128) })
// 					.partial()
// 					.passthrough()
// 			)
// 			.optional(),
// 		industry: z.string().optional(),
// 		job_title: z.string().optional(),
// 		no_of_employees: z
// 			.enum([
// 				"",
// 				"1-20",
// 				"21-50",
// 				"51-100",
// 				"101-500",
// 				"500-1,000",
// 				"1,001-5,000",
// 				"5,001-10,000",
// 				"More than 10,000",
// 			])
// 			.optional(),
// 		org: z.string().optional(),
// 		purchasing_time_frame: z
// 			.enum([
// 				"",
// 				"Within a month",
// 				"1-3 months",
// 				"4-6 months",
// 				"More than 6 months",
// 				"No timeframe",
// 			])
// 			.optional(),
// 		role_in_purchase_process: z
// 			.enum([
// 				"",
// 				"Decision Maker",
// 				"Evaluator/Recommender",
// 				"Influencer",
// 				"Not involved",
// 			])
// 			.optional(),
// 		language: z
// 			.enum([
// 				"en-US",
// 				"de-DE",
// 				"es-ES",
// 				"fr-FR",
// 				"jp-JP",
// 				"pt-PT",
// 				"ru-RU",
// 				"zh-CN",
// 				"zh-TW",
// 				"ko-KO",
// 				"it-IT",
// 				"vi-VN",
// 				"pl-PL",
// 				"Tr-TR",
// 			])
// 			.optional(),
// 		auto_approve: z.boolean().optional(),
// 	})
// 	.passthrough();
// const meetingRegistrantQuestionUpdate_Body = z
// 	.object({
// 		custom_questions: z.array(
// 			z
// 				.object({
// 					answers: z.array(z.string()),
// 					required: z.boolean(),
// 					title: z.string(),
// 					type: z.enum(["short", "single"]),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 		questions: z.array(
// 			z
// 				.object({
// 					field_name: z.enum([
// 						"last_name",
// 						"address",
// 						"city",
// 						"country",
// 						"zip",
// 						"state",
// 						"phone",
// 						"industry",
// 						"org",
// 						"job_title",
// 						"purchasing_time_frame",
// 						"role_in_purchase_process",
// 						"no_of_employees",
// 						"comments",
// 					]),
// 					required: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingRegistrantStatus_Body = z
// 	.object({
// 		action: z.enum(["approve", "cancel", "deny"]),
// 		registrants: z
// 			.array(
// 				z.object({ email: z.string(), id: z.string() }).partial().passthrough()
// 			)
// 			.optional(),
// 	})
// 	.passthrough();
// const meetingStatus_Body = z
// 	.object({ action: z.enum(["end", "recover"]) })
// 	.partial()
// 	.passthrough();
// const meetingSurveyUpdate_Body = z
// 	.object({
// 		custom_survey: z
// 			.object({
// 				title: z.string().max(64),
// 				anonymous: z.boolean(),
// 				numbered_questions: z.boolean(),
// 				show_question_type: z.boolean(),
// 				feedback: z.string().max(320),
// 				questions: z
// 					.array(
// 						z
// 							.object({
// 								name: z.string(),
// 								type: z.enum([
// 									"single",
// 									"multiple",
// 									"matching",
// 									"rank_order",
// 									"short_answer",
// 									"long_answer",
// 									"fill_in_the_blank",
// 									"rating_scale",
// 								]),
// 								answer_required: z.boolean(),
// 								show_as_dropdown: z.boolean(),
// 								answers: z.array(z.string()).min(2),
// 								prompts: z
// 									.array(
// 										z
// 											.object({ prompt_question: z.string().max(200) })
// 											.partial()
// 											.passthrough()
// 									)
// 									.min(2)
// 									.max(10),
// 								answer_min_character: z.number().int().gte(1),
// 								answer_max_character: z.number().int(),
// 								rating_min_value: z.number().int().gte(0),
// 								rating_max_value: z.number().int().lte(10),
// 								rating_min_label: z.string().max(50),
// 								rating_max_label: z.string().max(50),
// 							})
// 							.partial()
// 							.passthrough()
// 					)
// 					.min(1)
// 					.max(100),
// 			})
// 			.partial()
// 			.passthrough(),
// 		show_in_the_browser: z.boolean().default(true),
// 		third_party_survey: z.string().max(64),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingTemplateCreate_Body = z
// 	.object({
// 		meeting_id: z.number().int(),
// 		name: z.string(),
// 		save_recurrence: z.boolean(),
// 		overwrite: z.boolean(),
// 	})
// 	.partial()
// 	.passthrough();
// const meetingCreate_Body = z
// 	.object({
// 		agenda: z.string().max(2000),
// 		default_password: z.boolean(),
// 		duration: z.number().int(),
// 		password: z.string().max(10),
// 		pre_schedule: z.boolean(),
// 		recurrence: z
// 			.object({
// 				end_date_time: z.string().datetime({ offset: true }).optional(),
// 				end_times: z.number().int().lte(60).optional().default(1),
// 				monthly_day: z.number().int().optional().default(1),
// 				monthly_week: z
// 					.union([
// 						z.literal(-1),
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 					])
// 					.optional(),
// 				monthly_week_day: z
// 					.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 						z.literal(5),
// 						z.literal(6),
// 						z.literal(7),
// 					])
// 					.optional(),
// 				repeat_interval: z.number().int().optional(),
// 				type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				weekly_days: z
// 					.enum(["1", "2", "3", "4", "5", "6", "7"])
// 					.optional()
// 					.default("1"),
// 			})
// 			.passthrough(),
// 		schedule_for: z.string(),
// 		settings: z
// 			.object({
// 				additional_data_center_regions: z.array(z.string()),
// 				allow_multiple_devices: z.boolean(),
// 				alternative_hosts: z.string(),
// 				alternative_hosts_email_notification: z.boolean().default(true),
// 				approval_type: z
// 					.union([z.literal(0), z.literal(1), z.literal(2)])
// 					.default(2),
// 				approved_or_denied_countries_or_regions: z
// 					.object({
// 						approved_list: z.array(z.string()),
// 						denied_list: z.array(z.string()),
// 						enable: z.boolean(),
// 						method: z.enum(["approve", "deny"]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				audio: z
// 					.enum(["both", "telephony", "voip", "thirdParty"])
// 					.default("both"),
// 				audio_conference_info: z.string().max(2048),
// 				authentication_domains: z.string(),
// 				authentication_exception: z.array(
// 					z
// 						.object({ email: z.string().email(), name: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 				authentication_option: z.string(),
// 				auto_recording: z.enum(["local", "cloud", "none"]).default("none"),
// 				breakout_room: z
// 					.object({
// 						enable: z.boolean(),
// 						rooms: z.array(
// 							z
// 								.object({ name: z.string(), participants: z.array(z.string()) })
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				calendar_type: z.union([z.literal(1), z.literal(2)]),
// 				close_registration: z.boolean(),
// 				cn_meeting: z.boolean(),
// 				contact_email: z.string(),
// 				contact_name: z.string(),
// 				email_notification: z.boolean().default(true),
// 				encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 				focus_mode: z.boolean(),
// 				global_dial_in_countries: z.array(z.string()),
// 				host_video: z.boolean(),
// 				in_meeting: z.boolean(),
// 				jbh_time: z.union([z.literal(0), z.literal(5), z.literal(10)]),
// 				join_before_host: z.boolean(),
// 				language_interpretation: z
// 					.object({
// 						enable: z.boolean(),
// 						interpreters: z.array(
// 							z
// 								.object({ email: z.string().email(), languages: z.string() })
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				sign_language_interpretation: z
// 					.object({
// 						enable: z.boolean(),
// 						interpreters: z.array(
// 							z
// 								.object({
// 									email: z.string().email(),
// 									sign_language: z.string(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				meeting_authentication: z.boolean(),
// 				meeting_invitees: z.array(
// 					z.object({ email: z.string().email() }).partial().passthrough()
// 				),
// 				mute_upon_entry: z.boolean(),
// 				participant_video: z.boolean(),
// 				private_meeting: z.boolean(),
// 				registrants_confirmation_email: z.boolean(),
// 				registrants_email_notification: z.boolean(),
// 				registration_type: z
// 					.union([z.literal(1), z.literal(2), z.literal(3)])
// 					.default(1),
// 				show_share_button: z.boolean(),
// 				use_pmi: z.boolean(),
// 				waiting_room: z.boolean(),
// 				watermark: z.boolean(),
// 				host_save_video_order: z.boolean(),
// 				alternative_host_update_polls: z.boolean(),
// 				internal_meeting: z.boolean(),
// 				continuous_meeting_chat: z
// 					.object({
// 						enable: z.boolean(),
// 						auto_add_invited_external_users: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				participant_focused_meeting: z.boolean(),
// 				push_change_to_calendar: z.boolean(),
// 				resources: z.array(
// 					z
// 						.object({
// 							resource_type: z.literal("whiteboard"),
// 							resource_id: z.string(),
// 							permission_level: z
// 								.enum(["editor", "commenter", "viewer"])
// 								.default("editor"),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		start_time: z.string().datetime({ offset: true }),
// 		template_id: z.string(),
// 		timezone: z.string(),
// 		topic: z.string().max(200),
// 		tracking_fields: z.array(
// 			z
// 				.object({ field: z.string(), value: z.string().optional() })
// 				.passthrough()
// 		),
// 		type: z
// 			.union([z.literal(1), z.literal(2), z.literal(3), z.literal(8)])
// 			.default(2),
// 	})
// 	.partial()
// 	.passthrough();
// const createRole_Body = z
// 	.object({
// 		description: z.string(),
// 		name: z.string(),
// 		type: z.string(),
// 		privileges: z.array(z.string()),
// 	})
// 	.partial()
// 	.passthrough();
// const updateRole_Body = z
// 	.object({
// 		description: z.string(),
// 		name: z.string(),
// 		privileges: z.array(z.string()),
// 		sub_account_privileges: z
// 			.object({ second_level: z.number().int() })
// 			.partial()
// 			.passthrough(),
// 	})
// 	.partial()
// 	.passthrough();
// const AddRoleMembers_Body = z
// 	.object({
// 		members: z
// 			.array(
// 				z
// 					.object({ email: z.string().email(), id: z.string() })
// 					.partial()
// 					.passthrough()
// 			)
// 			.max(30),
// 	})
// 	.partial()
// 	.passthrough();
// const createSIPPhone_Body = z
// 	.object({
// 		authorization_name: z.string().max(64),
// 		domain: z.string().max(64),
// 		password: z.string(),
// 		proxy_server: z.string(),
// 		proxy_server2: z.string().optional(),
// 		proxy_server3: z.string().optional(),
// 		register_server: z.string(),
// 		register_server2: z.string().optional(),
// 		register_server3: z.string().optional(),
// 		registration_expire_time: z
// 			.number()
// 			.int()
// 			.gte(1)
// 			.lte(127)
// 			.optional()
// 			.default(60),
// 		transport_protocol: z.enum(["UDP", "TCP", "TLS", "AUTO"]).optional(),
// 		transport_protocol2: z.enum(["UDP", "TCP", "TLS", "AUTO"]).optional(),
// 		transport_protocol3: z.enum(["UDP", "TCP", "TLS", "AUTO"]).optional(),
// 		user_email: z.string().max(64).email(),
// 		user_name: z.string().max(64),
// 		voice_mail: z.string().max(255),
// 	})
// 	.passthrough();
// const updateSIPPhone_Body = z
// 	.object({
// 		authorization_name: z.string().max(64),
// 		domain: z.string().max(64),
// 		password: z.string(),
// 		proxy_server: z.string(),
// 		proxy_server2: z.string(),
// 		proxy_server3: z.string(),
// 		register_server: z.string(),
// 		register_server2: z.string(),
// 		register_server3: z.string(),
// 		registration_expire_time: z
// 			.number()
// 			.int()
// 			.gte(1)
// 			.lte(127)
// 			.optional()
// 			.default(60),
// 		transport_protocol: z.enum(["UDP", "TCP", "TLS", "AUTO"]).optional(),
// 		transport_protocol2: z.enum(["UDP", "TCP", "TLS", "AUTO"]).optional(),
// 		transport_protocol3: z.enum(["UDP", "TCP", "TLS", "AUTO"]).optional(),
// 		user_name: z.string().max(64),
// 		voice_mail: z.string().max(255),
// 	})
// 	.passthrough();
// const tspUpdate_Body = z
// 	.object({
// 		dial_in_number_unrestricted: z.boolean(),
// 		enable: z.boolean(),
// 		master_account_setting_extended: z.boolean(),
// 		modify_credential_forbidden: z.boolean(),
// 		tsp_bridge: z.enum(["US_TSP_TB", "EU_TSP_TB"]),
// 		tsp_enabled: z.boolean(),
// 		tsp_provider: z.string(),
// 	})
// 	.partial()
// 	.passthrough();
// const userTSPCreate_Body = z
// 	.object({
// 		conference_code: z.string().min(1).max(16),
// 		dial_in_numbers: z
// 			.array(
// 				z
// 					.object({
// 						code: z.string().max(6),
// 						country_label: z.string().max(10),
// 						number: z.string().min(1).max(16),
// 						type: z.enum(["toll", "tollfree", "media_link"]),
// 					})
// 					.partial()
// 					.passthrough()
// 			)
// 			.optional(),
// 		leader_pin: z.string().min(1).max(16),
// 		tsp_bridge: z.enum(["US_TSP_TB", "EU_TSP_TB"]).optional(),
// 	})
// 	.passthrough();
// const trackingfieldCreate_Body = z
// 	.object({
// 		field: z.string(),
// 		recommended_values: z.array(z.string()),
// 		required: z.boolean(),
// 		visible: z.boolean(),
// 	})
// 	.partial()
// 	.passthrough();
// const userCreate_Body = z
// 	.object({
// 		action: z.enum(["create", "autoCreate", "custCreate", "ssoCreate"]),
// 		user_info: z
// 			.object({
// 				email: z.string().max(128),
// 				first_name: z.string().max(64).optional(),
// 				last_name: z.string().max(64).optional(),
// 				display_name: z.string().max(128).optional(),
// 				password: z.string().min(8).max(32).optional(),
// 				type: z.union([z.literal(1), z.literal(2), z.literal(99)]),
// 				feature: z
// 					.object({
// 						zoom_phone: z.boolean(),
// 						zoom_one_type: z.union([
// 							z.literal(16),
// 							z.literal(32),
// 							z.literal(64),
// 							z.literal(128),
// 							z.literal(33554432),
// 							z.literal(134217728),
// 							z.literal(268435456),
// 							z.literal(536870912),
// 							z.literal(1073741824),
// 							z.literal(4294967296),
// 							z.literal(8589934592),
// 							z.literal(17179869184),
// 							z.literal(34359738368),
// 							z.literal(68719476736),
// 							z.literal(137438953472),
// 							z.literal(274877906944),
// 							z.literal(549755813888),
// 							z.literal(1099511627776),
// 							z.literal(2199023255552),
// 							z.literal(18014398509481984),
// 							z.literal(72057594037927940),
// 							z.literal(144115188075855870),
// 							z.literal(576460752303423500),
// 						]),
// 					})
// 					.partial()
// 					.passthrough()
// 					.optional(),
// 				plan_united_type: z
// 					.enum([
// 						"1",
// 						"2",
// 						"4",
// 						"8",
// 						"16",
// 						"32",
// 						"64",
// 						"128",
// 						"256",
// 						"512",
// 						"1024",
// 						"2048",
// 						"4096",
// 						"8192",
// 						"16384",
// 						"32768",
// 						"65536",
// 						"131072",
// 					])
// 					.optional(),
// 			})
// 			.passthrough()
// 			.optional(),
// 	})
// 	.passthrough();
// const bulkUpdateFeature_Body = z
// 	.object({
// 		feature_type: z.enum([
// 			"user_type",
// 			"concurrent_meeting",
// 			"large_meeting",
// 			"webinar",
// 			"zoom_events",
// 			"zoom_whiteboard",
// 			"plan_united_type",
// 			"zoom_one_type",
// 			"zoom_iq_for_sales",
// 			"zoom_revenue_accelerator",
// 		]),
// 		feature_value: z.string(),
// 		users: z.array(
// 			z.object({ id: z.string(), email: z.string() }).partial().passthrough()
// 		),
// 	})
// 	.passthrough();
// const userUpdate_Body = z
// 	.object({
// 		cms_user_id: z.string(),
// 		company: z.string().max(255),
// 		custom_attributes: z.array(
// 			z
// 				.object({ key: z.string(), name: z.string(), value: z.string() })
// 				.partial()
// 				.passthrough()
// 		),
// 		dept: z.string(),
// 		first_name: z.string().max(64),
// 		group_id: z.string(),
// 		host_key: z.string().min(6).max(10),
// 		job_title: z.string().max(128),
// 		language: z.string(),
// 		last_name: z.string().max(64),
// 		location: z.string().max(256),
// 		manager: z.string().email(),
// 		phone_country: z.string(),
// 		phone_number: z.string(),
// 		phone_numbers: z.array(
// 			z
// 				.object({
// 					code: z.string(),
// 					country: z.string(),
// 					label: z.enum(["Mobile", "Office", "Home", "Fax"]),
// 					number: z.string(),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 		pmi: z.number().int(),
// 		pronouns: z.string(),
// 		pronouns_option: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 		timezone: z.string(),
// 		type: z.union([z.literal(1), z.literal(2), z.literal(99)]),
// 		use_pmi: z.boolean(),
// 		vanity_name: z.string(),
// 		display_name: z.string().max(128),
// 		zoom_one_type: z.union([
// 			z.literal(0),
// 			z.literal(16),
// 			z.literal(32),
// 			z.literal(64),
// 			z.literal(128),
// 			z.literal(33554432),
// 		]),
// 		plan_united_type: z.enum([
// 			"1",
// 			"2",
// 			"4",
// 			"8",
// 			"16",
// 			"32",
// 			"64",
// 			"128",
// 			"256",
// 			"512",
// 			"1024",
// 			"2048",
// 			"4096",
// 			"8192",
// 			"16384",
// 			"32768",
// 			"65536",
// 			"131072",
// 			"none",
// 		]),
// 		feature: z.object({ zoom_phone: z.boolean() }).partial().passthrough(),
// 		about_me: z.string().max(150),
// 		linkedin_url: z.string(),
// 	})
// 	.partial()
// 	.passthrough();
// const userAssistantCreate_Body = z
// 	.object({
// 		assistants: z.array(
// 			z.object({ email: z.string(), id: z.string() }).partial().passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const updatePresenceStatus_Body = z
// 	.object({
// 		duration: z.number().int().gte(20).lte(1440),
// 		status: z.enum([
// 			"Do_No_Disturb",
// 			"Away",
// 			"Available",
// 			"In_Calendar_Event",
// 			"Presenting",
// 			"In_A_Zoom_Meeting",
// 			"On_A_Call",
// 			"Out_of_Office",
// 			"Busy",
// 		]),
// 	})
// 	.partial()
// 	.passthrough();
// const userSettingsUpdate_Body = z.union([
// 	z
// 		.object({
// 			email_notification: z
// 				.object({
// 					alternative_host_reminder: z.boolean(),
// 					cancel_meeting_reminder: z.boolean(),
// 					cloud_recording_available_reminder: z.boolean(),
// 					jbh_reminder: z.boolean(),
// 					recording_available_reminder_alternative_hosts: z.boolean(),
// 					recording_available_reminder_schedulers: z.boolean(),
// 					schedule_for_reminder: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			feature: z
// 				.object({
// 					concurrent_meeting: z.enum(["Basic", "Plus", "None"]),
// 					large_meeting: z.boolean(),
// 					large_meeting_capacity: z.number().int(),
// 					meeting_capacity: z.number().int(),
// 					webinar: z.boolean(),
// 					webinar_capacity: z.union([
// 						z.literal(100),
// 						z.literal(500),
// 						z.literal(501),
// 						z.literal(1000),
// 						z.literal(1001),
// 						z.literal(3000),
// 						z.literal(5000),
// 						z.literal(10000),
// 					]),
// 					zoom_events: z.boolean(),
// 					zoom_events_capacity: z.union([
// 						z.literal(500),
// 						z.literal(1000),
// 						z.literal(3000),
// 						z.literal(5000),
// 						z.literal(10000),
// 						z.literal(20000),
// 						z.literal(30000),
// 						z.literal(50000),
// 					]),
// 					zoom_events_unlimited: z.boolean(),
// 					zoom_events_unlimited_capacities: z.array(
// 						z.union([
// 							z.literal(100),
// 							z.literal(500),
// 							z.literal(1000),
// 							z.literal(3000),
// 							z.literal(5000),
// 							z.literal(10000),
// 							z.literal(20000),
// 							z.literal(30000),
// 							z.literal(50000),
// 						])
// 					),
// 					zoom_sessions_unlimited: z.boolean(),
// 					zoom_sessions_unlimited_capacities: z.array(
// 						z.union([
// 							z.literal(100),
// 							z.literal(500),
// 							z.literal(1000),
// 							z.literal(3000),
// 							z.literal(5000),
// 							z.literal(10000),
// 							z.literal(20000),
// 							z.literal(30000),
// 							z.literal(50000),
// 						])
// 					),
// 					zoom_events_pay_per_attendee: z.boolean(),
// 					zoom_sessions_pay_per_attendee: z.boolean(),
// 					zoom_phone: z.boolean(),
// 					zoom_iq_for_sales: z.boolean(),
// 					zoom_whiteboard: z.boolean(),
// 					zoom_whiteboard_plus: z.boolean(),
// 					zoom_translated_captions: z.boolean(),
// 					zoom_customer_managed_key: z.boolean(),
// 					zoom_huddles: z.boolean(),
// 					zoom_quality_management: z.boolean(),
// 					zoom_workforce_management: z.boolean(),
// 					zoom_scheduler: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			in_meeting: z
// 				.object({
// 					allow_host_to_enable_focus_mode: z.boolean(),
// 					allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 					allow_live_streaming: z.boolean(),
// 					post_meeting_feedback: z.boolean(),
// 					whiteboard: z.boolean(),
// 					allow_participants_chat_with: z.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 					]),
// 					allow_users_save_chats: z.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 					]),
// 					annotation: z.boolean(),
// 					attendee_on_hold: z.boolean(),
// 					attention_mode_focus_mode: z.boolean(),
// 					auto_saving_chat: z.boolean(),
// 					breakout_room: z.boolean(),
// 					breakout_room_schedule: z.boolean(),
// 					chat: z.boolean(),
// 					meeting_question_answer: z.boolean(),
// 					closed_caption: z.boolean(),
// 					closed_captioning: z
// 						.object({
// 							auto_transcribing: z.boolean(),
// 							enable: z.boolean(),
// 							save_caption: z.boolean(),
// 							third_party_captioning_service: z.boolean(),
// 							view_full_transcript: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					co_host: z.boolean(),
// 					custom_data_center_regions: z.boolean(),
// 					custom_live_streaming_service: z.boolean(),
// 					custom_service_instructions: z.string(),
// 					data_center_regions: z.array(
// 						z.enum([
// 							"AU",
// 							"LA",
// 							"CA",
// 							"CN",
// 							"DE",
// 							"HK",
// 							"IN",
// 							"IE",
// 							"TY",
// 							"MX",
// 							"NL",
// 							"SG",
// 							"US",
// 						])
// 					),
// 					disable_screen_sharing_for_host_meetings: z.boolean(),
// 					disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 					e2e_encryption: z.boolean(),
// 					entry_exit_chime: z.enum(["host", "all", "none"]).default("all"),
// 					far_end_camera_control: z.boolean(),
// 					feedback: z.boolean(),
// 					file_transfer: z.boolean(),
// 					group_hd: z.boolean(),
// 					webinar_group_hd: z.boolean(),
// 					join_from_desktop: z.boolean(),
// 					join_from_mobile: z.boolean(),
// 					language_interpretation: z
// 						.object({
// 							custom_languages: z.array(z.string()),
// 							enable_language_interpretation_by_default: z.boolean(),
// 							allow_participants_to_speak_in_listening_channel: z.boolean(),
// 							allow_up_to_25_custom_languages_when_scheduling_meetings:
// 								z.boolean(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					sign_language_interpretation: z
// 						.object({
// 							enable: z.boolean(),
// 							enable_sign_language_interpretation_by_default: z.boolean(),
// 							languages: z.array(
// 								z.enum([
// 									"American",
// 									"Chinese",
// 									"French",
// 									"German",
// 									"Japanese",
// 									"Russian",
// 									"Brazilian",
// 									"Spanish",
// 									"Mexican",
// 									"British",
// 								])
// 							),
// 							custom_languages: z.array(z.string()),
// 						})
// 						.partial()
// 						.passthrough(),
// 					live_streaming_facebook: z.boolean(),
// 					live_streaming_youtube: z.boolean(),
// 					manual_captioning: z
// 						.object({
// 							allow_to_type: z.boolean(),
// 							auto_generated_captions: z.boolean(),
// 							full_transcript: z.boolean(),
// 							manual_captions: z.boolean(),
// 							save_captions: z.boolean(),
// 							third_party_captioning_service: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					meeting_reactions: z.boolean(),
// 					meeting_reactions_emojis: z.enum(["all", "selected"]),
// 					allow_host_panelists_to_use_audible_clap: z.boolean(),
// 					webinar_reactions: z.boolean(),
// 					meeting_survey: z.boolean(),
// 					non_verbal_feedback: z.boolean(),
// 					polling: z.boolean(),
// 					private_chat: z.boolean(),
// 					record_play_voice: z.boolean(),
// 					remote_control: z.boolean(),
// 					remote_support: z.boolean(),
// 					request_permission_to_unmute_participants: z.boolean(),
// 					screen_sharing: z.boolean(),
// 					share_dual_camera: z.boolean(),
// 					show_a_join_from_your_browser_link: z.boolean(),
// 					show_meeting_control_toolbar: z.boolean(),
// 					slide_control: z.boolean(),
// 					virtual_background: z.boolean(),
// 					virtual_background_settings: z
// 						.object({
// 							allow_upload_custom: z.boolean(),
// 							allow_videos: z.boolean(),
// 							enable: z.boolean(),
// 							files: z.array(
// 								z
// 									.object({
// 										id: z.string(),
// 										is_default: z.boolean(),
// 										name: z.string(),
// 										size: z.number().int(),
// 										type: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					waiting_room: z.boolean(),
// 					webinar_chat: z
// 						.object({
// 							allow_attendees_chat_with: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 							]),
// 							allow_auto_save_local_chat_file: z.boolean(),
// 							allow_panelists_chat_with: z.union([z.literal(1), z.literal(2)]),
// 							allow_panelists_send_direct_message: z.boolean(),
// 							allow_users_save_chats: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 								z.literal(2),
// 							]),
// 							default_attendees_chat_with: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 							]),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_live_streaming: z
// 						.object({
// 							custom_service_instructions: z.string(),
// 							enable: z.boolean(),
// 							live_streaming_reminder: z.boolean(),
// 							live_streaming_service: z.array(
// 								z.enum([
// 									"facebook",
// 									"workplace_by_facebook",
// 									"youtube",
// 									"custom_live_streaming_service",
// 								])
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					meeting_polling: z
// 						.object({
// 							advanced_polls: z.boolean(),
// 							allow_alternative_host_to_add_edit: z.boolean(),
// 							require_answers_to_be_anonymous: z.boolean(),
// 							allow_host_to_upload_image: z.boolean(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_polling: z
// 						.object({
// 							advanced_polls: z.boolean(),
// 							allow_alternative_host_to_add_edit: z.boolean(),
// 							require_answers_to_be_anonymous: z.boolean(),
// 							allow_host_to_upload_image: z.boolean(),
// 							enable: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_survey: z.boolean(),
// 					who_can_share_screen: z.enum(["host", "all"]),
// 					who_can_share_screen_when_someone_is_sharing: z.enum(["host", "all"]),
// 					participants_share_simultaneously: z.enum(["multiple", "one"]),
// 					workplace_by_facebook: z.boolean(),
// 					auto_answer: z.boolean(),
// 					allow_show_zoom_windows: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			profile: z
// 				.object({
// 					recording_storage_location: z
// 						.object({ allowed_values: z.array(z.string()), value: z.string() })
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			recording: z
// 				.object({
// 					ask_host_to_confirm_disclaimer: z.boolean(),
// 					ask_participants_to_consent_disclaimer: z.boolean(),
// 					auto_delete_cmr: z.boolean(),
// 					auto_delete_cmr_days: z.union([
// 						z.literal(30),
// 						z.literal(60),
// 						z.literal(90),
// 						z.literal(120),
// 					]),
// 					record_files_separately: z
// 						.object({
// 							active_speaker: z.boolean(),
// 							gallery_view: z.boolean(),
// 							shared_screen: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					display_participant_name: z.boolean(),
// 					recording_thumbnails: z.boolean(),
// 					optimize_recording_for_3rd_party_video_editor: z.boolean(),
// 					recording_highlight: z.boolean(),
// 					save_panelist_chat: z.boolean(),
// 					save_poll_results: z.boolean(),
// 					save_close_caption: z.boolean(),
// 					auto_recording: z.enum(["local", "cloud", "none"]).default("local"),
// 					cloud_recording: z.boolean(),
// 					host_pause_stop_recording: z.boolean(),
// 					ip_address_access_control: z
// 						.object({ enable: z.boolean(), ip_addresses_or_ranges: z.string() })
// 						.partial()
// 						.passthrough(),
// 					local_recording: z.boolean(),
// 					record_audio_file: z.boolean(),
// 					record_gallery_view: z.boolean(),
// 					record_speaker_view: z.boolean(),
// 					recording_audio_transcript: z.boolean(),
// 					recording_disclaimer: z.boolean(),
// 					smart_recording: z
// 						.object({
// 							create_recording_highlights: z.boolean(),
// 							create_smart_chapters: z.boolean(),
// 							create_next_steps: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					recording_password_requirement: z
// 						.object({
// 							have_letter: z.boolean(),
// 							have_number: z.boolean(),
// 							have_special_character: z.boolean(),
// 							length: z.number().int().lte(10),
// 							only_allow_numeric: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					save_chat_text: z.boolean(),
// 					show_timestamp: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			schedule_meeting: z
// 				.object({
// 					audio_type: z
// 						.enum(["both", "telephony", "voip", "thirdParty"])
// 						.default("voip"),
// 					default_password_for_scheduled_meetings: z.string(),
// 					embed_password_in_join_link: z.boolean(),
// 					force_pmi_jbh_password: z.boolean(),
// 					host_video: z.boolean(),
// 					join_before_host: z.boolean(),
// 					meeting_password_requirement: z
// 						.object({
// 							consecutive_characters_length: z.union([
// 								z.literal(0),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 								z.literal(8),
// 							]),
// 							have_letter: z.boolean(),
// 							have_number: z.boolean(),
// 							have_special_character: z.boolean(),
// 							have_upper_and_lower_characters: z.boolean(),
// 							length: z.number().int(),
// 							only_allow_numeric: z.boolean(),
// 							weak_enhance_detection: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					participants_video: z.boolean(),
// 					personal_meeting: z.boolean(),
// 					pmi_password: z.string(),
// 					pstn_password_protected: z.boolean(),
// 					require_password_for_instant_meetings: z.boolean(),
// 					require_password_for_pmi_meetings: z.enum([
// 						"jbh_only",
// 						"all",
// 						"none",
// 					]),
// 					require_password_for_scheduled_meetings: z.boolean(),
// 					require_password_for_scheduling_new_meetings: z.boolean(),
// 					use_pmi_for_instant_meetings: z.boolean(),
// 					use_pmi_for_scheduled_meetings: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			telephony: z
// 				.object({
// 					audio_conference_info: z.string().max(2048),
// 					show_international_numbers_link: z.boolean(),
// 					telephony_regions: z
// 						.object({ selection_values: z.string() })
// 						.partial()
// 						.passthrough(),
// 					third_party_audio: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			tsp: z
// 				.object({
// 					call_out: z.boolean(),
// 					call_out_countries: z.array(z.unknown()),
// 					show_international_numbers_link: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// 	z.union([
// 		z
// 			.object({
// 				authentication_option: z
// 					.object({
// 						action: z.enum(["update", "show", "hide"]),
// 						default_option: z.boolean(),
// 						domains: z.string(),
// 						id: z.string(),
// 						name: z.string(),
// 						type: z.enum([
// 							"enforce_login",
// 							"enforce_login_with_same_account",
// 							"enforce_login_with_domains",
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				meeting_authentication: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		z
// 			.object({
// 				authentication_option: z
// 					.object({
// 						action: z.enum(["update", "show", "hide"]),
// 						default_option: z.boolean(),
// 						domains: z.string(),
// 						id: z.string(),
// 						name: z.string(),
// 						type: z.enum([
// 							"internally",
// 							"enforce_login",
// 							"enforce_login_with_domains",
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				recording_authentication: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	]),
// 	z
// 		.object({
// 			meeting_security: z
// 				.object({
// 					auto_security: z.boolean(),
// 					block_user_domain: z.boolean(),
// 					block_user_domain_list: z.array(z.string()).max(20),
// 					embed_password_in_join_link: z.boolean(),
// 					encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 					end_to_end_encrypted_meetings: z.boolean(),
// 					meeting_password: z.boolean(),
// 					meeting_password_requirement: z
// 						.object({
// 							consecutive_characters_length: z.union([
// 								z.literal(0),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 								z.literal(8),
// 							]),
// 							have_letter: z.boolean(),
// 							have_number: z.boolean(),
// 							have_special_character: z.boolean(),
// 							have_upper_and_lower_characters: z.boolean(),
// 							length: z.number().int(),
// 							only_allow_numeric: z.boolean(),
// 							weak_enhance_detection: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					only_authenticated_can_join_from_webclient: z.boolean(),
// 					phone_password: z.boolean(),
// 					pmi_password: z.boolean(),
// 					require_password_for_scheduled_meeting: z.boolean(),
// 					require_password_for_scheduled_webinar: z.boolean(),
// 					waiting_room: z.boolean(),
// 					waiting_room_settings: z
// 						.object({
// 							participants_to_place_in_waiting_room: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 								z.literal(2),
// 							]),
// 							users_who_can_admit_participants_from_waiting_room: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 							]),
// 							whitelisted_domains_for_waiting_room: z.string(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					webinar_password: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		})
// 		.partial()
// 		.passthrough(),
// ]);
// const userStatus_Body = z
// 	.object({
// 		action: z.enum(["activate", "deactivate", "clock_in", "clock_out"]),
// 	})
// 	.passthrough();
// const webinarTemplateCreate_Body = z
// 	.object({
// 		webinar_id: z.number().int(),
// 		name: z.string(),
// 		save_recurrence: z.boolean(),
// 		overwrite: z.boolean(),
// 	})
// 	.partial()
// 	.passthrough();
// const webinarCreate_Body = z
// 	.object({
// 		agenda: z.string(),
// 		duration: z.number().int(),
// 		password: z.string(),
// 		recurrence: z
// 			.object({
// 				end_date_time: z.string().datetime({ offset: true }).optional(),
// 				end_times: z.number().int().lte(60).optional().default(1),
// 				monthly_day: z.number().int().optional(),
// 				monthly_week: z
// 					.union([
// 						z.literal(-1),
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 					])
// 					.optional(),
// 				monthly_week_day: z
// 					.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 						z.literal(5),
// 						z.literal(6),
// 						z.literal(7),
// 					])
// 					.optional(),
// 				repeat_interval: z.number().int().optional(),
// 				type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				weekly_days: z.string().optional(),
// 			})
// 			.passthrough(),
// 		schedule_for: z.string(),
// 		settings: z
// 			.object({
// 				allow_multiple_devices: z.boolean(),
// 				alternative_hosts: z.string(),
// 				alternative_host_update_polls: z.boolean(),
// 				approval_type: z
// 					.union([z.literal(0), z.literal(1), z.literal(2)])
// 					.default(2),
// 				attendees_and_panelists_reminder_email_notification: z
// 					.object({
// 						enable: z.boolean(),
// 						type: z.union([
// 							z.literal(0),
// 							z.literal(1),
// 							z.literal(2),
// 							z.literal(3),
// 							z.literal(4),
// 							z.literal(5),
// 							z.literal(6),
// 							z.literal(7),
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				audio: z
// 					.enum(["both", "telephony", "voip", "thirdParty"])
// 					.default("both"),
// 				audio_conference_info: z.string().max(2048),
// 				authentication_domains: z.string(),
// 				authentication_option: z.string(),
// 				auto_recording: z.enum(["local", "cloud", "none"]).default("none"),
// 				close_registration: z.boolean(),
// 				contact_email: z.string(),
// 				contact_name: z.string(),
// 				email_language: z.string(),
// 				enforce_login: z.boolean(),
// 				enforce_login_domains: z.string(),
// 				follow_up_absentees_email_notification: z
// 					.object({
// 						enable: z.boolean(),
// 						type: z.union([
// 							z.literal(0),
// 							z.literal(1),
// 							z.literal(2),
// 							z.literal(3),
// 							z.literal(4),
// 							z.literal(5),
// 							z.literal(6),
// 							z.literal(7),
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				follow_up_attendees_email_notification: z
// 					.object({
// 						enable: z.boolean(),
// 						type: z.union([
// 							z.literal(0),
// 							z.literal(1),
// 							z.literal(2),
// 							z.literal(3),
// 							z.literal(4),
// 							z.literal(5),
// 							z.literal(6),
// 							z.literal(7),
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				global_dial_in_countries: z.array(z.string()),
// 				hd_video: z.boolean(),
// 				hd_video_for_attendees: z.boolean(),
// 				host_video: z.boolean(),
// 				language_interpretation: z
// 					.object({
// 						enable: z.boolean(),
// 						interpreters: z.array(
// 							z
// 								.object({ email: z.string().email(), languages: z.string() })
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				sign_language_interpretation: z
// 					.object({
// 						enable: z.boolean(),
// 						interpreters: z.array(
// 							z
// 								.object({
// 									email: z.string().email(),
// 									sign_language: z.string(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				panelist_authentication: z.boolean(),
// 				meeting_authentication: z.boolean(),
// 				add_watermark: z.boolean(),
// 				add_audio_watermark: z.boolean(),
// 				on_demand: z.boolean(),
// 				panelists_invitation_email_notification: z.boolean(),
// 				panelists_video: z.boolean(),
// 				post_webinar_survey: z.boolean(),
// 				practice_session: z.boolean(),
// 				question_and_answer: z
// 					.object({
// 						allow_submit_questions: z.boolean(),
// 						allow_anonymous_questions: z.boolean(),
// 						answer_questions: z.enum(["only", "all"]),
// 						attendees_can_comment: z.boolean(),
// 						attendees_can_upvote: z.boolean(),
// 						allow_auto_reply: z.boolean(),
// 						auto_reply_text: z.string(),
// 						enable: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				registrants_email_notification: z.boolean(),
// 				registrants_restrict_number: z.number().int().gte(0).lte(20000),
// 				registration_type: z
// 					.union([z.literal(1), z.literal(2), z.literal(3)])
// 					.default(1),
// 				send_1080p_video_to_attendees: z.boolean(),
// 				show_share_button: z.boolean(),
// 				survey_url: z.string(),
// 				enable_session_branding: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		start_time: z.string().datetime({ offset: true }),
// 		template_id: z.string(),
// 		timezone: z.string(),
// 		topic: z.string(),
// 		tracking_fields: z.array(
// 			z
// 				.object({ field: z.string(), value: z.string().optional() })
// 				.passthrough()
// 		),
// 		type: z.union([z.literal(5), z.literal(6), z.literal(9)]).default(5),
// 		is_simulive: z.boolean(),
// 		record_file_id: z.string(),
// 	})
// 	.partial()
// 	.passthrough();
// const webinarUpdate_Body = z
// 	.object({
// 		agenda: z.string(),
// 		duration: z.number().int(),
// 		password: z.string().max(10),
// 		schedule_for: z.string(),
// 		recurrence: z
// 			.object({
// 				end_date_time: z.string().datetime({ offset: true }).optional(),
// 				end_times: z.number().int().lte(60).optional().default(1),
// 				monthly_day: z.number().int().optional().default(1),
// 				monthly_week: z
// 					.union([
// 						z.literal(-1),
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 					])
// 					.optional(),
// 				monthly_week_day: z
// 					.union([
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 						z.literal(5),
// 						z.literal(6),
// 						z.literal(7),
// 					])
// 					.optional(),
// 				repeat_interval: z.number().int().optional(),
// 				type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				weekly_days: z
// 					.enum(["1", "2", "3", "4", "5", "6", "7"])
// 					.optional()
// 					.default("1"),
// 			})
// 			.passthrough(),
// 		settings: z
// 			.object({
// 				allow_multiple_devices: z.boolean(),
// 				alternative_hosts: z.string(),
// 				alternative_host_update_polls: z.boolean(),
// 				approval_type: z
// 					.union([z.literal(0), z.literal(1), z.literal(2)])
// 					.default(2),
// 				attendees_and_panelists_reminder_email_notification: z
// 					.object({
// 						enable: z.boolean(),
// 						type: z.union([
// 							z.literal(0),
// 							z.literal(1),
// 							z.literal(2),
// 							z.literal(3),
// 							z.literal(4),
// 							z.literal(5),
// 							z.literal(6),
// 							z.literal(7),
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				audio: z
// 					.enum(["both", "telephony", "voip", "thirdParty"])
// 					.default("both"),
// 				audio_conference_info: z.string().max(2048),
// 				authentication_domains: z.string(),
// 				authentication_name: z.string(),
// 				authentication_option: z.string(),
// 				auto_recording: z.enum(["local", "cloud", "none"]).default("none"),
// 				close_registration: z.boolean(),
// 				contact_email: z.string(),
// 				contact_name: z.string(),
// 				email_language: z.string(),
// 				enforce_login: z.boolean(),
// 				enforce_login_domains: z.string(),
// 				follow_up_absentees_email_notification: z
// 					.object({
// 						enable: z.boolean(),
// 						type: z.union([
// 							z.literal(0),
// 							z.literal(1),
// 							z.literal(2),
// 							z.literal(3),
// 							z.literal(4),
// 							z.literal(5),
// 							z.literal(6),
// 							z.literal(7),
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				follow_up_attendees_email_notification: z
// 					.object({
// 						enable: z.boolean(),
// 						type: z.union([
// 							z.literal(0),
// 							z.literal(1),
// 							z.literal(2),
// 							z.literal(3),
// 							z.literal(4),
// 							z.literal(5),
// 							z.literal(6),
// 							z.literal(7),
// 						]),
// 					})
// 					.partial()
// 					.passthrough(),
// 				global_dial_in_countries: z.array(z.string()),
// 				hd_video: z.boolean(),
// 				hd_video_for_attendees: z.boolean(),
// 				host_video: z.boolean(),
// 				language_interpretation: z
// 					.object({
// 						enable: z.boolean(),
// 						interpreters: z.array(
// 							z
// 								.object({ email: z.string().email(), languages: z.string() })
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				sign_language_interpretation: z
// 					.object({
// 						enable: z.boolean(),
// 						interpreters: z.array(
// 							z
// 								.object({
// 									email: z.string().email(),
// 									sign_language: z.string(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				panelist_authentication: z.boolean(),
// 				meeting_authentication: z.boolean(),
// 				add_watermark: z.boolean(),
// 				add_audio_watermark: z.boolean(),
// 				notify_registrants: z.boolean(),
// 				on_demand: z.boolean(),
// 				panelists_invitation_email_notification: z.boolean(),
// 				panelists_video: z.boolean(),
// 				post_webinar_survey: z.boolean(),
// 				practice_session: z.boolean(),
// 				question_and_answer: z
// 					.object({
// 						allow_submit_questions: z.boolean(),
// 						allow_anonymous_questions: z.boolean(),
// 						answer_questions: z.enum(["only", "all"]),
// 						attendees_can_comment: z.boolean(),
// 						attendees_can_upvote: z.boolean(),
// 						allow_auto_reply: z.boolean(),
// 						auto_reply_text: z.string(),
// 						enable: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				registrants_confirmation_email: z.boolean(),
// 				registrants_email_notification: z.boolean(),
// 				registrants_restrict_number: z.number().int().gte(0).lte(20000),
// 				registration_type: z
// 					.union([z.literal(1), z.literal(2), z.literal(3)])
// 					.default(1),
// 				send_1080p_video_to_attendees: z.boolean(),
// 				show_share_button: z.boolean(),
// 				survey_url: z.string(),
// 				enable_session_branding: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		start_time: z.string().datetime({ offset: true }),
// 		timezone: z.string(),
// 		topic: z.string(),
// 		tracking_fields: z.array(
// 			z.object({ field: z.string(), value: z.string() }).partial().passthrough()
// 		),
// 		type: z.union([z.literal(5), z.literal(6), z.literal(9)]).default(5),
// 		is_simulive: z.boolean(),
// 		record_file_id: z.string(),
// 	})
// 	.partial()
// 	.passthrough();
// const addBatchWebinarRegistrants_Body = z
// 	.object({
// 		auto_approve: z.boolean(),
// 		registrants: z.array(
// 			z
// 				.object({
// 					email: z.string().email(),
// 					first_name: z.string(),
// 					last_name: z.string().optional(),
// 				})
// 				.passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const createWebinarBrandingNameTag_Body = z
// 	.object({
// 		name: z.string(),
// 		text_color: z.string(),
// 		accent_color: z.string(),
// 		background_color: z.string(),
// 		is_default: z.boolean().optional(),
// 		set_default_for_all_panelists: z.boolean().optional().default(true),
// 	})
// 	.passthrough();
// const updateWebinarBrandingNameTag_Body = z
// 	.object({
// 		name: z.string(),
// 		text_color: z.string(),
// 		accent_color: z.string(),
// 		background_color: z.string(),
// 		is_default: z.boolean(),
// 		set_default_for_all_panelists: z.boolean().default(true),
// 	})
// 	.partial()
// 	.passthrough();
// const uploadWebinarBrandingVB_Body = z
// 	.object({
// 		file: z.instanceof(File),
// 		default: z.boolean().optional(),
// 		set_default_for_all_panelists: z.boolean().optional().default(true),
// 	})
// 	.passthrough();
// const webinarPanelistCreate_Body = z
// 	.object({
// 		panelists: z.array(
// 			z
// 				.object({
// 					email: z.string().email(),
// 					name: z.string(),
// 					virtual_background_id: z.string(),
// 					name_tag_id: z.string(),
// 					name_tag_name: z.string(),
// 					name_tag_pronouns: z.string(),
// 					name_tag_description: z.string(),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const webinarRegistrantCreate_Body = z
// 	.object({
// 		first_name: z.string().max(64),
// 		last_name: z.string().max(64).optional(),
// 		email: z.string().max(128).email(),
// 		address: z.string().optional(),
// 		city: z.string().optional(),
// 		state: z.string().optional(),
// 		zip: z.string().optional(),
// 		country: z.string().optional(),
// 		phone: z.string().optional(),
// 		comments: z.string().optional(),
// 		custom_questions: z
// 			.array(
// 				z
// 					.object({ title: z.string(), value: z.string().max(128) })
// 					.partial()
// 					.passthrough()
// 			)
// 			.optional(),
// 		industry: z.string().optional(),
// 		job_title: z.string().optional(),
// 		no_of_employees: z
// 			.enum([
// 				"",
// 				"1-20",
// 				"21-50",
// 				"51-100",
// 				"101-500",
// 				"500-1,000",
// 				"1,001-5,000",
// 				"5,001-10,000",
// 				"More than 10,000",
// 			])
// 			.optional(),
// 		org: z.string().optional(),
// 		purchasing_time_frame: z
// 			.enum([
// 				"",
// 				"Within a month",
// 				"1-3 months",
// 				"4-6 months",
// 				"More than 6 months",
// 				"No timeframe",
// 			])
// 			.optional(),
// 		role_in_purchase_process: z
// 			.enum([
// 				"",
// 				"Decision Maker",
// 				"Evaluator/Recommender",
// 				"Influencer",
// 				"Not involved",
// 			])
// 			.optional(),
// 		language: z
// 			.enum([
// 				"en-US",
// 				"de-DE",
// 				"es-ES",
// 				"fr-FR",
// 				"jp-JP",
// 				"pt-PT",
// 				"ru-RU",
// 				"zh-CN",
// 				"zh-TW",
// 				"ko-KO",
// 				"it-IT",
// 				"vi-VN",
// 				"pl-PL",
// 				"Tr-TR",
// 			])
// 			.optional(),
// 		source_id: z.string().optional(),
// 	})
// 	.passthrough();
// const webinarRegistrantQuestionUpdate_Body = z
// 	.object({
// 		custom_questions: z.array(
// 			z
// 				.object({
// 					answers: z.array(z.string()),
// 					required: z.boolean(),
// 					title: z.string(),
// 					type: z.enum([
// 						"short",
// 						"single_radio",
// 						"single_dropdown",
// 						"multiple",
// 					]),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 		questions: z.array(
// 			z
// 				.object({
// 					field_name: z.enum([
// 						"last_name",
// 						"address",
// 						"city",
// 						"country",
// 						"zip",
// 						"state",
// 						"phone",
// 						"industry",
// 						"org",
// 						"job_title",
// 						"purchasing_time_frame",
// 						"role_in_purchase_process",
// 						"no_of_employees",
// 						"comments",
// 					]),
// 					required: z.boolean(),
// 				})
// 				.partial()
// 				.passthrough()
// 		),
// 	})
// 	.partial()
// 	.passthrough();
// const webinarRegistrantStatus_Body = z
// 	.object({
// 		action: z.enum(["approve", "deny", "cancel"]),
// 		registrants: z
// 			.array(
// 				z
// 					.object({ email: z.string().email(), id: z.string() })
// 					.partial()
// 					.passthrough()
// 			)
// 			.optional(),
// 	})
// 	.passthrough();
// const webinarStatus_Body = z
// 	.object({ action: z.literal("end") })
// 	.partial()
// 	.passthrough();
// const webinarSurveyUpdate_Body = z
// 	.object({
// 		custom_survey: z
// 			.object({
// 				title: z.string().max(64),
// 				anonymous: z.boolean(),
// 				numbered_questions: z.boolean(),
// 				show_question_type: z.boolean(),
// 				feedback: z.string().max(320),
// 				questions: z
// 					.array(
// 						z
// 							.object({
// 								name: z.string(),
// 								type: z.enum([
// 									"single",
// 									"multiple",
// 									"matching",
// 									"rank_order",
// 									"short_answer",
// 									"long_answer",
// 									"fill_in_the_blank",
// 									"rating_scale",
// 								]),
// 								answer_required: z.boolean(),
// 								show_as_dropdown: z.boolean(),
// 								answers: z.array(z.string()).min(2),
// 								prompts: z
// 									.array(
// 										z
// 											.object({ prompt_question: z.string().max(200) })
// 											.partial()
// 											.passthrough()
// 									)
// 									.min(2)
// 									.max(10),
// 								answer_min_character: z.number().int().gte(1),
// 								answer_max_character: z.number().int(),
// 								rating_min_value: z.number().int().gte(0),
// 								rating_max_value: z.number().int().lte(10),
// 								rating_min_label: z.string().max(50),
// 								rating_max_label: z.string().max(50),
// 							})
// 							.partial()
// 							.passthrough()
// 					)
// 					.min(1)
// 					.max(100),
// 			})
// 			.partial()
// 			.passthrough(),
// 		show_in_the_browser: z.boolean().default(true),
// 		show_in_the_follow_up_email: z.boolean(),
// 		third_party_survey: z.string().max(64),
// 	})
// 	.partial()
// 	.passthrough();

// export const schemas = {
// 	UpdateLockedSettings_Body,
// 	accountSettingsUpdate_Body,
// 	accountSettingsRegistrationUpdate_Body,
// 	Sendappnotifications_Body,
// 	generateAppDeeplink_Body,
// 	meetingRecordingRegistrantCreate_Body,
// 	recordingRegistrantQuestionUpdate_Body,
// 	meetingRecordingRegistrantStatus_Body,
// 	recordingSettingsUpdate_Body,
// 	recordingStatusUpdateOne_Body,
// 	contactGroupCreate_Body,
// 	contactGroupUpdate_Body,
// 	contactGroupMemberAdd_Body,
// 	meetingId,
// 	addDevice_Body,
// 	updateDevice_Body,
// 	changeDeviceAssociation_Body,
// 	groupAdminsCreate_Body,
// 	userId,
// 	groupLockedSettings_Body,
// 	groupMembersCreate_Body,
// 	updateAGroupMember_Body,
// 	updateGroupSettings_Body,
// 	deviceCreate_Body,
// 	imGroupCreate_Body,
// 	imGroupUpdate_Body,
// 	InformationBarriersCreate_Body,
// 	inMeetingControl_Body,
// 	meetingUpdate_Body,
// 	createBatchPolls_Body,
// 	addBatchRegistrants_Body,
// 	meetingInviteLinksCreate_Body,
// 	meetingLiveStreamUpdate_Body,
// 	meetingLiveStreamStatusUpdate_Body,
// 	meetingPollCreate_Body,
// 	meetingRegistrantCreate_Body,
// 	meetingRegistrantQuestionUpdate_Body,
// 	meetingRegistrantStatus_Body,
// 	meetingStatus_Body,
// 	meetingSurveyUpdate_Body,
// 	meetingTemplateCreate_Body,
// 	meetingCreate_Body,
// 	createRole_Body,
// 	updateRole_Body,
// 	AddRoleMembers_Body,
// 	createSIPPhone_Body,
// 	updateSIPPhone_Body,
// 	tspUpdate_Body,
// 	userTSPCreate_Body,
// 	trackingfieldCreate_Body,
// 	userCreate_Body,
// 	bulkUpdateFeature_Body,
// 	userUpdate_Body,
// 	userAssistantCreate_Body,
// 	updatePresenceStatus_Body,
// 	userSettingsUpdate_Body,
// 	userStatus_Body,
// 	webinarTemplateCreate_Body,
// 	webinarCreate_Body,
// 	webinarUpdate_Body,
// 	addBatchWebinarRegistrants_Body,
// 	createWebinarBrandingNameTag_Body,
// 	updateWebinarBrandingNameTag_Body,
// 	uploadWebinarBrandingVB_Body,
// 	webinarPanelistCreate_Body,
// 	webinarRegistrantCreate_Body,
// 	webinarRegistrantQuestionUpdate_Body,
// 	webinarRegistrantStatus_Body,
// 	webinarStatus_Body,
// 	webinarSurveyUpdate_Body,
// };

// const endpoints = makeApi([
// 	{
// 		method: "get",
// 		path: "/accounts/:accountId/lock_settings",
// 		description: `Retrieve an account&#x27;s locked settings. 

//  Account admins and account owners can use [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) to toggle settings on or off for all users in their account. 


// **Note:** You can use Account Locked Settings with accounts that have master and sub accounts enabled.   
   
 
// **Prerequisites:**
// * Pro or a higher paid account.   
 



// **Scopes:** &#x60;account:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "option",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "custom_query_fields",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.union([
// 			z
// 				.object({
// 					audio_conferencing: z
// 						.object({ toll_free_and_fee_based_toll_call: z.boolean() })
// 						.partial()
// 						.passthrough(),
// 					chat: z
// 						.object({
// 							share_files: z.boolean(),
// 							chat_emojis: z.boolean(),
// 							record_voice_messages: z.boolean(),
// 							record_video_messages: z.boolean(),
// 							screen_capture: z.boolean(),
// 							share_links_in_chat: z.boolean(),
// 							schedule_meetings_in_chat: z.boolean(),
// 							set_retention_period_in_cloud: z.boolean(),
// 							set_retention_period_in_local: z.boolean(),
// 							allow_users_to_add_contacts: z.boolean(),
// 							allow_users_to_chat_with_others: z.boolean(),
// 							chat_etiquette_tool: z.boolean(),
// 							send_data_to_third_party_archiving_service: z.boolean(),
// 							translate_messages: z.boolean(),
// 							search_and_send_animated_gif_images: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					email_notification: z
// 						.object({
// 							alternative_host_reminder: z.boolean(),
// 							cancel_meeting_reminder: z.boolean(),
// 							cloud_recording_available_reminder: z.boolean(),
// 							jbh_reminder: z.boolean(),
// 							schedule_for_reminder: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					in_meeting: z
// 						.object({
// 							alert_guest_join: z.boolean(),
// 							allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 							allow_live_streaming: z.boolean(),
// 							allow_show_zoom_windows: z.boolean(),
// 							annotation: z.boolean(),
// 							anonymous_question_answer: z.boolean(),
// 							attendee_on_hold: z.boolean(),
// 							attention_mode_focus_mode: z.boolean(),
// 							auto_answer: z.boolean(),
// 							auto_generated_captions: z.boolean(),
// 							auto_saving_chat: z.boolean(),
// 							breakout_room: z.boolean(),
// 							chat: z.boolean(),
// 							meeting_question_answer: z.boolean(),
// 							closed_caption: z.boolean(),
// 							co_host: z.boolean(),
// 							custom_data_center_regions: z.boolean(),
// 							disable_screen_sharing_for_host_meetings: z.boolean(),
// 							disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 							dscp_marking: z.boolean(),
// 							e2e_encryption: z.boolean(),
// 							entry_exit_chime: z.string(),
// 							far_end_camera_control: z.boolean(),
// 							feedback: z.boolean(),
// 							file_transfer: z.boolean(),
// 							full_transcript: z.boolean(),
// 							group_hd: z.boolean(),
// 							webinar_group_hd: z.boolean(),
// 							language_interpretation: z.boolean(),
// 							sign_language_interpretation: z.boolean(),
// 							manual_captions: z.boolean(),
// 							meeting_reactions: z.boolean(),
// 							webinar_reactions: z.boolean(),
// 							meeting_survey: z.boolean(),
// 							original_audio: z.boolean(),
// 							polling: z.boolean(),
// 							post_meeting_feedback: z.boolean(),
// 							private_chat: z.boolean(),
// 							remote_control: z.boolean(),
// 							non_verbal_feedback: z.boolean(),
// 							remote_support: z.boolean(),
// 							request_permission_to_unmute_participants: z.boolean(),
// 							save_caption: z.boolean(),
// 							save_captions: z.boolean(),
// 							screen_sharing: z.boolean(),
// 							sending_default_email_invites: z.boolean(),
// 							show_meeting_control_toolbar: z.boolean(),
// 							slide_control: z.boolean(),
// 							stereo_audio: z.boolean(),
// 							use_html_format_email: z.boolean(),
// 							virtual_background: z.boolean(),
// 							webinar_chat: z.boolean(),
// 							webinar_live_streaming: z.boolean(),
// 							webinar_polling: z.boolean(),
// 							webinar_question_answer: z.boolean(),
// 							webinar_survey: z.boolean(),
// 							whiteboard: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					other_options: z
// 						.object({
// 							blur_snapshot: z.boolean(),
// 							webinar_registration_options: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					recording: z
// 						.object({
// 							account_user_access_recording: z.boolean(),
// 							auto_delete_cmr: z.boolean(),
// 							auto_recording: z.boolean(),
// 							cloud_recording: z.boolean(),
// 							cloud_recording_download: z.boolean(),
// 							host_delete_cloud_recording: z.boolean(),
// 							ip_address_access_control: z.boolean(),
// 							local_recording: z.boolean(),
// 							prevent_host_access_recording: z.boolean(),
// 							recording_authentication: z.boolean(),
// 							archive: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					schedule_meeting: z
// 						.object({
// 							audio_type: z.boolean(),
// 							embed_password_in_join_link: z.boolean(),
// 							enforce_login: z.boolean(),
// 							enforce_login_domains: z.string(),
// 							enforce_login_with_domains: z.boolean(),
// 							host_video: z.boolean(),
// 							join_before_host: z.boolean(),
// 							meeting_authentication: z.boolean(),
// 							not_store_meeting_topic: z.boolean(),
// 							always_display_zoom_webinar_as_topic: z.boolean(),
// 							participant_video: z.boolean(),
// 							require_password_for_instant_meetings: z.boolean(),
// 							require_password_for_pmi_meetings: z.boolean(),
// 							require_password_for_scheduling_new_meetings: z.boolean(),
// 							use_pmi_for_instant_meetings: z.boolean(),
// 							use_pmi_for_scheduled_meetings: z.boolean(),
// 							continuous_meeting_chat: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					telephony: z
// 						.object({
// 							telephony_regions: z.boolean(),
// 							third_party_audio: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					tsp: z
// 						.object({
// 							call_out: z.boolean(),
// 							show_international_numbers_link: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			z
// 				.object({
// 					meeting_security: z
// 						.object({
// 							approved_or_denied_countries_or_regions: z.boolean(),
// 							auto_security: z.boolean(),
// 							block_user_domain: z.boolean(),
// 							chat_etiquette_tool: z.boolean(),
// 							embed_password_in_join_link: z.boolean(),
// 							encryption_type: z.boolean(),
// 							end_to_end_encrypted_meetings: z.boolean(),
// 							meeting_password: z.boolean(),
// 							only_authenticated_can_join_from_webclient: z.boolean(),
// 							phone_password: z.boolean(),
// 							pmi_password: z.boolean(),
// 							waiting_room: z.boolean(),
// 							webinar_password: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		]),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  Account does not exist: $subAccountId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/accounts/:accountId/lock_settings",
// 		description: `Update an account&#x27;s locked settings.

// [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) allows account admins and account owners to toggle settings on or off for all users in your account.  

// **Note:** Yout must have a Pro or a higher plan and enabled master and sub accounts options.  
   
 
// **Prerequisites:**  
 
// * Pro or a higher paid account.   
 



// **Scopes:** &#x60;account:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: UpdateLockedSettings_Body,
// 			},
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.object({}).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  TAccount does not exist: $subAccountId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/accounts/:accountId/managed_domains",
// 		description: `Retrieve a list of an account&#x27;s [managed domains](https://support.zoom.us/hc/en-us/articles/203395207). To get the master account&#x27;s managed domains, pass the &#x60;me&#x60; value for the &#x60;accountId&#x60; path parameter. 

//  **Prerequisites:** 
// * A Pro or a higher paid account with the Master account option enabled.

// **Scopes:** &#x60;account:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				domains: z.array(
// 					z
// 						.object({ domain: z.string(), status: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  Account does not exist: $accountId &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/accounts/:accountId/owner",
// 		description: `Change an account&#x27;s owner.

// An account&#x27;s current owner can [change the account&#x27;s owner](https://support.zoom.us/hc/en-us/articles/115005686983-Change-Account-Owner) to another user on the same account.

// **Prerequisites:** 
// * An account owner or admin permissions of an account 
// * The account making this API request must be on a Pro or a higher account plan with [Master account](https://developers.zoom.us/docs/api/rest/master-account-apis/) privileges

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ email: z.string().email() }).passthrough(),
// 			},
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  User is not an admin or is an API user or doesn&#x27;t belong to this account: {accountId}.&lt;br&gt;
// Cannot make a user outside of your account an owner.&lt;br&gt;
// Cannot update the role of an account owner. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  Account does not exist: $subAccountId.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3201&#x60; &lt;br&gt;
//  Cannot find a billing account for this: $accountId.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3211&#x60; &lt;br&gt;
//  Cannot find a billing contact for this: $accountId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/accounts/:accountId/settings",
// 		description: `Get an account&#x27;s settings. 

// To get settings for a master account, use the &#x60;me&#x60; value for the &#x60;accountId&#x60; path parameter. 

//  **Prerequisites:** 
// * The account must be a paid account.

// **Scopes:** &#x60;account:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "option",
// 				type: "Query",
// 				schema: z
// 					.enum([
// 						"meeting_authentication",
// 						"recording_authentication",
// 						"security",
// 						"meeting_security",
// 					])
// 					.optional(),
// 			},
// 			{
// 				name: "custom_query_fields",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.union([
// 			z
// 				.object({
// 					security: z
// 						.object({
// 							admin_change_name_pic: z.boolean(),
// 							admin_change_user_info: z.boolean(),
// 							user_modifiable_info_by_admin: z.array(
// 								z.enum(["name", "profile_picture", "sign_in_email", "host_key"])
// 							),
// 							signin_with_sso: z
// 								.object({
// 									enable: z.boolean(),
// 									require_sso_for_domains: z.boolean(),
// 									domains: z.array(z.string()),
// 									sso_bypass_users: z.array(
// 										z
// 											.object({ id: z.string(), email: z.string() })
// 											.partial()
// 											.passthrough()
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							hide_billing_info: z.boolean(),
// 							import_photos_from_devices: z.boolean(),
// 							password_requirement: z
// 								.object({
// 									consecutive_characters_length: z.number().int(),
// 									have_special_character: z.boolean(),
// 									minimum_password_length: z.number().int().gte(8).lte(14),
// 									weak_enhance_detection: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							sign_again_period_for_inactivity_on_client: z.number().int(),
// 							sign_again_period_for_inactivity_on_web: z.number().int(),
// 							sign_in_with_two_factor_auth: z.enum([
// 								"all",
// 								"group",
// 								"role",
// 								"none",
// 							]),
// 							sign_in_with_two_factor_auth_groups: z.array(z.string()),
// 							sign_in_with_two_factor_auth_roles: z.array(z.string()),
// 						})
// 						.partial()
// 						.passthrough(),
// 					audio_conferencing: z
// 						.object({
// 							toll_free_and_fee_based_toll_call: z
// 								.object({
// 									allow_webinar_attendees_dial: z.boolean(),
// 									enable: z.boolean(),
// 									numbers: z.array(
// 										z
// 											.object({
// 												code: z.string(),
// 												country_code: z.string(),
// 												country_name: z.string(),
// 												display_number: z.string().max(30),
// 												number: z.string().max(30),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					chat: z
// 						.object({
// 							allow_bots_chat: z.boolean(),
// 							share_files: z
// 								.object({
// 									enable: z.boolean(),
// 									share_option: z.enum(["anyone", "account", "organization"]),
// 									restrictions: z
// 										.object({
// 											only_allow_specific_file_types: z.boolean(),
// 											file_type_restrictions: z.array(
// 												z.enum([
// 													".gz",
// 													".rar",
// 													".zip",
// 													".xls",
// 													".xlsx",
// 													".json",
// 													".png",
// 													".pptx",
// 													".ppt",
// 													".7z",
// 													".xmind",
// 													".pdf",
// 													".pps",
// 													".txt",
// 													".docx",
// 													".doc",
// 												])
// 											),
// 											file_type_restrictions_for_external: z.array(
// 												z.enum([
// 													".gz",
// 													".rar",
// 													".zip",
// 													".xls",
// 													".xlsx",
// 													".json",
// 													".png",
// 													".pptx",
// 													".ppt",
// 													".7z",
// 													".xmind",
// 													".pdf",
// 													".pps",
// 													".txt",
// 													".docx",
// 													".doc",
// 												])
// 											),
// 											maximum_file_size: z.boolean(),
// 											file_size_restrictions: z.union([
// 												z.literal(50),
// 												z.literal(100),
// 												z.literal(200),
// 												z.literal(300),
// 												z.literal(400),
// 												z.literal(500),
// 											]),
// 											file_size_restrictions_for_external: z.union([
// 												z.literal(50),
// 												z.literal(100),
// 												z.literal(200),
// 												z.literal(300),
// 												z.literal(400),
// 												z.literal(500),
// 											]),
// 										})
// 										.partial()
// 										.passthrough(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							chat_emojis: z
// 								.object({
// 									enable: z.boolean(),
// 									emojis_option: z.enum(["all", "selected"]),
// 								})
// 								.partial()
// 								.passthrough(),
// 							record_voice_messages: z.boolean(),
// 							record_video_messages: z.boolean(),
// 							screen_capture: z.boolean(),
// 							create_public_channels: z.boolean(),
// 							create_private_channels: z.boolean(),
// 							share_links_in_chat: z.boolean(),
// 							schedule_meetings_in_chat: z.boolean(),
// 							set_retention_period_in_cloud: z
// 								.object({
// 									enable: z.boolean(),
// 									retention_period_of_direct_messages_and_group_conversation:
// 										z.string(),
// 									retention_period_of_channels: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							set_retention_period_in_local: z
// 								.object({
// 									enable: z.boolean(),
// 									retention_period_of_direct_messages_and_group_conversation:
// 										z.string(),
// 									retention_period_of_channels: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							allow_users_to_add_contacts: z
// 								.object({
// 									enable: z.boolean(),
// 									selected_option: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 										z.literal(4),
// 									]),
// 									user_email_addresses: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							allow_users_to_chat_with_others: z
// 								.object({
// 									enable: z.boolean(),
// 									selected_option: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 										z.literal(4),
// 									]),
// 									user_email_addresses: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							chat_etiquette_tool: z
// 								.object({
// 									enable: z.boolean(),
// 									policies: z.array(
// 										z
// 											.object({
// 												description: z.string(),
// 												id: z.string(),
// 												is_locked: z.boolean(),
// 												keywords: z.array(z.string()),
// 												name: z.string(),
// 												regular_expression: z.string(),
// 												status: z.enum(["activated", "deactivated"]),
// 												trigger_action: z.union([z.literal(1), z.literal(2)]),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 									policy_max_count: z.number().int(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							send_data_to_third_party_archiving_service: z
// 								.object({
// 									enable: z.boolean(),
// 									type: z.enum(["global_relay", "smarsh"]),
// 									smtp_delivery_address: z.string(),
// 									user_name: z.string(),
// 									passcode: z.string(),
// 									authorized_channel_token: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							apply_local_storage_to_personal_channel: z
// 								.object({ enable: z.boolean(), retention_period: z.string() })
// 								.partial()
// 								.passthrough(),
// 							translate_messages: z.boolean(),
// 							search_and_send_animated_gif_images: z
// 								.object({
// 									enable: z.boolean(),
// 									giphy_content_rating: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 										z.literal(4),
// 									]),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					email_notification: z
// 						.object({
// 							alternative_host_reminder: z.boolean(),
// 							cancel_meeting_reminder: z.boolean(),
// 							cloud_recording_available_reminder: z.boolean(),
// 							jbh_reminder: z.boolean(),
// 							low_host_count_reminder: z.boolean(),
// 							recording_available_reminder_alternative_hosts: z.boolean(),
// 							recording_available_reminder_schedulers: z.boolean(),
// 							schedule_for_reminder: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					feature: z
// 						.object({ meeting_capacity: z.number().int() })
// 						.partial()
// 						.passthrough(),
// 					in_meeting: z
// 						.object({
// 							auto_generated_translation: z
// 								.object({
// 									language_item_pairList: z
// 										.object({
// 											trans_lang_config: z.array(
// 												z
// 													.object({
// 														speak_language: z
// 															.object({
// 																name: z.enum([
// 																	"Chinese (Simplified)",
// 																	"Dutch",
// 																	"English",
// 																	"French",
// 																	"German",
// 																	"Italian",
// 																	"Japanese",
// 																	"Korean",
// 																	"Portuguese",
// 																	"Russian",
// 																	"Spanish",
// 																	"Ukrainian",
// 																]),
// 																code: z.enum([
// 																	"zh",
// 																	"nl",
// 																	"en",
// 																	"fr",
// 																	"de",
// 																	"it",
// 																	"ja",
// 																	"ko",
// 																	"pt",
// 																	"ru",
// 																	"es",
// 																	"uk",
// 																]),
// 															})
// 															.partial()
// 															.passthrough(),
// 														translate_to: z
// 															.object({
// 																all: z.boolean(),
// 																language_config: z.array(
// 																	z
// 																		.object({
// 																			name: z.literal("English"),
// 																			code: z.literal("en"),
// 																		})
// 																		.partial()
// 																		.passthrough()
// 																),
// 															})
// 															.partial()
// 															.passthrough(),
// 													})
// 													.partial()
// 													.passthrough()
// 											),
// 											all: z.boolean(),
// 										})
// 										.partial()
// 										.passthrough(),
// 									enable: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							alert_guest_join: z.boolean(),
// 							allow_host_to_enable_focus_mode: z.boolean(),
// 							allow_live_streaming: z.boolean(),
// 							allow_participants_chat_with: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							]),
// 							allow_participants_to_rename: z.boolean(),
// 							allow_show_zoom_windows: z.boolean(),
// 							allow_users_save_chats: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 							]),
// 							annotation: z.boolean(),
// 							anonymous_question_answer: z.boolean(),
// 							attendee_on_hold: z.boolean(),
// 							attention_mode_focus_mode: z.boolean(),
// 							auto_answer: z.boolean(),
// 							auto_saving_chat: z.boolean(),
// 							breakout_room: z.boolean(),
// 							breakout_room_schedule: z.boolean(),
// 							chat: z.boolean(),
// 							meeting_question_answer: z.boolean(),
// 							closed_caption: z.boolean(),
// 							closed_captioning: z
// 								.object({
// 									auto_transcribing: z.boolean(),
// 									enable: z.boolean(),
// 									save_caption: z.boolean(),
// 									third_party_captioning_service: z.boolean(),
// 									view_full_transcript: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							co_host: z.boolean(),
// 							custom_data_center_regions: z.boolean(),
// 							custom_live_streaming_service: z.boolean(),
// 							custom_service_instructions: z.string(),
// 							meeting_data_transit_and_residency_method: z.enum([
// 								"cloud",
// 								"On-Prem",
// 							]),
// 							data_center_regions: z.array(
// 								z.enum([
// 									"AU",
// 									"LA",
// 									"CA",
// 									"CN",
// 									"DE",
// 									"HK",
// 									"IN",
// 									"IE",
// 									"TY",
// 									"MX",
// 									"NL",
// 									"SG",
// 									"US",
// 								])
// 							),
// 							disable_screen_sharing_for_host_meetings: z.boolean(),
// 							disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 							dscp_audio: z.number().int().gte(1).lte(63),
// 							dscp_marking: z.boolean(),
// 							dscp_video: z.number().int().gte(1).lte(63),
// 							dscp_dual: z.boolean(),
// 							e2e_encryption: z.boolean(),
// 							entry_exit_chime: z.enum(["host", "all", "none"]),
// 							far_end_camera_control: z.boolean(),
// 							feedback: z.boolean(),
// 							file_transfer: z.boolean(),
// 							group_hd: z.boolean(),
// 							webinar_group_hd: z.boolean(),
// 							join_from_desktop: z.boolean(),
// 							join_from_mobile: z.boolean(),
// 							language_interpretation: z
// 								.object({
// 									custom_languages: z.array(z.string()),
// 									enable: z.boolean(),
// 									enable_language_interpretation_by_default: z.boolean(),
// 									allow_participants_to_speak_in_listening_channel: z.boolean(),
// 									allow_up_to_25_custom_languages_when_scheduling_meetings:
// 										z.boolean(),
// 									languages: z.array(
// 										z.enum([
// 											"English",
// 											"Chinese",
// 											"Japanese",
// 											"German",
// 											"French",
// 											"Russian",
// 											"Portuguese",
// 											"Spanish",
// 											"Korean",
// 										])
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							sign_language_interpretation: z
// 								.object({
// 									enable: z.boolean(),
// 									enable_sign_language_interpretation_by_default: z.boolean(),
// 									languages: z.array(
// 										z.enum([
// 											"American",
// 											"Chinese",
// 											"French",
// 											"German",
// 											"Japanese",
// 											"Russian",
// 											"Brazilian",
// 											"Spanish",
// 											"Mexican",
// 											"British",
// 										])
// 									),
// 									custom_languages: z.array(z.string()),
// 								})
// 								.partial()
// 								.passthrough(),
// 							live_streaming_facebook: z.boolean(),
// 							live_streaming_youtube: z.boolean(),
// 							manual_captioning: z
// 								.object({
// 									allow_to_type: z.boolean(),
// 									auto_generated_captions: z.boolean(),
// 									full_transcript: z.boolean(),
// 									manual_captions: z.boolean(),
// 									save_captions: z.boolean(),
// 									third_party_captioning_service: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							meeting_polling: z
// 								.object({
// 									advanced_polls: z.boolean(),
// 									allow_alternative_host_to_add_edit: z.boolean(),
// 									manage_saved_polls_and_quizzes: z.boolean(),
// 									allow_host_to_upload_image: z.boolean(),
// 									require_answers_to_be_anonymous: z.boolean(),
// 									enable: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							meeting_reactions: z.boolean(),
// 							meeting_reactions_emojis: z.enum(["all", "selected"]),
// 							allow_host_panelists_to_use_audible_clap: z.boolean(),
// 							webinar_reactions: z.boolean(),
// 							meeting_survey: z.boolean(),
// 							original_audio: z.boolean(),
// 							p2p_connetion: z.boolean(),
// 							p2p_ports: z.boolean(),
// 							polling: z.boolean(),
// 							ports_range: z.string(),
// 							post_meeting_feedback: z.boolean(),
// 							private_chat: z.boolean(),
// 							record_play_own_voice: z.boolean(),
// 							remote_control: z.boolean(),
// 							non_verbal_feedback: z.boolean(),
// 							remote_support: z.boolean(),
// 							request_permission_to_unmute_participants: z.boolean(),
// 							screen_sharing: z.boolean(),
// 							sending_default_email_invites: z.boolean(),
// 							show_a_join_from_your_browser_link: z.boolean(),
// 							show_meeting_control_toolbar: z.boolean(),
// 							slide_control: z.boolean(),
// 							stereo_audio: z.boolean(),
// 							unchecked_data_center_regions: z.array(
// 								z.enum([
// 									"EU",
// 									"HK",
// 									"AU",
// 									"IN",
// 									"TY",
// 									"CN",
// 									"US",
// 									"CA",
// 									"DE",
// 									"NL",
// 									"LA",
// 								])
// 							),
// 							use_html_format_email: z.boolean(),
// 							virtual_background: z.boolean(),
// 							virtual_background_settings: z
// 								.object({
// 									allow_upload_custom: z.boolean(),
// 									allow_videos: z.boolean(),
// 									enable: z.boolean(),
// 									files: z.array(
// 										z
// 											.object({
// 												id: z.string(),
// 												is_default: z.boolean(),
// 												name: z.string(),
// 												size: z.number().int(),
// 												type: z.string(),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							watermark: z.boolean(),
// 							webinar_chat: z
// 								.object({
// 									allow_attendees_chat_with: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 									]),
// 									allow_auto_save_local_chat_file: z.boolean(),
// 									allow_panelists_chat_with: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									allow_panelists_send_direct_message: z.boolean(),
// 									allow_users_save_chats: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 									default_attendees_chat_with: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									enable: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_live_streaming: z
// 								.object({
// 									custom_service_instructions: z.string(),
// 									enable: z.boolean(),
// 									live_streaming_reminder: z.boolean(),
// 									live_streaming_service: z.array(
// 										z.enum([
// 											"facebook",
// 											"workplace_by_facebook",
// 											"youtube",
// 											"custom_live_streaming_service",
// 										])
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_polling: z
// 								.object({
// 									advanced_polls: z.boolean(),
// 									allow_alternative_host_to_add_edit: z.boolean(),
// 									require_answers_to_be_anonymous: z.boolean(),
// 									manage_saved_polls_and_quizzes: z.boolean(),
// 									allow_host_to_upload_image: z.boolean(),
// 									enable: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_question_answer: z.boolean(),
// 							webinar_survey: z.boolean(),
// 							whiteboard: z.boolean(),
// 							who_can_share_screen: z.enum(["host", "all"]),
// 							who_can_share_screen_when_someone_is_sharing: z.enum([
// 								"host",
// 								"all",
// 							]),
// 							participants_share_simultaneously: z.enum(["multiple", "one"]),
// 							workplace_by_facebook: z.boolean(),
// 							transfer_meetings_between_devices: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					integration: z
// 						.object({
// 							box: z.boolean(),
// 							dropbox: z.boolean(),
// 							google_calendar: z.boolean(),
// 							google_drive: z.boolean(),
// 							kubi: z.boolean(),
// 							microsoft_one_drive: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					other_options: z
// 						.object({
// 							allow_auto_active_users: z.boolean(),
// 							allow_users_contact_support_via_chat: z.boolean(),
// 							allow_users_enter_and_share_pronouns: z.boolean(),
// 							blur_snapshot: z.boolean(),
// 							display_meetings_scheduled_for_others: z.boolean(),
// 							meeting_qos_and_mos: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 							]),
// 							show_one_user_meeting_on_dashboard: z.boolean(),
// 							use_cdn: z.enum(["none", "default", "wangsu"]),
// 							webinar_registration_options: z
// 								.object({
// 									allow_host_to_enable_join_info: z.boolean(),
// 									allow_host_to_enable_social_share_buttons: z.boolean(),
// 									enable_custom_questions: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							email_in_attendee_report_for_meeting: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					profile: z
// 						.object({
// 							recording_storage_location: z
// 								.object({
// 									allowed_values: z.array(z.string()),
// 									value: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					recording: z
// 						.object({
// 							account_user_access_recording: z.boolean(),
// 							allow_recovery_deleted_cloud_recordings: z.boolean(),
// 							archive: z
// 								.object({
// 									enable: z.boolean(),
// 									settings: z
// 										.object({
// 											audio_file: z.boolean(),
// 											cc_transcript_file: z.boolean(),
// 											chat_file: z.boolean(),
// 											chat_with_sender_email: z.boolean(),
// 											video_file: z.boolean(),
// 											chat_with_direct_message: z.boolean(),
// 											archive_retention: z.union([
// 												z.literal(1),
// 												z.literal(2),
// 												z.literal(3),
// 												z.literal(4),
// 												z.literal(5),
// 												z.literal(6),
// 												z.literal(7),
// 												z.literal(8),
// 												z.literal(9),
// 												z.literal(10),
// 												z.literal(11),
// 												z.literal(12),
// 												z.literal(13),
// 												z.literal(14),
// 												z.literal(15),
// 												z.literal(16),
// 												z.literal(17),
// 												z.literal(18),
// 												z.literal(19),
// 												z.literal(20),
// 												z.literal(21),
// 												z.literal(22),
// 												z.literal(23),
// 												z.literal(24),
// 												z.literal(25),
// 												z.literal(26),
// 												z.literal(27),
// 												z.literal(28),
// 												z.literal(29),
// 												z.literal(30),
// 											]),
// 											action_when_archive_failed: z.union([
// 												z.literal(1),
// 												z.literal(2),
// 											]),
// 											notification_when_archiving_starts: z.enum([
// 												"participants",
// 												"guest",
// 											]),
// 											play_voice_prompt_when_archiving_starts: z.enum([
// 												"participants",
// 												"guest",
// 												"none",
// 											]),
// 										})
// 										.partial()
// 										.passthrough(),
// 									type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 								})
// 								.partial()
// 								.passthrough(),
// 							auto_delete_cmr: z.boolean(),
// 							auto_delete_cmr_days: z.union([
// 								z.literal(30),
// 								z.literal(60),
// 								z.literal(90),
// 								z.literal(120),
// 							]),
// 							auto_recording: z.enum(["local", "cloud", "none"]),
// 							cloud_recording: z.boolean(),
// 							cloud_recording_download: z.boolean(),
// 							cloud_recording_download_host: z.boolean(),
// 							display_participant_name: z.boolean(),
// 							host_delete_cloud_recording: z.boolean(),
// 							ip_address_access_control: z
// 								.object({
// 									enable: z.boolean(),
// 									ip_addresses_or_ranges: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							local_recording: z.boolean(),
// 							optimize_recording_for_3rd_party_video_editor: z.boolean(),
// 							prevent_host_access_recording: z.boolean(),
// 							record_audio_file: z.boolean(),
// 							record_audio_file_each_participant: z.boolean(),
// 							record_files_separately: z
// 								.object({
// 									active_speaker: z.boolean(),
// 									gallery_view: z.boolean(),
// 									shared_screen: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							record_gallery_view: z.boolean(),
// 							record_speaker_view: z.boolean(),
// 							recording_audio_transcript: z.boolean(),
// 							recording_disclaimer: z.boolean(),
// 							recording_highlight: z.boolean(),
// 							smart_recording: z
// 								.object({
// 									create_recording_highlights: z.boolean(),
// 									create_smart_chapters: z.boolean(),
// 									create_next_steps: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							recording_password_requirement: z
// 								.object({
// 									have_letter: z.boolean(),
// 									have_number: z.boolean(),
// 									have_special_character: z.boolean(),
// 									length: z.number().int().lte(10),
// 									only_allow_numeric: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							recording_thumbnails: z.boolean(),
// 							required_password_for_existing_cloud_recordings: z.boolean(),
// 							required_password_for_shared_cloud_recordings: z.boolean(),
// 							save_chat_text: z.boolean(),
// 							save_close_caption: z.boolean(),
// 							save_panelist_chat: z.boolean(),
// 							save_poll_results: z.boolean(),
// 							show_timestamp: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					schedule_meeting: z
// 						.object({
// 							audio_type: z
// 								.enum(["both", "telephony", "voip", "thirdParty"])
// 								.default("both"),
// 							enforce_login: z.boolean(),
// 							enforce_login_domains: z.string(),
// 							enforce_login_with_domains: z.boolean(),
// 							force_pmi_jbh_password: z.boolean(),
// 							host_video: z.boolean(),
// 							enable_dedicated_group_chat: z.boolean(),
// 							jbh_time: z.union([
// 								z.literal(0),
// 								z.literal(5),
// 								z.literal(10),
// 								z.literal(15),
// 							]),
// 							join_before_host: z.boolean(),
// 							meeting_password_requirement: z
// 								.object({
// 									consecutive_characters_length: z.union([
// 										z.literal(0),
// 										z.literal(4),
// 										z.literal(5),
// 										z.literal(6),
// 										z.literal(7),
// 										z.literal(8),
// 									]),
// 									have_letter: z.boolean(),
// 									have_number: z.boolean(),
// 									have_special_character: z.boolean(),
// 									have_upper_and_lower_characters: z.boolean(),
// 									length: z.number().int(),
// 									only_allow_numeric: z.boolean(),
// 									weak_enhance_detection: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							not_store_meeting_topic: z.boolean(),
// 							participant_video: z.boolean(),
// 							allow_host_to_disable_participant_video: z.boolean(),
// 							personal_meeting: z.boolean(),
// 							require_password_for_instant_meetings: z.boolean(),
// 							require_password_for_pmi_meetings: z.enum([
// 								"jbh_only",
// 								"all",
// 								"none",
// 							]),
// 							require_password_for_scheduled_meetings: z.boolean(),
// 							require_password_for_scheduling_new_meetings: z.boolean(),
// 							use_pmi_for_instant_meetings: z.boolean(),
// 							use_pmi_for_scheduled_meetings: z.boolean(),
// 							always_display_zoom_meeting_as_topic: z
// 								.object({
// 									enable: z.boolean(),
// 									display_topic_for_scheduled_meetings: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							hide_meeting_description: z
// 								.object({
// 									enable: z.boolean(),
// 									hide_description_for_scheduled_meetings: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							always_display_zoom_webinar_as_topic: z
// 								.object({
// 									enable: z.boolean(),
// 									display_topic_for_scheduled_webinars: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							hide_webinar_description: z
// 								.object({
// 									enable: z.boolean(),
// 									hide_description_for_scheduled_webinars: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							meeting_template: z
// 								.object({
// 									enable: z.boolean(),
// 									templates: z.array(
// 										z
// 											.object({
// 												id: z.string(),
// 												name: z.string(),
// 												enable: z.boolean(),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							continuous_meeting_chat: z
// 								.object({
// 									enable: z.boolean(),
// 									can_add_external_users: z.boolean(),
// 									auto_add_invited_external_users: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					telephony: z
// 						.object({
// 							audio_conference_info: z.string(),
// 							telephony_regions: z
// 								.object({
// 									allowed_values: z.array(z.string()),
// 									selection_values: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							third_party_audio: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					tsp: z
// 						.object({
// 							call_out: z.boolean(),
// 							call_out_countries: z.array(z.string()),
// 							display_toll_free_numbers: z.boolean(),
// 							show_international_numbers_link: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					zoom_rooms: z
// 						.object({
// 							auto_start_stop_scheduled_meetings: z.boolean(),
// 							cmr_for_instant_meeting: z.boolean(),
// 							force_private_meeting: z.boolean(),
// 							hide_host_information: z.boolean(),
// 							list_meetings_with_calendar: z.boolean(),
// 							start_airplay_manually: z.boolean(),
// 							ultrasonic: z.boolean(),
// 							upcoming_meeting_alert: z.boolean(),
// 							weekly_system_restart: z.boolean(),
// 							zr_post_meeting_feedback: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			z.union([
// 				z
// 					.object({
// 						allow_authentication_exception: z.boolean(),
// 						authentication_options: z.array(
// 							z
// 								.object({
// 									default_option: z.boolean(),
// 									domains: z.string(),
// 									id: z.string(),
// 									name: z.string(),
// 									type: z.enum([
// 										"enforce_login",
// 										"enforce_login_with_same_account",
// 										"enforce_login_with_domains",
// 									]),
// 									visible: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						meeting_authentication: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				z
// 					.object({
// 						authentication_options: z.array(
// 							z
// 								.object({
// 									default_option: z.boolean(),
// 									domains: z.string(),
// 									id: z.string(),
// 									name: z.string(),
// 									type: z.enum([
// 										"internally",
// 										"enforce_login",
// 										"enforce_login_with_domains",
// 									]),
// 									visible: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						recording_authentication: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 			]),
// 			z
// 				.object({
// 					meeting_security: z
// 						.object({
// 							auto_security: z.boolean(),
// 							block_user_domain: z.boolean(),
// 							block_user_domain_list: z.array(z.string()),
// 							chat_etiquette_tool: z
// 								.object({
// 									enable: z.boolean(),
// 									policies: z.array(
// 										z
// 											.object({
// 												description: z.string(),
// 												id: z.string(),
// 												is_locked: z.boolean(),
// 												keywords: z.array(z.string()),
// 												name: z.string(),
// 												regular_expression: z.string(),
// 												status: z.enum(["activated", "deactivated"]),
// 												trigger_action: z.union([z.literal(1), z.literal(2)]),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 									policy_max_count: z.number().int(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							embed_password_in_join_link: z.boolean(),
// 							encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 							end_to_end_encrypted_meetings: z.boolean(),
// 							meeting_password: z.boolean(),
// 							meeting_password_requirement: z
// 								.object({
// 									consecutive_characters_length: z.union([
// 										z.literal(0),
// 										z.literal(4),
// 										z.literal(5),
// 										z.literal(6),
// 										z.literal(7),
// 										z.literal(8),
// 									]),
// 									have_letter: z.boolean(),
// 									have_number: z.boolean(),
// 									have_special_character: z.boolean(),
// 									have_upper_and_lower_characters: z.boolean(),
// 									length: z.number().int(),
// 									only_allow_numeric: z.boolean(),
// 									weak_enhance_detection: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							only_authenticated_can_join_from_webclient: z.boolean(),
// 							phone_password: z.boolean(),
// 							pmi_password: z.boolean(),
// 							require_password_for_scheduled_meeting: z.boolean(),
// 							require_password_for_scheduled_webinar: z.boolean(),
// 							waiting_room: z.boolean(),
// 							waiting_room_settings: z
// 								.object({
// 									participants_to_place_in_waiting_room: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									users_who_can_admit_participants_from_waiting_room: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 									]),
// 									whitelisted_domains_for_waiting_room: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_password: z.boolean(),
// 							waiting_room_options: z
// 								.object({
// 									enable: z.boolean(),
// 									locked: z.boolean(),
// 									admit_type: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 										z.literal(4),
// 									]),
// 									internal_user_auto_admit: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 										z.literal(4),
// 										z.literal(5),
// 									]),
// 									admit_domain_allowlist: z.string(),
// 									who_can_admit_participants: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 									]),
// 									sort_order_of_people: z.union([z.literal(0), z.literal(1)]),
// 									more_options: z
// 										.object({
// 											user_invited_by_host_can_bypass_waiting_room: z.boolean(),
// 											move_participants_to_waiting_room_when_host_dropped:
// 												z.boolean(),
// 											allow_participants_to_reply_to_host: z.boolean(),
// 										})
// 										.partial()
// 										.passthrough(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			z
// 				.object({
// 					in_meeting: z
// 						.object({
// 							custom_data_center_regions: z.boolean(),
// 							data_center_regions: z.array(
// 								z.enum([
// 									"AU",
// 									"LA",
// 									"CA",
// 									"CN",
// 									"DE",
// 									"HK",
// 									"IN",
// 									"IE",
// 									"TY",
// 									"MX",
// 									"NL",
// 									"SG",
// 									"US",
// 								])
// 							),
// 							unchecked_data_center_regions: z.array(
// 								z.enum([
// 									"EU",
// 									"HK",
// 									"AU",
// 									"IN",
// 									"TY",
// 									"CN",
// 									"US",
// 									"CA",
// 									"DE",
// 									"NL",
// 									"LA",
// 								])
// 							),
// 						})
// 						.partial()
// 						.passthrough(),
// 					in_session: z
// 						.object({
// 							custom_data_center_regions: z.boolean(),
// 							data_center_regions: z.array(
// 								z.enum([
// 									"AU",
// 									"LA",
// 									"CA",
// 									"CN",
// 									"DE",
// 									"HK",
// 									"IN",
// 									"IE",
// 									"TY",
// 									"MX",
// 									"NL",
// 									"SG",
// 									"US",
// 								])
// 							),
// 							unchecked_data_center_regions: z.array(
// 								z.enum([
// 									"EU",
// 									"HK",
// 									"AU",
// 									"IN",
// 									"TY",
// 									"CN",
// 									"US",
// 									"CA",
// 									"DE",
// 									"NL",
// 									"LA",
// 								])
// 							),
// 							p2p_connetion: z.boolean(),
// 							p2p_ports: z.boolean(),
// 							ports_range: z.string(),
// 							dscp_audio: z.number().int().gte(1).lte(63).default(56),
// 							dscp_marking: z.boolean(),
// 							dscp_video: z.number().int().gte(1).lte(63).default(40),
// 							dscp_dual: z.boolean(),
// 							subsession: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					session_security: z
// 						.object({
// 							approved_or_denied_countries_or_regions: z
// 								.object({
// 									approved_list: z.array(z.string()),
// 									denied_list: z.array(z.string()),
// 									enable: z.boolean(),
// 									method: z.enum(["approve", "deny"]),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					recording: z
// 						.object({
// 							cloud_recording: z.boolean(),
// 							record_speaker_view: z.boolean(),
// 							record_gallery_view: z.boolean(),
// 							record_audio_file: z.boolean(),
// 							save_chat_text: z.boolean(),
// 							show_timestamp: z.boolean(),
// 							recording_audio_transcript: z.boolean(),
// 							cloud_recording_download: z.boolean(),
// 							auto_delete_cmr: z.boolean(),
// 							auto_delete_cmr_days: z.union([
// 								z.literal(30),
// 								z.literal(60),
// 								z.literal(90),
// 								z.literal(120),
// 							]),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		]),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  Account does not exist: $accountId &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/accounts/:accountId/settings",
// 		description: `Update an account&#x27;s settings. 
// To update the settings for a master account, pass the &#x60;me&#x60; value for the &#x60;accountId&#x60; path parameter. 

//  **Prerequisites:** 
// * The account must be a paid account.

// **Scopes:** &#x60;account:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: accountSettingsUpdate_Body,
// 			},
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "option",
// 				type: "Query",
// 				schema: z
// 					.enum([
// 						"meeting_authentication",
// 						"recording_authentication",
// 						"security",
// 						"meeting_security",
// 					])
// 					.optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Only available for paid accounts. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  Account does not exist: $accountId &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/accounts/:accountId/settings/registration",
// 		description: `Get an account&#x27;s webinar registration settings. To get the master account&#x27;s webinar registration settings, use the &#x60;me&#x60; value for the &#x60;accountId&#x60; path parameter. 

// **Prerequisites:** 
// * The account must be a paid account.

// **Scopes:** &#x60;account:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.literal("webinar").optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				options: z
// 					.object({
// 						host_email_notification: z.boolean(),
// 						close_registration: z.boolean(),
// 						allow_participants_to_join_from_multiple_devices: z.boolean(),
// 						show_social_share_buttons: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				questions: z.array(
// 					z
// 						.object({
// 							field_name: z.enum([
// 								"last_name",
// 								"address",
// 								"city",
// 								"country",
// 								"zip",
// 								"state",
// 								"phone",
// 								"industry",
// 								"org",
// 								"job_title",
// 								"purchasing_time_frame",
// 								"role_in_purchase_process",
// 								"no_of_employees",
// 								"comments",
// 							]),
// 							required: z.boolean(),
// 							selected: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				approve_type: z.union([z.literal(0), z.literal(1)]),
// 				custom_questions: z.array(
// 					z
// 						.object({
// 							title: z.string(),
// 							type: z.enum([
// 								"short",
// 								"single_dropdown",
// 								"single_radio",
// 								"multiple",
// 							]),
// 							required: z.boolean(),
// 							selected: z.boolean(),
// 							answers: z.array(z.string()),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  Account does not exist: $accountId &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/accounts/:accountId/settings/registration",
// 		description: `Update an account&#x27;s webinar registration settings. To update the master account&#x27;s webinar registration settings, pass the &#x60;me&#x60; value for the &#x60;accountId&#x60; path parameter. 

//  **Prerequisites:** 
// * The account must be a paid account.

// **Scopes:** &#x60;account:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: accountSettingsRegistrationUpdate_Body,
// 			},
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.literal("webinar").optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Only available for paid accounts. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  Account does not exist: $accountId &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/accounts/:accountId/settings/virtual_backgrounds",
// 		description: `[Upload virtual background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_01EJF3YFEWGT8YA0ZJ079JEDQE) for all users on the account to use. 

//  **Prerequisites:** 
// * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.

// **Scopes:** &#x60;account:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "form-data",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ file: z.string() }).partial().passthrough(),
// 			},
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				is_default: z.boolean(),
// 				name: z.string(),
// 				size: z.number().int(),
// 				type: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;120&#x60; &lt;br&gt;
//  * No file uploaded. Verify that a file has been uploaded. 
// * File size cannot exceed 15M. 
// * A maximum of 10 files are allowed for a user. 
// * File uploads must be in &quot;jpg/jpeg&quot;, &quot;gif&quot;, or &quot;png&quot; file format. 
// * Failed to upload file. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  This account does not exist or does not belong to you: {accountId} &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/accounts/:accountId/settings/virtual_backgrounds",
// 		description: `Delete an account&#x27;s existing virtual background files. 

//  **Prerequisites:** 
// * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.

// **Scopes:** &#x60;account:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "file_ids",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid parameter: file_ids &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  This account does not exist or does not belong to you: {accountId} &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/accounts/:accountId/trusted_domains",
// 		description: `Retrieve an account&#x27;s [trusted domains](https://support.zoom.us/hc/en-us/articles/203395207). To get the master account&#x27;s trusted domains, use the &#x60;me&#x60; value for the &#x60;accountId&#x60; path parameter. 

//  **Prerequisites:** 
// * The account must be a paid account.

// **Scopes:** &#x60;account:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "accountId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({ trusted_domains: z.array(z.string()) })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  Account does not exist: $accountId &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/app/notifications",
// 		description: `Send app notifications to the Zoom &quot;Activity Center&quot;. (Note: This API only supports OAuth 2.0.)

// **Scopes:** &#x60;app:notification:read&#x60;,&#x60;app:notification:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: Sendappnotifications_Body,
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 401,
// 				description: `**HTTP Status Code:** &#x60;401&#x60; &lt;br&gt;
//  Unauthorized 

//  **Error Code:** &#x60;124&#x60; &lt;br&gt;
//  Invalid access token. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 403,
// 				description: `**HTTP Status Code:** &#x60;403&#x60; &lt;br&gt;
//  Forbidden 

//  **Error Code:** &#x60;403&#x60; &lt;br&gt;
//  Authenticated user has not permitted access to the targeted resource. &lt;br&gt;
// **Error Code:** &#x60;403&#x60; &lt;br&gt;
//  App does not support notification feature. &lt;br&gt;
// **Error Code:** &#x60;403&#x60; &lt;br&gt;
//  Account does not support notification feature. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 500,
// 				description: `**HTTP Status Code:** &#x60;500&#x60; &lt;br&gt;
//  Internal Server Error 

//  **Error Code:** &#x60;500&#x60; &lt;br&gt;
//  Notification request sending failed. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/archive_files",
// 		description: `Get an account&#x27;s archived meeting or webinar files. 

//  Zoom&#x27;s [archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-indicators) lets account administrators set up an automated mechanism to record, collect, and archive meeting data to a third-party platform of their choice to satisfy FINRA or other compliance requirements. 

//  **Prerequisites:** 
// * The [**Meeting and Webinar Archiving** feature](https://support.zoom.us/hc/en-us/articles/4405656451213--Archiving-for-meetings-and-webinars) enabled for your account by [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).

// **Scopes:** &#x60;recording:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().datetime({ offset: true }).optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().datetime({ offset: true }).optional(),
// 			},
// 			{
// 				name: "query_date_type",
// 				type: "Query",
// 				schema: z
// 					.enum(["meeting_start_time", "archive_complete_time"])
// 					.optional()
// 					.default("meeting_start_time"),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string().datetime({ offset: true }),
// 				meetings: z.array(
// 					z
// 						.object({
// 							account_name: z.string(),
// 							archive_files: z.array(
// 								z
// 									.object({
// 										download_url: z.string(),
// 										file_extension: z.string(),
// 										file_path: z.string().optional(),
// 										file_size: z.number().int(),
// 										file_type: z.enum([
// 											"MP4",
// 											"M4A",
// 											"CHAT",
// 											"CC",
// 											"CHAT_MESSAGE",
// 										]),
// 										id: z.string(),
// 										individual: z.boolean(),
// 										participant_email: z.string().email().optional(),
// 										participant_join_time: z
// 											.string()
// 											.datetime({ offset: true }),
// 										participant_leave_time: z
// 											.string()
// 											.datetime({ offset: true }),
// 										recording_type: z.enum([
// 											"shared_screen_with_speaker_view",
// 											"audio_only",
// 											"chat_file",
// 											"closed_caption",
// 											"chat_message",
// 										]),
// 										status: z.enum(["completed", "processing", "failed"]),
// 										encryption_fingerprint: z.string(),
// 										number_of_messages: z.number().int().optional(),
// 										storage_location: z
// 											.enum([
// 												"US",
// 												"AU",
// 												"BR",
// 												"CA",
// 												"EU",
// 												"IN",
// 												"JP",
// 												"SG",
// 												"CH",
// 											])
// 											.optional(),
// 										auto_delete: z.boolean().optional(),
// 									})
// 									.passthrough()
// 							),
// 							complete_time: z
// 								.union([z.unknown(), z.literal("")])
// 								.datetime({ offset: true }),
// 							duration: z.number().int(),
// 							duration_in_second: z.number().int(),
// 							host_id: z.string(),
// 							id: z.number().int(),
// 							is_breakout_room: z.boolean(),
// 							meeting_type: z.enum(["internal", "external"]),
// 							parent_meeting_id: z.string().optional(),
// 							recording_count: z.number().int(),
// 							start_time: z.string().datetime({ offset: true }),
// 							timezone: z.string(),
// 							topic: z.string(),
// 							total_size: z.number().int(),
// 							type: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 								z.literal(8),
// 								z.literal(9),
// 								z.literal(100),
// 							]),
// 							uuid: z.string(),
// 							status: z.enum(["completed", "processing"]),
// 						})
// 						.passthrough()
// 				),
// 				next_page_token: z.string(),
// 				page_size: z.number().int(),
// 				to: z.string().datetime({ offset: true }),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;2001&#x60; &lt;br&gt;
//  Account does not exist: {accountId} &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/archive_files/:fileId",
// 		description: `Update an archived file&#x27;s auto-delete status. 

//  **Prerequisites:** 
// * [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003) must enable the [**Meeting and Webinar Archiving** feature](https://support.zoom.us/hc/en-us/articles/4405656451213--Archiving-for-meetings-and-webinars) for your account.
// * Open the disabling auto-delete feature in OP. Contact [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003) to open.

// **Scopes:** &#x60;recording:write&#x60;,&#x60;recording:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ auto_delete: z.boolean() }).passthrough(),
// 			},
// 			{
// 				name: "fileId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/archive_files/statistics",
// 		description: `Get statistics about an account&#x27;s archived meeting or webinar files. 

//  Zoom&#x27;s [archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-indicators) lets account administrators set up an automated mechanism to record, collect, and archive meeting data to a third-party platform of their choice to satisfy FINRA and other compliance requirements. 

//  **Prerequisites:** 
// * The [**Meeting and Webinar Archiving** feature](https://support.zoom.us/hc/en-us/articles/4405656451213--Archiving-for-meetings-and-webinars) enabled for your account by [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).

// **Scopes:** &#x60;recording:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().datetime({ offset: true }).optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().datetime({ offset: true }).optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string().datetime({ offset: true }),
// 				to: z.string().datetime({ offset: true }),
// 				total_records: z.number().int(),
// 				statistic_by_file_extension: z
// 					.object({
// 						mp4_file_count: z.number().int(),
// 						m4a_file_count: z.number().int(),
// 						txt_file_count: z.number().int(),
// 						json_file_count: z.number().int(),
// 						vtt_file_count: z.number().int(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				statistic_by_file_status: z
// 					.object({
// 						processing_file_count: z.number().int(),
// 						completed_file_count: z.number().int(),
// 						failed_file_count: z.number().int(),
// 					})
// 					.partial()
// 					.passthrough(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;2001&#x60; &lt;br&gt;
// Account does not exist: {accountId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/contacts/groups",
// 		description: `List [contact groups](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.

// **Prerequisite**: Pro or higher account.  
 


// **Scopes:** &#x60;contact_group:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(50).optional().default(10),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				groups: z.array(
// 					z
// 						.object({
// 							group_id: z.string(),
// 							group_name: z.string(),
// 							group_privacy: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 							]),
// 							description: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				next_page_token: z.string(),
// 				page_size: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid account: {accountId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/contacts/groups",
// 		description: `Use this API to create a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management).

// **Prerequisite**: Pro or higher account.  
 

// **Scopes:** &#x60;contact_group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: contactGroupCreate_Body,
// 			},
// 		],
// 		response: z
// 			.object({
// 				group_id: z.string(),
// 				group_name: z.string(),
// 				total_members: z.number().int(),
// 				group_privacy: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				description: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid account: {accountId}&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The maximum number of user member per request is 50.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The maximum number of group member per request is 3.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/contacts/groups/:groupId",
// 		description: `Get a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.

// **Prerequisite**: Pro or higher account.  
 


// **Scopes:** &#x60;contact_group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				group_id: z.string(),
// 				group_name: z.string(),
// 				total_members: z.number().int(),
// 				group_privacy: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				description: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid account: {accountId}&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// A group with this groupId: {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/contacts/groups/:groupId",
// 		description: `Use this API to delete a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).

// **Prerequisite**: Pro or higher account.  
 

// **Scopes:** &#x60;contact_group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid account,{accountId}.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// A group with this groupId: {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/contacts/groups/:groupId",
// 		description: `Update a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.

// **Prerequisite**: Pro or higher account.  
 


// **Scopes:** &#x60;contact_group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: contactGroupUpdate_Body,
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid account: {accountId}&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// A group with this groupId: {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/contacts/groups/:groupId/members",
// 		description: `List members in [contact groups](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.

// **Prerequisite**: Pro or higher account.  
 


// **Scopes:** &#x60;contact_group:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(50).optional().default(10),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				members: z.array(
// 					z
// 						.object({
// 							type: z.union([z.literal(1), z.literal(2)]),
// 							id: z.string(),
// 							name: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				next_page_token: z.string(),
// 				page_size: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid account: {accountId}&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// A group with this groupId: {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/contacts/groups/:groupId/members",
// 		description: `Use this API to add members to a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management).

// **Prerequisite**: Pro or higher account.  
 

// **Scopes:** &#x60;contact_group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: contactGroupMemberAdd_Body,
// 			},
// 		],
// 		response: z
// 			.object({ member_ids: z.array(z.string()) })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid account: {accountId}&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// A group with this groupId: {groupId} does not exist.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The maximum number of user member per request is 50.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The maximum number of group member per request is 3.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/contacts/groups/:groupId/members",
// 		description: `Use this API to remove members in a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).

// **Prerequisite**: Pro or higher account.  
 

// **Scopes:** &#x60;contact_group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "member_ids",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid account,{accountId}.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// A group with this groupId: {groupId} does not exist.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The maximum number of memberId is 20.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// A member with this memberId: {memberId} does not exist.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// A group must have at least one member.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/devices",
// 		description: `This API lets you list devices. 



// **Scopes:** &#x60;device:read:admin&#x60;,&#x60;device:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "search_text",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "platform_os",
// 				type: "Query",
// 				schema: z
// 					.enum(["win", "mac", "ipad", "iphone", "android", "linux"])
// 					.optional(),
// 			},
// 			{
// 				name: "is_enrolled_in_zdm",
// 				type: "Query",
// 				schema: z.boolean().optional().default(true),
// 			},
// 			{
// 				name: "device_type",
// 				type: "Query",
// 				schema: z
// 					.union([
// 						z.literal(-1),
// 						z.literal(0),
// 						z.literal(1),
// 						z.literal(2),
// 						z.literal(3),
// 						z.literal(4),
// 						z.literal(5),
// 						z.literal(6),
// 					])
// 					.optional()
// 					.default(-1),
// 			},
// 			{
// 				name: "device_vendor",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "device_model",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "device_status",
// 				type: "Query",
// 				schema: z
// 					.union([z.literal(-1), z.literal(0), z.literal(1)])
// 					.optional()
// 					.default(-1),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_size: z.number().int(),
// 				devices: z.array(
// 					z
// 						.object({
// 							device_id: z.string(),
// 							device_name: z.string(),
// 							mac_address: z.string(),
// 							serial_number: z.string(),
// 							vendor: z.string(),
// 							model: z.string(),
// 							platform_os: z.string(),
// 							app_version: z.string(),
// 							tag: z.string(),
// 							enrolled_in_zdm: z.boolean(),
// 							connected_to_zdm: z.boolean(),
// 							room_id: z.string(),
// 							room_name: z.string(),
// 							device_type: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 							]),
// 							skd_version: z.string(),
// 							device_status: z.union([
// 								z.literal(-1),
// 								z.literal(0),
// 								z.literal(1),
// 							]),
// 							last_online: z.string(),
// 							user_email: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;30055008&#x60; &lt;br&gt;
// no permission.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/devices",
// 		description: `This Device API lets you add a new device to Zoom Account. 

// **Scope:** &#x60;device:write:admin&#x60;   
 
//  **[Rate Limit Label](https://developers.zoom.us/docs/api/rest/rate-limits/):** &#x60;Medium&#x60;

// **Scopes:** &#x60;device:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: addDevice_Body,
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;30055001&#x60; &lt;br&gt;
// zoom room does not exist. 

// **Error Code:** &#x60;30055002&#x60; &lt;br&gt;
// required param can not be empty or null.

// **Error Code:** &#x60;30055003&#x60; &lt;br&gt;
// device type does not support.

// **Error Code:** &#x60;30055004&#x60; &lt;br&gt;
// model or vendor not exist.

// **Error Code:** &#x60;30055005&#x60; &lt;br&gt;
// tag length can not be more than 64.

// **Error Code:** &#x60;30055006&#x60; &lt;br&gt;
// device has already exist.

// **Error Code:** &#x60;30055007&#x60; &lt;br&gt;
// invalid mac address.

// **Error Code:** &#x60;30055008&#x60; &lt;br&gt;
// no permission.

// **Error Code:** &#x60;30055009&#x60; &lt;br&gt;
// email does not have plan.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/devices/:deviceId",
// 		description: `Retrieve a device&#x27;s details.

// **Scopes:** &#x60;device:read:admin&#x60;,&#x60;device:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "deviceId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				device_id: z.string(),
// 				device_name: z.string(),
// 				mac_address: z.string(),
// 				serial_number: z.string(),
// 				vendor: z.string(),
// 				model: z.string(),
// 				platform_os: z.string(),
// 				app_version: z.string(),
// 				tag: z.string(),
// 				enrolled_in_zdm: z.boolean(),
// 				connected_to_zdm: z.boolean(),
// 				room_id: z.string(),
// 				room_name: z.string(),
// 				device_type: z.union([
// 					z.literal(0),
// 					z.literal(1),
// 					z.literal(2),
// 					z.literal(3),
// 					z.literal(4),
// 					z.literal(5),
// 					z.literal(6),
// 				]),
// 				sdk_version: z.string(),
// 				device_status: z.union([z.literal(-1), z.literal(0), z.literal(1)]),
// 				last_online: z.string(),
// 				user_email: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;30055008&#x60; &lt;br&gt;
//  No permission. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;30055012&#x60; &lt;br&gt;
//  No found unified deviceId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/devices/:deviceId",
// 		description: `Delete a device from a Zoom account. 

// **Prerequisites:**
// * Device must be enrolled in ZMD (Zoom Device Management)

// **Scopes:** &#x60;device:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "deviceId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;30055008&#x60; &lt;br&gt;
//  no permission. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;30055012&#x60; &lt;br&gt;
//  no found unified deviceId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/devices/:deviceId",
// 		description: `Change device name. 

// **Prerequisites:**
// * Device must be enrolled in ZMD (Zoom Device Management)

// **Scopes:** &#x60;device:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: updateDevice_Body,
// 			},
// 			{
// 				name: "deviceId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;30055001&#x60; &lt;br&gt;
//  zoom room does not exist. . &lt;br&gt;
// **Error Code:** &#x60;30055002&#x60; &lt;br&gt;
//  required param can not be empty or null. &lt;br&gt;
// **Error Code:** &#x60;30055003&#x60; &lt;br&gt;
//  device type does not support. &lt;br&gt;
// **Error Code:** &#x60;30055011&#x60; &lt;br&gt;
//  device is not enrolled. &lt;br&gt;
// **Error Code:** &#x60;30055013&#x60; &lt;br&gt;
//  device not support this app. &lt;br&gt;
// **Error Code:** &#x60;30055014&#x60; &lt;br&gt;
//  room not support this app. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;30055012&#x60; &lt;br&gt;
//  Device does not exist: {deviceId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/devices/:deviceId/assignment",
// 		description: `This Device API lets you change device association from one Zoom Room to another. 

// **Prerequisites:**
// * Device must be enrolled in ZMD (Zoom Device Management) 



// **Scopes:** &#x60;device:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: changeDeviceAssociation_Body,
// 			},
// 			{
// 				name: "deviceId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;8500&#x60; &lt;br&gt;
// Device not enrolled in Zoom Device Management.

// **Error Code:** &#x60;8501&#x60; &lt;br&gt;
// Device does not support this app.

// **Error Code:** &#x60;8502&#x60; &lt;br&gt;
// Room does not support this app.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1012&#x60; &lt;br&gt;
// Room does not exist: {roomId}.

// **Error Code:** &#x60;8503&#x60; &lt;br&gt;
// Device does not exist: {deviceId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/groups",
// 		description: `List [groups](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.

// **Prerequisite**: Pro or higher account.  
 


// **Scopes:** &#x60;group:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		response: z
// 			.object({
// 				groups: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							name: z.string(),
// 							total_members: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with this {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/groups",
// 		description: `Use this API to create a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management). You can add a **maximum** of 100 groups in one account per day, and a maximum of 5000 groups in one account.

// If you enabled a new group via the user interface, you can also choose whether to display the group and set its privacy level.

// **Prerequisites**: 
// * A Pro or higher account

// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ name: z.string() }).partial().passthrough(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with the name &quot;{groupId}&quot; does not exist.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 409,
// 				description: `**HTTP Status Code:** &#x60;409&#x60; &lt;br&gt;
//  Conflict

// **Error Code:** &#x60;4132&#x60; &lt;br&gt;
// The group name &quot;{groupName}&quot; is already in use.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/groups/:groupId",
// 		description: `Get a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.

// **Prerequisite**: Pro, Business, or Education account  
 


// **Scopes:** &#x60;group:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				name: z.string(),
// 				total_members: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// Group does not belong to your account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with this {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/groups/:groupId",
// 		description: `Delete an entire [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-). **Prerequisites:** * A Pro, Business, or Education account.

// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Only available for Paid account,{accountId}. &lt;br&gt; Group cannot be deleted. Information Barriers policies have been applied to this group. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;4130&#x60; &lt;br&gt;
//  Group does not exist. &lt;br&gt; A group with this {groupId} does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/groups/:groupId",
// 		description: `Update a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.

// **Prerequisite**: Pro, Business, or Education account  
 


// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ name: z.string() }).partial().passthrough(),
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with this {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 409,
// 				description: `**HTTP Status Code:** &#x60;409&#x60; &lt;br&gt;
//  Conflict

// **Error Code:** &#x60;4132&#x60; &lt;br&gt;
// Group name {groupName} is already in use.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/groups/:groupId/admins",
// 		description: `Use this API to return a list of [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) administrators under your account.

// **Prerequisites:** 
// * A Pro, Business, or Education account

// **Scopes:** &#x60;group:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				admins: z.array(
// 					z
// 						.object({ email: z.string().email(), name: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 				next_page_token: z.string(),
// 				page_size: z.number().int(),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with the &quot;{groupId}&quot; ID does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/groups/:groupId/admins",
// 		description: `Use this API to add administrators to a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.

// **Prerequisites:** 
// * A Pro, Business, or Education account

// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: groupAdminsCreate_Body,
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with the &quot;{groupId}&quot; ID does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/groups/:groupId/admins/:userId",
// 		description: `Use this API to remove a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) administrator in a Zoom account.

// **Prerequisites:** 
// * A Pro, Business, or Education account

// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: userId,
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;4138&#x60; &lt;br&gt;
// That user is not an administrator for the group: &quot;{groupId}&quot;.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with the &quot;{groupId}&quot; ID does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/groups/:groupId/lock_settings",
// 		description: `Retrieve a [group&#x27;s](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) locked settings. 
// If you lock a setting, the group members will not be able to modify it individually. 

//  **Note:** The &#x60;force_pmi_jbh_password&#x60; field under meeting settings is to be deprecated on September 22, 2019. This field is replaced by another field that will provide the same functionality.

// **Prerequisite**: Pro, Business, or Education account  
 


// **Scopes:** &#x60;group:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "option",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.union([
// 			z
// 				.object({
// 					audio_conferencing: z
// 						.object({ toll_free_and_fee_based_toll_call: z.boolean() })
// 						.partial()
// 						.passthrough(),
// 					email_notification: z
// 						.object({
// 							alternative_host_reminder: z.boolean(),
// 							cancel_meeting_reminder: z.boolean(),
// 							cloud_recording_available_reminder: z.boolean(),
// 							jbh_reminder: z.boolean(),
// 							schedule_for_reminder: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					in_meeting: z
// 						.object({
// 							alert_guest_join: z.boolean(),
// 							allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 							allow_live_streaming: z.boolean(),
// 							allow_show_zoom_windows: z.boolean(),
// 							annotation: z.boolean(),
// 							attendee_on_hold: z.boolean(),
// 							auto_answer: z.boolean(),
// 							auto_generated_captions: z.boolean(),
// 							auto_saving_chat: z.boolean(),
// 							breakout_room: z.boolean(),
// 							chat: z.boolean(),
// 							meeting_question_answer: z.boolean(),
// 							closed_caption: z.boolean(),
// 							co_host: z.boolean(),
// 							custom_data_center_regions: z.boolean(),
// 							disable_screen_sharing_for_host_meetings: z.boolean(),
// 							disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 							e2e_encryption: z.boolean(),
// 							entry_exit_chime: z.string(),
// 							far_end_camera_control: z.boolean(),
// 							feedback: z.boolean(),
// 							file_transfer: z.boolean(),
// 							full_transcript: z.boolean(),
// 							group_hd: z.boolean(),
// 							webinar_group_hd: z.boolean(),
// 							language_interpretation: z.boolean(),
// 							sign_language_interpretation: z.boolean(),
// 							manual_captions: z.boolean(),
// 							meeting_reactions: z.boolean(),
// 							webinar_reactions: z.boolean(),
// 							meeting_survey: z.boolean(),
// 							non_verbal_feedback: z.boolean(),
// 							original_audio: z.boolean(),
// 							polling: z.boolean(),
// 							post_meeting_feedback: z.boolean(),
// 							private_chat: z.boolean(),
// 							remote_control: z.boolean(),
// 							remote_support: z.boolean(),
// 							request_permission_to_unmute: z.boolean(),
// 							save_caption: z.boolean(),
// 							save_captions: z.boolean(),
// 							screen_sharing: z.boolean(),
// 							sending_default_email_invites: z.boolean(),
// 							show_a_join_from_your_browser_link: z.boolean(),
// 							show_browser_join_link: z.boolean(),
// 							show_meeting_control_toolbar: z.boolean(),
// 							slide_control: z.boolean(),
// 							stereo_audio: z.boolean(),
// 							use_html_format_email: z.boolean(),
// 							virtual_background: z.boolean(),
// 							waiting_room: z.boolean(),
// 							webinar_chat: z.boolean(),
// 							webinar_live_streaming: z.boolean(),
// 							webinar_polling: z.boolean(),
// 							webinar_question_answer: z.boolean(),
// 							webinar_survey: z.boolean(),
// 							whiteboard: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					other_options: z
// 						.object({ blur_snapshot: z.boolean() })
// 						.partial()
// 						.passthrough(),
// 					recording: z
// 						.object({
// 							account_user_access_recording: z.boolean(),
// 							auto_delete_cmr: z.boolean(),
// 							auto_recording: z.boolean(),
// 							cloud_recording: z.boolean(),
// 							cloud_recording_download: z.boolean(),
// 							host_delete_cloud_recording: z.boolean(),
// 							ip_address_access_control: z
// 								.object({
// 									enable: z.boolean(),
// 									ip_addresses_or_ranges: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							local_recording: z.boolean(),
// 							prevent_host_access_recording: z.boolean(),
// 							recording_authentication: z.boolean(),
// 							archive: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					schedule_meeting: z
// 						.object({
// 							audio_type: z.boolean(),
// 							embed_password_in_join_link: z.boolean(),
// 							force_pmi_jbh_password: z.boolean(),
// 							host_video: z.boolean(),
// 							join_before_host: z.boolean(),
// 							meeting_authentication: z.boolean(),
// 							mute_upon_entry: z.boolean(),
// 							participant_video: z.boolean(),
// 							pstn_password_protected: z.boolean(),
// 							require_password_for_instant_meetings: z.boolean(),
// 							require_password_for_pmi_meetings: z.boolean(),
// 							require_password_for_scheduling_new_meetings: z.boolean(),
// 							upcoming_meeting_reminder: z.boolean(),
// 							continuous_meeting_chat: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					telephony: z
// 						.object({
// 							telephony_regions: z.boolean(),
// 							third_party_audio: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			z
// 				.object({
// 					meeting_security: z
// 						.object({
// 							approved_or_denied_countries_or_regions: z.boolean(),
// 							auto_security: z.boolean(),
// 							block_user_domain: z.boolean(),
// 							embed_password_in_join_link: z.boolean(),
// 							encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 							end_to_end_encrypted_meetings: z.boolean(),
// 							meeting_password: z.boolean(),
// 							only_authenticated_can_join_from_webclient: z.boolean(),
// 							phone_password: z.boolean(),
// 							pmi_password: z.boolean(),
// 							waiting_room: z.boolean(),
// 							webinar_password: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		]),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;4130&#x60; &lt;br&gt;
//  Group does not exist: {groupId} &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/groups/:groupId/lock_settings",
// 		description: `Update a [group&#x27;s](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) locked settings. If you lock a setting, the group members cannot modify it individually. 

//  **Note:** The &#x60;force_pmi_jbh_password&#x60; field under meeting settings is deprecated as of September 22, 2019. This field will be replaced by another field that will provide the same functionality.&amp;lt;/p&amp;gt;

// **Prerequisite**: Pro, Business, or Education account  
 


// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: groupLockedSettings_Body,
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "option",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Only available for paid account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;4130&#x60; &lt;br&gt;
//  This group does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/groups/:groupId/members",
// 		description: `List the members of a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.

// **Prerequisite**: Pro, Business, or Education account  
 


// **Scopes:** &#x60;group:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				members: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							first_name: z.string(),
// 							id: z.string(),
// 							last_name: z.string(),
// 							type: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int(),
// 				page_size: z.number().int(),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with this {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/groups/:groupId/members",
// 		description: `Use this API to add users to a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) in your account.

// **Prerequisites:** 
// * A Pro, Business, or Education account

// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: groupMembersCreate_Body,
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with this {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/groups/:groupId/members/:memberId",
// 		description: `Use this API to remove a user from a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) in an account.

// **Prerequisites:** 
// * A Pro, Business, or Education account

// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "memberId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// Group does not belong to this account:{accountId}.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with this {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/groups/:groupId/members/:memberId",
// 		description: `Use this API to perform either of the following tasks: 
// * Remove a group member from one group and move them to a different group. 
// * Set a user&#x27;s primary group. By default, the primary group is the first group that user is added to.

// If a user is a member of multiple groups, you can [assign the user a primary group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-#h_d07c7dcd-4fd8-485a-b5fe-a322e8d21c09). The user will use the primary group&#x27;s settings by default. However, if the user is a member of a group with locked settings, those group settings will remain locked to the user.

// **Prerequisites:** 
// * A Pro or higher account

// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: updateAGroupMember_Body,
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "memberId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for Paid account, {accountId}.&lt;br&gt;&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The target_group_id can not be empty.&lt;br&gt;&lt;br&gt;

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// Group does not belong to this account:{accountId}.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// A group with this {groupId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/groups/:groupId/settings",
// 		description: `Get settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-). 
// **Prerequisite**: Pro, Business, or Education account  
 


// **Scopes:** &#x60;group:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "option",
// 				type: "Query",
// 				schema: z
// 					.enum([
// 						"meeting_authentication",
// 						"recording_authentication",
// 						"meeting_security",
// 					])
// 					.optional(),
// 			},
// 			{
// 				name: "custom_query_fields",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.union([
// 			z
// 				.object({
// 					audio_conferencing: z
// 						.object({
// 							toll_free_and_fee_based_toll_call: z
// 								.object({
// 									allow_webinar_attendees_dial: z.boolean(),
// 									enable: z.boolean(),
// 									numbers: z
// 										.array(
// 											z
// 												.object({
// 													code: z.string(),
// 													country_code: z.string(),
// 													country_name: z.string(),
// 													display_number: z.string().max(30),
// 													number: z.string().max(30),
// 												})
// 												.partial()
// 												.passthrough()
// 										)
// 										.max(100),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					email_notification: z
// 						.object({
// 							alternative_host_reminder: z.boolean(),
// 							cancel_meeting_reminder: z.boolean(),
// 							cloud_recording_available_reminder: z.boolean(),
// 							jbh_reminder: z.boolean(),
// 							recording_available_reminder_alternative_hosts: z.boolean(),
// 							recording_available_reminder_schedulers: z.boolean(),
// 							schedule_for_reminder: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					in_meeting: z
// 						.object({
// 							alert_guest_join: z.boolean(),
// 							allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 							allow_live_streaming: z.boolean(),
// 							allow_participants_chat_with: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							]),
// 							allow_show_zoom_windows: z.boolean(),
// 							allow_users_save_chats: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 							]),
// 							annotation: z.boolean(),
// 							attendee_on_hold: z.boolean(),
// 							auto_answer: z.boolean(),
// 							auto_saving_chat: z.boolean(),
// 							breakout_room: z.boolean(),
// 							breakout_room_schedule: z.boolean(),
// 							chat: z.boolean(),
// 							meeting_question_answer: z.boolean(),
// 							closed_caption: z.boolean(),
// 							closed_captioning: z
// 								.object({
// 									auto_transcribing: z.boolean(),
// 									enable: z.boolean(),
// 									save_caption: z.boolean(),
// 									third_party_captioning_service: z.boolean(),
// 									view_full_transcript: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							co_host: z.boolean(),
// 							custom_data_center_regions: z.boolean(),
// 							custom_live_streaming_service: z.boolean(),
// 							custom_service_instructions: z.string(),
// 							data_center_regions: z.array(
// 								z.enum([
// 									"AU",
// 									"LA",
// 									"CA",
// 									"CN",
// 									"DE",
// 									"HK",
// 									"IN",
// 									"IE",
// 									"TY",
// 									"MX",
// 									"NL",
// 									"SG",
// 									"US",
// 								])
// 							),
// 							disable_screen_sharing_for_host_meetings: z.boolean(),
// 							disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 							e2e_encryption: z.boolean(),
// 							entry_exit_chime: z.string(),
// 							far_end_camera_control: z.boolean(),
// 							feedback: z.boolean(),
// 							file_transfer: z.boolean(),
// 							group_hd: z.boolean(),
// 							webinar_group_hd: z.boolean(),
// 							join_from_desktop: z.boolean(),
// 							join_from_mobile: z.boolean(),
// 							auto_generated_translation: z
// 								.object({
// 									language_item_pairList: z
// 										.object({
// 											trans_lang_config: z.array(
// 												z
// 													.object({
// 														speak_language: z
// 															.object({
// 																name: z.enum([
// 																	"Chinese (Simplified)",
// 																	"Dutch",
// 																	"English",
// 																	"French",
// 																	"German",
// 																	"Italian",
// 																	"Japanese",
// 																	"Korean",
// 																	"Portuguese",
// 																	"Russian",
// 																	"Spanish",
// 																	"Ukrainian",
// 																]),
// 																code: z.enum([
// 																	"zh",
// 																	"nl",
// 																	"en",
// 																	"fr",
// 																	"de",
// 																	"it",
// 																	"ja",
// 																	"ko",
// 																	"pt",
// 																	"ru",
// 																	"es",
// 																	"uk",
// 																]),
// 															})
// 															.partial()
// 															.passthrough(),
// 														translate_to: z
// 															.object({
// 																all: z.boolean(),
// 																language_config: z.array(
// 																	z
// 																		.object({
// 																			name: z.literal("English"),
// 																			code: z.literal("en"),
// 																		})
// 																		.partial()
// 																		.passthrough()
// 																),
// 															})
// 															.partial()
// 															.passthrough(),
// 													})
// 													.partial()
// 													.passthrough()
// 											),
// 											all: z.boolean(),
// 										})
// 										.partial()
// 										.passthrough(),
// 									enable: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							language_interpretation: z
// 								.object({
// 									custom_languages: z.array(z.string()),
// 									enable_language_interpretation_by_default: z.boolean(),
// 									allow_participants_to_speak_in_listening_channel: z.boolean(),
// 									allow_up_to_25_custom_languages_when_scheduling_meetings:
// 										z.boolean(),
// 									enable: z.boolean(),
// 									languages: z.array(z.string()),
// 								})
// 								.partial()
// 								.passthrough(),
// 							sign_language_interpretation: z
// 								.object({
// 									enable: z.boolean(),
// 									enable_sign_language_interpretation_by_default: z.boolean(),
// 									languages: z.array(
// 										z.enum([
// 											"American",
// 											"Chinese",
// 											"French",
// 											"German",
// 											"Japanese",
// 											"Russian",
// 											"Brazilian",
// 											"Spanish",
// 											"Mexican",
// 											"British",
// 										])
// 									),
// 									custom_languages: z.array(z.string()),
// 								})
// 								.partial()
// 								.passthrough(),
// 							live_streaming_facebook: z.boolean(),
// 							live_streaming_youtube: z.boolean(),
// 							manual_captioning: z
// 								.object({
// 									allow_to_type: z.boolean(),
// 									auto_generated_captions: z.boolean(),
// 									full_transcript: z.boolean(),
// 									manual_captions: z.boolean(),
// 									save_captions: z.boolean(),
// 									third_party_captioning_service: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							meeting_reactions: z.boolean(),
// 							meeting_reactions_emojis: z.enum(["all", "selected"]),
// 							allow_host_panelists_to_use_audible_clap: z.boolean(),
// 							webinar_reactions: z.boolean(),
// 							meeting_survey: z.boolean(),
// 							non_verbal_feedback: z.boolean(),
// 							only_host_view_device_list: z.boolean(),
// 							original_audio: z.boolean(),
// 							polling: z.boolean(),
// 							post_meeting_feedback: z.boolean(),
// 							private_chat: z.boolean(),
// 							record_play_own_voice: z.boolean(),
// 							remote_control: z.boolean(),
// 							remote_support: z.boolean(),
// 							request_permission_to_unmute: z.boolean(),
// 							screen_sharing: z.boolean(),
// 							sending_default_email_invites: z.boolean(),
// 							show_a_join_from_your_browser_link: z.boolean(),
// 							show_browser_join_link: z.boolean(),
// 							show_device_list: z.boolean(),
// 							show_meeting_control_toolbar: z.boolean(),
// 							slide_control: z.boolean(),
// 							stereo_audio: z.boolean(),
// 							unchecked_data_center_regions: z.array(z.string()),
// 							use_html_format_email: z.boolean(),
// 							virtual_background: z.boolean(),
// 							virtual_background_settings: z
// 								.object({
// 									allow_upload_custom: z.boolean(),
// 									allow_videos: z.boolean(),
// 									enable: z.boolean(),
// 									files: z.array(
// 										z
// 											.object({
// 												id: z.string(),
// 												is_default: z.boolean(),
// 												name: z.string(),
// 												size: z.number().int(),
// 												type: z.string(),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							waiting_room: z.boolean(),
// 							webinar_chat: z
// 								.object({
// 									allow_attendees_chat_with: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 									]),
// 									allow_auto_save_local_chat_file: z.boolean(),
// 									allow_panelists_chat_with: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									allow_panelists_send_direct_message: z.boolean(),
// 									allow_users_save_chats: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									default_attendees_chat_with: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									enable: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_live_streaming: z
// 								.object({
// 									custom_service_instructions: z.string(),
// 									enable: z.boolean(),
// 									live_streaming_reminder: z.boolean(),
// 									live_streaming_service: z.array(
// 										z.enum([
// 											"facebook",
// 											"workplace_by_facebook",
// 											"youtube",
// 											"custom_live_streaming_service",
// 										])
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							meeting_polling: z
// 								.object({
// 									enable: z.boolean(),
// 									advanced_polls: z.boolean(),
// 									manage_saved_polls_and_quizzes: z.boolean(),
// 									require_answers_to_be_anonymous: z.boolean(),
// 									allow_alternative_host_to_add_edit: z.boolean(),
// 									allow_host_to_upload_image: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_polling: z
// 								.object({
// 									enable: z.boolean(),
// 									advanced_polls: z.boolean(),
// 									manage_saved_polls_and_quizzes: z.boolean(),
// 									require_answers_to_be_anonymous: z.boolean(),
// 									allow_host_to_upload_image: z.boolean(),
// 									allow_alternative_host_to_add_edit: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_question_answer: z.boolean(),
// 							webinar_survey: z.boolean(),
// 							whiteboard: z.boolean(),
// 							who_can_share_screen: z.enum(["host", "all"]),
// 							who_can_share_screen_when_someone_is_sharing: z.enum([
// 								"host",
// 								"all",
// 							]),
// 							participants_share_simultaneously: z.enum(["multiple", "one"]),
// 							workplace_by_facebook: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					other_options: z
// 						.object({
// 							allow_users_contact_support_via_chat: z.boolean(),
// 							blur_snapshot: z.boolean(),
// 							webinar_registration_options: z
// 								.object({
// 									allow_host_to_enable_join_info: z.boolean(),
// 									allow_host_to_enable_social_share_buttons: z.boolean(),
// 									enable_custom_questions: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					profile: z
// 						.object({
// 							recording_storage_location: z
// 								.object({
// 									allowed_values: z.array(z.string()),
// 									value: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					recording: z
// 						.object({
// 							account_user_access_recording: z.boolean(),
// 							archive: z
// 								.object({
// 									enable: z.boolean(),
// 									settings: z
// 										.object({
// 											audio_file: z.boolean(),
// 											cc_transcript_file: z.boolean(),
// 											chat_file: z.boolean(),
// 											chat_with_sender_email: z.boolean(),
// 											video_file: z.boolean(),
// 											chat_with_direct_message: z.boolean(),
// 											archive_retention: z.union([
// 												z.literal(1),
// 												z.literal(2),
// 												z.literal(3),
// 												z.literal(4),
// 												z.literal(5),
// 												z.literal(6),
// 												z.literal(7),
// 												z.literal(8),
// 												z.literal(9),
// 												z.literal(10),
// 												z.literal(11),
// 												z.literal(12),
// 												z.literal(13),
// 												z.literal(14),
// 												z.literal(15),
// 												z.literal(16),
// 												z.literal(17),
// 												z.literal(18),
// 												z.literal(19),
// 												z.literal(20),
// 												z.literal(21),
// 												z.literal(22),
// 												z.literal(23),
// 												z.literal(24),
// 												z.literal(25),
// 												z.literal(26),
// 												z.literal(27),
// 												z.literal(28),
// 												z.literal(29),
// 												z.literal(30),
// 											]),
// 											action_when_archive_failed: z.union([
// 												z.literal(1),
// 												z.literal(2),
// 											]),
// 											notification_when_archiving_starts: z.enum([
// 												"participants",
// 												"guest",
// 											]),
// 											play_voice_prompt_when_archiving_starts: z.enum([
// 												"participants",
// 												"guest",
// 												"none",
// 											]),
// 										})
// 										.partial()
// 										.passthrough(),
// 									type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 								})
// 								.partial()
// 								.passthrough(),
// 							auto_recording: z.string(),
// 							cloud_recording: z.boolean(),
// 							cloud_recording_download: z.boolean(),
// 							cloud_recording_download_host: z.boolean(),
// 							host_delete_cloud_recording: z.boolean(),
// 							record_files_separately: z
// 								.object({
// 									active_speaker: z.boolean(),
// 									gallery_view: z.boolean(),
// 									shared_screen: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							display_participant_name: z.boolean(),
// 							recording_thumbnails: z.boolean(),
// 							optimize_recording_for_3rd_party_video_editor: z.boolean(),
// 							recording_highlight: z.boolean(),
// 							save_panelist_chat: z.boolean(),
// 							save_poll_results: z.boolean(),
// 							save_close_caption: z.boolean(),
// 							ip_address_access_control: z
// 								.object({
// 									enable: z.boolean(),
// 									ip_addresses_or_ranges: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							local_recording: z.boolean(),
// 							prevent_host_access_recording: z.boolean(),
// 							record_audio_file: z.boolean(),
// 							record_gallery_view: z.boolean(),
// 							record_speaker_view: z.boolean(),
// 							recording_audio_transcript: z.boolean(),
// 							smart_recording: z
// 								.object({
// 									create_recording_highlights: z.boolean(),
// 									create_smart_chapters: z.boolean(),
// 									create_next_steps: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							save_chat_text: z.boolean(),
// 							show_timestamp: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					schedule_meeting: z
// 						.object({
// 							audio_type: z.string(),
// 							embed_password_in_join_link: z.boolean(),
// 							force_pmi_jbh_password: z.boolean(),
// 							host_video: z.boolean(),
// 							join_before_host: z.boolean(),
// 							mute_upon_entry: z.boolean(),
// 							participant_video: z.boolean(),
// 							personal_meeting: z.boolean(),
// 							pstn_password_protected: z.boolean(),
// 							require_password_for_instant_meetings: z.boolean(),
// 							require_password_for_pmi_meetings: z.enum([
// 								"all",
// 								"jbh_only",
// 								"none",
// 							]),
// 							require_password_for_scheduled_meetings: z.boolean(),
// 							require_password_for_scheduling_new_meetings: z.boolean(),
// 							upcoming_meeting_reminder: z.boolean(),
// 							use_pmi_for_instant_meetings: z.boolean(),
// 							use_pmi_for_schedule_meetings: z.boolean(),
// 							always_display_zoom_meeting_as_topic: z
// 								.object({
// 									enable: z.boolean(),
// 									display_topic_for_scheduled_meetings: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							always_display_zoom_webinar_as_topic: z
// 								.object({
// 									enable: z.boolean(),
// 									display_topic_for_scheduled_webinars: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							continuous_meeting_chat: z
// 								.object({
// 									enable: z.boolean(),
// 									can_add_external_users: z.boolean(),
// 									auto_add_invited_external_users: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					telephony: z
// 						.object({
// 							audio_conference_info: z.string(),
// 							telephony_regions: z
// 								.object({ selection_values: z.string() })
// 								.partial()
// 								.passthrough(),
// 							third_party_audio: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					chat: z
// 						.object({
// 							share_files: z
// 								.object({
// 									enable: z.boolean(),
// 									share_option: z.enum(["anyone", "account", "organization"]),
// 								})
// 								.partial()
// 								.passthrough(),
// 							chat_emojis: z
// 								.object({
// 									enable: z.boolean(),
// 									emojis_option: z.enum(["all", "selected"]),
// 								})
// 								.partial()
// 								.passthrough(),
// 							record_voice_messages: z.boolean(),
// 							record_video_messages: z.boolean(),
// 							screen_capture: z.boolean(),
// 							create_public_channels: z.boolean(),
// 							create_private_channels: z.boolean(),
// 							share_links_in_chat: z.boolean(),
// 							schedule_meetings_in_chat: z.boolean(),
// 							set_retention_period_in_cloud: z
// 								.object({
// 									enable: z.boolean(),
// 									retention_period_of_direct_messages_and_group_conversation:
// 										z.string(),
// 									retention_period_of_channels: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							set_retention_period_in_local: z
// 								.object({
// 									enable: z.boolean(),
// 									retention_period_of_direct_messages_and_group_conversation:
// 										z.string(),
// 									retention_period_of_channels: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							allow_users_to_search_others_options: z.string(),
// 							allow_users_to_add_contacts: z
// 								.object({
// 									enable: z.boolean(),
// 									selected_option: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 										z.literal(4),
// 									]),
// 									user_email_addresses: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							allow_users_to_chat_with_others: z
// 								.object({
// 									enable: z.boolean(),
// 									selected_option: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 										z.literal(4),
// 									]),
// 									user_email_addresses: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							chat_etiquette_tool: z
// 								.object({
// 									enable: z.boolean(),
// 									policies: z.array(
// 										z
// 											.object({
// 												description: z.string(),
// 												id: z.string(),
// 												is_locked: z.boolean(),
// 												keywords: z.array(z.string()),
// 												name: z.string(),
// 												regular_expression: z.string(),
// 												status: z.enum(["activated", "deactivated"]),
// 												trigger_action: z.union([z.literal(1), z.literal(2)]),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							send_data_to_third_party_archiving_service: z
// 								.object({ enable: z.boolean() })
// 								.partial()
// 								.passthrough(),
// 							translate_messages: z.boolean(),
// 							search_and_send_animated_gif_images: z
// 								.object({ enable: z.boolean() })
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			z.union([
// 				z
// 					.object({
// 						allow_authentication_exception: z.boolean(),
// 						authentication_options: z.array(
// 							z
// 								.object({
// 									default_option: z.boolean(),
// 									domains: z.string(),
// 									id: z.string(),
// 									name: z.string(),
// 									type: z.enum([
// 										"enforce_login",
// 										"enforce_login_with_same_account",
// 										"enforce_login_with_domains",
// 									]),
// 									visible: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						meeting_authentication: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				z
// 					.object({
// 						authentication_options: z.array(
// 							z
// 								.object({
// 									default_option: z.boolean(),
// 									domains: z.string(),
// 									id: z.string(),
// 									name: z.string(),
// 									type: z.enum([
// 										"internally",
// 										"enforce_login",
// 										"enforce_login_with_domains",
// 									]),
// 									visible: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						recording_authentication: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 			]),
// 			z
// 				.object({
// 					meeting_security: z
// 						.object({
// 							auto_security: z.boolean(),
// 							block_user_domain: z.boolean(),
// 							block_user_domain_list: z.array(z.string()).max(20),
// 							chat_etiquette_tool: z
// 								.object({
// 									enable: z.boolean(),
// 									policies: z.array(
// 										z
// 											.object({
// 												description: z.string(),
// 												id: z.string(),
// 												is_locked: z.boolean(),
// 												keywords: z.array(z.string()),
// 												name: z.string(),
// 												regular_expression: z.string(),
// 												status: z.enum(["activated", "deactivated"]),
// 												trigger_action: z.union([z.literal(1), z.literal(2)]),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							embed_password_in_join_link: z.boolean(),
// 							encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 							end_to_end_encrypted_meetings: z.boolean(),
// 							meeting_password: z.boolean(),
// 							meeting_password_requirement: z
// 								.object({
// 									consecutive_characters_length: z.union([
// 										z.literal(0),
// 										z.literal(4),
// 										z.literal(5),
// 										z.literal(6),
// 										z.literal(7),
// 										z.literal(8),
// 									]),
// 									have_letter: z.boolean(),
// 									have_number: z.boolean(),
// 									have_special_character: z.boolean(),
// 									have_upper_and_lower_characters: z.boolean(),
// 									length: z.number().int(),
// 									only_allow_numeric: z.boolean(),
// 									weak_enhance_detection: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							only_authenticated_can_join_from_webclient: z.boolean(),
// 							phone_password: z.boolean(),
// 							pmi_password: z.boolean(),
// 							require_password_for_scheduled_meeting: z.boolean(),
// 							require_password_for_scheduled_webinar: z.boolean(),
// 							waiting_room: z.boolean(),
// 							waiting_room_settings: z
// 								.object({
// 									participants_to_place_in_waiting_room: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									users_who_can_admit_participants_from_waiting_room: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 									]),
// 									whitelisted_domains_for_waiting_room: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_password: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		]),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;4130&#x60; &lt;br&gt;
//  Group does not exist: {groupId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/groups/:groupId/settings",
// 		description: `Update settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-). 
//  **Note:**The &#x60;force_pmi_jbh_password&#x60; field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality
// **Prerequisite**: Pro, Business, or Education account  
  


// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: updateGroupSettings_Body,
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "option",
// 				type: "Query",
// 				schema: z
// 					.enum([
// 						"meeting_authentication",
// 						"recording_authentication",
// 						"meeting_security",
// 					])
// 					.optional(),
// 			},
// 		],
// 		response: z.object({}).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;4130&#x60; &lt;br&gt;
//  Group does not exist: {groupId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/groups/:groupId/settings/registration",
// 		description: `Get webinar registration settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-). 
// **Prerequisite**: Pro, Business, or Education account  
 


// **Scopes:** &#x60;group:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.literal("webinar").optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				options: z
// 					.object({
// 						host_email_notification: z.boolean(),
// 						close_registration: z.boolean(),
// 						allow_participants_to_join_from_multiple_devices: z.boolean(),
// 						show_social_share_buttons: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				questions: z.array(
// 					z
// 						.object({
// 							field_name: z.enum([
// 								"last_name",
// 								"address",
// 								"city",
// 								"country",
// 								"zip",
// 								"state",
// 								"phone",
// 								"industry",
// 								"org",
// 								"job_title",
// 								"purchasing_time_frame",
// 								"role_in_purchase_process",
// 								"no_of_employees",
// 								"comments",
// 							]),
// 							required: z.boolean(),
// 							selected: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				approve_type: z.union([z.literal(0), z.literal(1)]),
// 				custom_questions: z.array(
// 					z
// 						.object({
// 							title: z.string(),
// 							type: z.enum([
// 								"short",
// 								"single_dropdown",
// 								"single_radio",
// 								"multiple",
// 							]),
// 							required: z.boolean(),
// 							selected: z.boolean(),
// 							answers: z.array(z.string()),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// Group does not exist: {groupId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/groups/:groupId/settings/registration",
// 		description: `Update webinar registration settings for a [group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).&amp;lt;p style&#x3D;&amp;quot;background-color:#FEEFB3; color:#9F6000&amp;quot;&amp;gt;  
//  Note:&amp;lt;/b&amp;gt; The &#x60;force_pmi_jbh_password&#x60; field under meeting settings is planned to be deprecated on September 22, 2019. This field will be replaced by another field that will provide the same functionality.&amp;lt;/p&amp;gt;
// **Prerequisite**: Pro, Business, or Education account  
  


// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: accountSettingsRegistrationUpdate_Body,
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.literal("webinar").optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// Group does not exist: {groupId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/groups/:groupId/settings/virtual_backgrounds",
// 		description: `Use this API to [upload Virtual Background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_01EJF3YFEWGT8YA0ZJ079JEDQE) for all users in a group to use. 

//  **Prerequisites:** 
// * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.

// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "form-data",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ file: z.string() }).partial().passthrough(),
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				is_default: z.boolean(),
// 				name: z.string(),
// 				size: z.number().int(),
// 				type: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;120&#x60; &lt;br&gt;
//  No file uploaded, verify that a file has been uploaded.&lt;br&gt;
// File size cannot exceed 15M.&lt;br&gt;
// A maximum of 10 files are allowed for a user.&lt;br&gt;
// Only jpg/jpeg or png image file can be uploaded. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User not exist.&lt;br&gt;
// User {email} not exist or not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/groups/:groupId/settings/virtual_backgrounds",
// 		description: `Use this API to delete a group&#x27;s [Virtual Background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_01EJF3YFEWGT8YA0ZJ079JEDQE). 

//  **Prerequisites:** 
// * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.

// **Scopes:** &#x60;group:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "file_ids",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * Invalid parameter: {file_ids} 
// * Group member not found. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;4130&#x60; &lt;br&gt;
//  A group with this {groupId} does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/h323/devices",
// 		description: `A H.323 or SIP device can make a video call to a [Room Connector](https://support.zoom.us/hc/en-us/articles/201363273-Getting-Started-With-H-323-SIP-Room-Connector) to join a Zoom cloud meeting. A Room Connector can also call out to a H.323 or SIP device to join a Zoom cloud meeting. Use this API to list all H.323/SIP Devices on a Zoom account.  
   
 


// **Scopes:** &#x60;h323:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				devices: z.array(
// 					z
// 						.object({
// 							id: z.string().optional(),
// 							encryption: z.enum(["auto", "yes", "no"]),
// 							ip: z.string(),
// 							name: z.string().max(64),
// 							protocol: z.enum(["H.323", "SIP"]),
// 						})
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "post",
// 		path: "/h323/devices",
// 		description: `A H.323 or SIP device can make a video call to a [Room Connector](https://support.zoom.us/hc/en-us/articles/201363273-Getting-Started-With-H-323-SIP-Room-Connector) to join a Zoom cloud meeting. A Room Connector can also call out to a H.323 or SIP device to join a Zoom cloud meeting. Use this API to add a H.323/SIP device to your Zoom account  
   
 


// **Scopes:** &#x60;h323:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `H.323/SIP device.`,
// 				type: "Body",
// 				schema: deviceCreate_Body,
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string().optional(),
// 				encryption: z.enum(["auto", "yes", "no"]),
// 				ip: z.string(),
// 				name: z.string().max(64),
// 				protocol: z.enum(["H.323", "SIP"]),
// 			})
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;2020&#x60; &lt;br&gt;
// H.323 device&#x27;s display name:{displayName} is already in use.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/h323/devices/:deviceId",
// 		description: `A H.323 or SIP device can make a video call to a [Room Connector](https://support.zoom.us/hc/en-us/articles/201363273-Getting-Started-With-H-323-SIP-Room-Connector) to join a Zoom cloud meeting. A Room Connector can also call out to a H.323 or SIP device to join a Zoom cloud meeting. Use this API to delete a H.323/SIP device from your Zoom account.  
   
 


// **Scopes:** &#x60;h323:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "deviceId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/h323/devices/:deviceId",
// 		description: `A H.323 or SIP device can make a video call to a [Room Connector](https://support.zoom.us/hc/en-us/articles/201363273-Getting-Started-With-H-323-SIP-Room-Connector) to join a Zoom cloud meeting. A Room Connector can also call out to a H.323 or SIP device to join a Zoom cloud meeting. Use this API to edit information of a H.323/SIP device from your Zoom account.  
   
 


// **Scopes:** &#x60;h323:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: deviceCreate_Body,
// 			},
// 			{
// 				name: "deviceId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;2020&#x60; &lt;br&gt;
// H.323 device&#x27;s display name:{displayName} is already in use.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/im/groups",
// 		description: `List [IM directory groups](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).  
   
 


// **Scopes:** &#x60;imgroup:read:admin&#x60;,&#x60;imgroup:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		response: z
// 			.object({
// 				total_records: z.number().int(),
// 				groups: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							name: z.string(),
// 							total_members: z.number().int(),
// 							search_by_account: z.boolean(),
// 							search_by_domain: z.boolean(),
// 							search_by_ma_account: z.boolean(),
// 							type: z
// 								.enum(["normal", "shared", "restricted"])
// 								.default("normal"),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// Group does not exist:{groupId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/im/groups",
// 		description: `Create an IM directory group under your account.  
   
 


// **Scopes:** &#x60;imgroup:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: imGroupCreate_Body,
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// Group does not exist:{groupId}.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 409,
// 				description: `**HTTP Status Code:** &#x60;409&#x60; &lt;br&gt;
//  Conflict

// **Error Code:** &#x60;4132&#x60; &lt;br&gt;
// Group name {groupName} is already in use.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/im/groups/:groupId",
// 		description: `Retrieve an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.  
   
 
// Scopes: &#x60;imgroup:read:admin&#x60;  
 

 

// **Scopes:** &#x60;imgroup:read:admin&#x60;,&#x60;imgroup:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				name: z.string(),
// 				total_members: z.number().int(),
// 				search_by_account: z.boolean(),
// 				search_by_domain: z.boolean(),
// 				search_by_ma_account: z.boolean(),
// 				type: z.enum(["normal", "shared", "restricted"]).default("normal"),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// Group does not exist:{groupId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/im/groups/:groupId",
// 		description: `Delete an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.  
   
 
// Scopes: &#x60;imgroup:write:admin&#x60;  
 
 
 

// **Scopes:** &#x60;imgroup:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// Group does not exist:{groupId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/im/groups/:groupId",
// 		description: `Update an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.  
   
 


// **Scopes:** &#x60;imgroup:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: imGroupUpdate_Body,
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// Group does not exist:{groupId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/im/groups/:groupId/members",
// 		description: `List the members of an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).  
   
 


// **Scopes:** &#x60;imgroup:read:admin&#x60;,&#x60;imgroup:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				members: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							first_name: z.string(),
// 							id: z.string(),
// 							last_name: z.string(),
// 							type: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/im/groups/:groupId/members",
// 		description: `Add members to an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.  
   
 


// **Scopes:** &#x60;imgroup:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: groupMembersCreate_Body,
// 			},
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/im/groups/:groupId/members/:memberId",
// 		description: `Delete a member from an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.  
   
 
// Scopes: &#x60;imgroup:write:admin&#x60;  
 
 
 

// **Scopes:** &#x60;imgroup:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "groupId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "memberId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;4130&#x60; &lt;br&gt;
// Group does not exist:{groupId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/information_barriers/policies",
// 		description: `Return a list of all [Information Barriers](https://support.zoom.us/hc/en-us/articles/360040913711-Information-Barriers) policies and their information. 

//  **Prerequisites:** 
// * [Contact Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003) to enable Information Barriers for your account.

// **Scopes:** &#x60;information_barriers:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		response: z
// 			.object({
// 				policies: z.array(
// 					z
// 						.object({
// 							assigned_group_id: z.string(),
// 							id: z.string(),
// 							policy_name: z.string(),
// 							settings: z
// 								.object({
// 									complete_phone_calls: z.boolean(),
// 									file_transfer: z.boolean(),
// 									im: z.boolean(),
// 									in_meeting_chat: z.boolean(),
// 									meeting: z.boolean(),
// 									message_via_sms: z.boolean(),
// 									recording: z.boolean(),
// 									screen_share: z.boolean(),
// 								})
// 								.passthrough(),
// 							status: z.union([z.literal(0), z.literal(1)]),
// 							to_group_id: z.string(),
// 							type: z.union([
// 								z.literal(0),
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 							]),
// 						})
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.passthrough(),
// 	},
// 	{
// 		method: "post",
// 		path: "/information_barriers/policies",
// 		description: `Create a new Information Barrier policy. [Information Barriers](https://support.zoom.us/hc/en-us/articles/360040913711-Information-Barriers) help customers control communication policies and meet regulatory requirements at scale. Use information barriers to prevent specific groups of users who possess sensitive information from communicating with others who should not know this information. 

//  **Prerequisites:** 
// * [Contact Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003) to enable Information Barriers for your account.

// **Scopes:** &#x60;information_barriers:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Information Barriers object`,
// 				type: "Body",
// 				schema: InformationBarriersCreate_Body,
// 			},
// 		],
// 		response: z
// 			.object({
// 				assigned_group_id: z.string(),
// 				id: z.string(),
// 				policy_name: z.string(),
// 				settings: z
// 					.object({
// 						complete_phone_calls: z.boolean(),
// 						file_transfer: z.boolean(),
// 						im: z.boolean(),
// 						in_meeting_chat: z.boolean(),
// 						meeting: z.boolean(),
// 						message_via_sms: z.boolean(),
// 						recording: z.boolean(),
// 						screen_share: z.boolean(),
// 					})
// 					.passthrough(),
// 				status: z.union([z.literal(0), z.literal(1)]),
// 				to_group_id: z.string(),
// 				type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
// 			})
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  assigned_group_id and to_group_id are required fields and cannot be left empty or the same. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  assigned_group_id and to_group_id are required fields and cannot be left empty or the same. &lt;br&gt;
// **Error Code:** &#x60;7002&#x60; &lt;br&gt;
//  Unable to add this policy, as it would create duplicate policies which is not permitted. assigned_group_id: {0}, to_group_id: {1}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/information_barriers/policies/:policyId",
// 		description: `Return an [Information Barriers](https://support.zoom.us/hc/en-us/articles/360040913711-Information-Barriers) policy by its ID. 

//  **Prerequisites:** 
// * [Contact Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003) to enable Information Barriers for your account.

// **Scopes:** &#x60;information_barriers:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "policyId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				assigned_group_id: z.string(),
// 				id: z.string(),
// 				policy_name: z.string(),
// 				settings: z
// 					.object({
// 						complete_phone_calls: z.boolean(),
// 						file_transfer: z.boolean(),
// 						im: z.boolean(),
// 						in_meeting_chat: z.boolean(),
// 						meeting: z.boolean(),
// 						message_via_sms: z.boolean(),
// 						recording: z.boolean(),
// 						screen_share: z.boolean(),
// 					})
// 					.passthrough(),
// 				status: z.union([z.literal(0), z.literal(1)]),
// 				to_group_id: z.string(),
// 				type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
// 			})
// 			.passthrough(),
// 	},
// 	{
// 		method: "delete",
// 		path: "/information_barriers/policies/:policyId",
// 		description: `Remove an [Information Barrier](https://support.zoom.us/hc/en-us/articles/360040913711-Information-Barriers) policy.

//  **Prerequisites:** 
// * [Contact Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003) to enable Information Barriers for your account.

// **Scopes:** &#x60;information_barriers:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "policyId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;7001&#x60; &lt;br&gt;
//  Group policy not found: {0}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/information_barriers/policies/:policyId",
// 		description: `Update an [Information Barriers](https://support.zoom.us/hc/en-us/articles/360040913711-Information-Barriers) policy.

//  **Prerequisites:** 
// * [Contact Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003) to enable Information Barriers for your account.

// **Scopes:** &#x60;information_barriers:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Information about the updated Information Barriers policy.`,
// 				type: "Body",
// 				schema: InformationBarriersCreate_Body,
// 			},
// 			{
// 				name: "policyId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.object({}).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;7001&#x60; &lt;br&gt;
//  Group policy not found: {0}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/live_meetings/:meetingId/chat/messages/:messageId",
// 		description: `Delete a message in a live meeting, based on ID. 

// **Prerequisites:** 
// * Have Zoom enable the DLP for the in-meeting chat feature to use this API.

// **Scopes:** &#x60;meeting:write&#x60;,&#x60;meeting:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "messageId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "file_ids",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  * Only available for Paid accounts. 
// * DLP is not enabled. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting {meetingId} does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/live_meetings/:meetingId/chat/messages/:messageId",
// 		description: `Update a message in a live meeting, based on ID. **Prerequisites:** * Have Zoom enable the DLP for the in-meeting chat feature to use this API.

// **Scopes:** &#x60;meeting:write&#x60;,&#x60;meeting:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ message_content: z.string() }).passthrough(),
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "messageId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  DLP is not enabled on this account &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting {meetingId} does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/live_meetings/:meetingId/events",
// 		description: `Control [in-meeting](https://support.zoom.us/hc/en-us/articles/360021921032-In-Meeting-Controls) features. In-meeting controls include starting and stopping a recording, pausing and resuming a recording, and inviting participants. 

// **Note:** This API&#x27;s recording control only works for cloud recordings. It does **not** work for local recordings. 

// **Prerequisites:**
// * The meeting **must** be a live meeting **except** inviting participants to the meeting through [call out (phone)/(room system)]. 
// * Recording control: [Cloud recording](https://support.zoom.us/hc/en-us/articles/360060231472-Enabling-cloud-recording) must be enabled on the account. 
// * The user calling this API must be the host or an alternative meeting host.

 

// **Scopes:** &#x60;meeting:write&#x60;,&#x60;meeting:write:admin&#x60;,&#x60;meeting:master&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: inMeetingControl_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * Meeting id does not exist.&lt;br&gt;
// * Invalid meeting id.&lt;br&gt;
// * Meeting does not exist.&lt;br&gt;
// * No permission.&lt;br&gt;
// * This API is not available for this account, please contact Zoom support. &lt;br&gt;
// **Error Code:** &#x60;3309&#x60; &lt;br&gt;
//  Not enough cloud storage available. Either purchase additional storage or delete cloud recordings to free up storage. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting {meetingId} is not found or has expired. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 429,
// 				description: `**HTTP Status Code:** &#x60;429&#x60; &lt;br&gt;
//  undefined 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/live_webinars/:webinarId/chat/messages/:messageId",
// 		description: `Deletes a message in a live webinar based on ID. 

// **Prerequisites:** 
// * Have Zoom enable the DLP for the in-meeting chat feature to use this API.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "messageId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "file_ids",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  * Only available for paid accounts. * DLP is not enabled. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar  {webinarId} does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId",
// 		description: `Retrieve tha given meeting&#x27;s details. 
 
 


// **Scopes:** &#x60;meeting:read&#x60;,&#x60;meeting:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "show_previous_occurrences",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				assistant_id: z.string(),
// 				host_email: z.string().email(),
// 				host_id: z.string(),
// 				id: z.number().int(),
// 				uuid: z.string(),
// 				agenda: z.string().max(2000),
// 				created_at: z.string().datetime({ offset: true }),
// 				duration: z.number().int(),
// 				encrypted_password: z.string(),
// 				h323_password: z.string(),
// 				join_url: z.string(),
// 				chat_join_url: z.string(),
// 				occurrences: z.array(
// 					z
// 						.object({
// 							duration: z.number().int(),
// 							occurrence_id: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							status: z.enum(["available", "deleted"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				password: z.string(),
// 				pmi: z.string(),
// 				pre_schedule: z.boolean(),
// 				recurrence: z
// 					.object({
// 						end_date_time: z.string().datetime({ offset: true }).optional(),
// 						end_times: z.number().int().lte(60).optional().default(1),
// 						monthly_day: z.number().int().optional().default(1),
// 						monthly_week: z
// 							.union([
// 								z.literal(-1),
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							])
// 							.optional(),
// 						monthly_week_day: z
// 							.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 							])
// 							.optional(),
// 						repeat_interval: z.number().int().optional(),
// 						type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 						weekly_days: z
// 							.enum(["1", "2", "3", "4", "5", "6", "7"])
// 							.optional()
// 							.default("1"),
// 					})
// 					.passthrough(),
// 				settings: z
// 					.object({
// 						allow_multiple_devices: z.boolean(),
// 						alternative_hosts: z.string(),
// 						alternative_hosts_email_notification: z.boolean().default(true),
// 						alternative_host_update_polls: z.boolean(),
// 						approval_type: z
// 							.union([z.literal(0), z.literal(1), z.literal(2)])
// 							.default(2),
// 						approved_or_denied_countries_or_regions: z
// 							.object({
// 								approved_list: z.array(z.string()),
// 								denied_list: z.array(z.string()),
// 								enable: z.boolean(),
// 								method: z.enum(["approve", "deny"]),
// 							})
// 							.partial()
// 							.passthrough(),
// 						audio: z
// 							.enum(["both", "telephony", "voip", "thirdParty"])
// 							.default("both"),
// 						audio_conference_info: z.string().max(2048),
// 						authentication_domains: z.string(),
// 						authentication_exception: z.array(
// 							z
// 								.object({
// 									email: z.string().email(),
// 									name: z.string(),
// 									join_url: z.string(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						authentication_name: z.string(),
// 						authentication_option: z.string(),
// 						auto_recording: z.enum(["local", "cloud", "none"]).default("none"),
// 						breakout_room: z
// 							.object({
// 								enable: z.boolean(),
// 								rooms: z.array(
// 									z
// 										.object({
// 											name: z.string(),
// 											participants: z.array(z.string()),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						calendar_type: z.union([z.literal(1), z.literal(2)]),
// 						close_registration: z.boolean(),
// 						cn_meeting: z.boolean(),
// 						contact_email: z.string(),
// 						contact_name: z.string(),
// 						custom_keys: z
// 							.array(
// 								z
// 									.object({
// 										key: z.string().max(64),
// 										value: z.string().max(256),
// 									})
// 									.partial()
// 									.passthrough()
// 							)
// 							.max(10),
// 						email_notification: z.boolean().default(true),
// 						encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 						enforce_login: z.boolean(),
// 						enforce_login_domains: z.string(),
// 						focus_mode: z.boolean(),
// 						global_dial_in_countries: z.array(z.string()),
// 						global_dial_in_numbers: z.array(
// 							z
// 								.object({
// 									city: z.string(),
// 									country: z.string(),
// 									country_name: z.string(),
// 									number: z.string(),
// 									type: z.enum(["toll", "tollfree"]),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						host_video: z.boolean(),
// 						in_meeting: z.boolean(),
// 						jbh_time: z.union([z.literal(0), z.literal(5), z.literal(10)]),
// 						join_before_host: z.boolean(),
// 						language_interpretation: z
// 							.object({
// 								enable: z.boolean(),
// 								interpreters: z.array(
// 									z
// 										.object({
// 											email: z.string().email(),
// 											languages: z.string(),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						sign_language_interpretation: z
// 							.object({
// 								enable: z.boolean(),
// 								interpreters: z.array(
// 									z
// 										.object({
// 											email: z.string().email(),
// 											sign_language: z.string(),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						meeting_authentication: z.boolean(),
// 						mute_upon_entry: z.boolean(),
// 						participant_video: z.boolean(),
// 						private_meeting: z.boolean(),
// 						registrants_confirmation_email: z.boolean(),
// 						registrants_email_notification: z.boolean(),
// 						registration_type: z
// 							.union([z.literal(1), z.literal(2), z.literal(3)])
// 							.default(1),
// 						show_share_button: z.boolean(),
// 						use_pmi: z.boolean(),
// 						waiting_room: z.boolean(),
// 						watermark: z.boolean(),
// 						host_save_video_order: z.boolean(),
// 						internal_meeting: z.boolean(),
// 						continuous_meeting_chat: z
// 							.object({
// 								enable: z.boolean(),
// 								auto_add_invited_external_users: z.boolean(),
// 							})
// 							.partial()
// 							.passthrough(),
// 						participant_focused_meeting: z.boolean(),
// 						push_change_to_calendar: z.boolean(),
// 						resources: z.array(
// 							z
// 								.object({
// 									resource_type: z.literal("whiteboard"),
// 									resource_id: z.string(),
// 									permission_level: z
// 										.enum(["editor", "commenter", "viewer"])
// 										.default("editor"),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				start_time: z.string().datetime({ offset: true }),
// 				start_url: z.string(),
// 				status: z.enum(["waiting", "started"]),
// 				timezone: z.string(),
// 				topic: z.string(),
// 				tracking_fields: z.array(
// 					z
// 						.object({
// 							field: z.string(),
// 							value: z.string(),
// 							visible: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				type: z
// 					.union([z.literal(1), z.literal(2), z.literal(3), z.literal(8)])
// 					.default(2),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User not found on this account: {accountId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Cannot access webinar info. &lt;br&gt;
// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User not exist: {userId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting {meetingId} is not found or has expired. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/meetings/:meetingId",
// 		description: `Delete a meeting.  
   
 


// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "schedule_for_reminder",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 			{
// 				name: "cancel_meeting_reminder",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}.&lt;br&gt;

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access meeting information.&lt;br&gt;Invalid occurrence_id.&lt;br&gt;

// **Error Code:** &#x60;3002&#x60; &lt;br&gt;
// Sorry, you cannot delete this meeting since it is in progress.&lt;br&gt;

// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
// You are not the meeting host.&lt;br&gt;

// **Error Code:** &#x60;3007&#x60; &lt;br&gt;
// Sorry, you cannot delete this meeting since it has ended.&lt;br&gt;

// **Error Code:** &#x60;3018&#x60; &lt;br&gt;
// Not allowed to delete PMI.&lt;br&gt;

// **Error Code:** &#x60;3037&#x60; &lt;br&gt;
// Not allowed to delete PAC.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: {userId}.&lt;br&gt;

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting with this {meetingId} is not found or has expired.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/meetings/:meetingId",
// 		description: `Update meeting details.

// **Note** 
// * This API has a rate limit of **100 requests per day**. You can update a meeting for a maximum of **100 times within a 24-hour period**. 
// * The &#x60;start_time&#x60; value **must** be a future date. If the value is omitted or a date in the past, the API ignores this value and does **not** update any recurring meetings. 
// * The &#x60;recurrence&#x60; object is **required**.



// **Scopes:** &#x60;meeting:write&#x60;,&#x60;meeting:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Meeting`,
// 				type: "Body",
// 				schema: meetingUpdate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User not found on this account: {accountId} &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Cannot access meeting information. &lt;br&gt;
// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
//  You are not the meeting host. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  * Instant meetings do not support the &quot;schedule_for&quot; parameter. You cannot schedule an instant meeting for another user. 
// * Users in &quot;{0}&quot; have been blocked from joining meetings and webinars. To unblock them, go to the &quot;Settings&quot; page in the Zoom web portal and update the &quot;Block users in specific domains from joining meetings and webinars&quot; setting. 
// * Prescheduling is only available for scheduled meetings (type 2) and recurring meetings with no fixed time (type 3). 
// * You cannot schedule a meeting for &quot;{0}&quot;. 
// * You cannot update or delete meetings that have started using this method. 
// * Unable to schedule for a user outside of your account for a meeting with continuous chat. &lt;br&gt;
// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * The value that you entered for the schedule_for field is invalid. Enter a valid value and try again. &lt;br&gt; 
// * Invalid enforce_login_domains, separate multiple domains by semicolon. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: {userId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  A meeting with this {meetingId} is not found or has expired. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 429,
// 				description: `**HTTP Status Code:** &#x60;429&#x60; &lt;br&gt;
//  Too Many Requests 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/meetings/:meetingId/batch_polls",
// 		description: `Polls allow the meeting host to survey attendees. Create batch [polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) for a meeting.  
   
 

// **Prerequisites**:  
 
// * Host user type must be **Pro** or higher plan.
// * Polling feature must be enabled in the host&#x27;s account.
// * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.

// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Batch Meeting poll object`,
// 				type: "Body",
// 				schema: createBatchPolls_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				polls: z.array(
// 					z
// 						.object({
// 							anonymous: z.boolean(),
// 							id: z.string(),
// 							poll_type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 							questions: z.array(
// 								z
// 									.object({
// 										answer_max_character: z.number().int(),
// 										answer_min_character: z.number().int(),
// 										answer_required: z.boolean(),
// 										answers: z.array(z.string()),
// 										case_sensitive: z.boolean(),
// 										name: z.string(),
// 										prompts: z.array(
// 											z
// 												.object({
// 													prompt_question: z.string(),
// 													prompt_right_answers: z.array(z.string()),
// 												})
// 												.partial()
// 												.passthrough()
// 										),
// 										rating_max_label: z.string(),
// 										rating_max_value: z.number().int().lte(10),
// 										rating_min_label: z.string(),
// 										rating_min_value: z.number().int(),
// 										right_answers: z.array(z.string()),
// 										show_as_dropdown: z.boolean(),
// 										type: z.enum([
// 											"single",
// 											"multiple",
// 											"matching",
// 											"rank_order",
// 											"short_answer",
// 											"long_answer",
// 											"fill_in_the_blank",
// 											"rating_scale",
// 										]),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							status: z.enum(["notstart", "started", "ended", "sharing"]),
// 							title: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid Meeting ID.

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Meeting id does not exist.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access meeting information.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}.&lt;br&gt;

// **Error Code:** &#x60;4400&#x60; &lt;br&gt;
// * You can only add a maximum of 50 polls. 
// * Meeting polls disabled. To enable this feature, enable the &quot;Meeting Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. 
// * Advanced meeting polls disabled. To enable this feature, enable the &quot;Allow host to create advanced polls and quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/meetings/:meetingId/batch_registrants",
// 		description: `Register up to 30 registrants at once for a meeting that requires [registration](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).   
 

// **Prerequisites:**  
 
// * The meeting host must be a Licensed user.
// * The meeting must require registration and should be of type &#x60;2&#x60;, i.e., they should be scheduled meetings. Instant meetings and Recurring meetings are not supported by this API.  
   
 


// **Scopes:** &#x60;meeting:write&#x60;,&#x60;meeting:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: addBatchRegistrants_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				registrants: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							join_url: z.string(),
// 							registrant_id: z.string(),
// 							participant_pin_code: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;3038&#x60; &lt;br&gt;
// Meeting is over, you can not register now. If you have any questions, please contact the Meeting host.&lt;br&gt;&lt;br&gt;

// **Error Code:** &#x60;303&#x60; &lt;br&gt;
// This API can only be used for scheduled meeting(meeting type: 2). Batch registration is not supported for other meeting types.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}.&lt;br&gt;

// **Error Code:** &#x60;3043&#x60; &lt;br&gt;
// Meeting has reached maximum attendee capacity.&lt;br&gt;

// **Error Code:** &#x60;404&#x60; &lt;br&gt;
// Registration has not been enabled for this meeting: {meetingId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/invitation",
// 		description: `Retrieve the meeting invitation note for a specific meeting.

// **Scopes:** &#x60;meeting:read&#x60;,&#x60;meeting:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({ invitation: z.string(), sip_links: z.array(z.string()) })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/meetings/:meetingId/invite_links",
// 		description: `Create a batch of invitation links for a meeting.



// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: meetingInviteLinksCreate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				attendees: z.array(
// 					z
// 						.object({ join_url: z.string(), name: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// * Meeting ID does not exist. 
// * Invalid meeting ID.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access webinar information.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/jointoken/live_streaming",
// 		description: `Get a meeting&#x27;s join token to allow live streaming. The join token allows a recording bot implemented using Zoom meeting SDK to connect to a Zoom meeting &amp;quot;hosted by the issuer of the token&amp;quot;, and can call the streaming method automatically. It supports both regular live streaming, and raw streaming. 

// **Prerequisites:** 
// * A Pro or higher plan for the meeting host. 
// * The **Allow livestreaming of meetings** user setting enabled in the Zoom web portal.

// **Scopes:** &#x60;meeting_token:read:admin:live_streaming&#x60;,&#x60;meeting_token:read:live_streaming&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({ expire_in: z.literal(120), token: z.string() })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid meeting ID.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access Webinar information.

// **Error Code:** &#x60;124&#x60; &lt;br&gt;
// This API only supports OAuth2 authorization.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Not allowed to start live streaming. To use this feature, enable the &quot;Allow livestreaming of meetings&quot; setting in the &quot;Settings&quot; page of the Zoom web portal.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Meeting ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/jointoken/local_archiving",
// 		description: `Get a meeting&#x27;s archive token to allow local archiving. The archive token allows a meeting SDK app or bot to get archive permission to access the meeting&#x27;s raw audio and video media stream in real-time. 

// **Prerequisites:** 
// * A Pro or higher plan for the meeting host. 
// * The **Archive meetings and webinars** account setting enabled in the Zoom web portal.

// **Scopes:** &#x60;meeting_token:read:admin:local_archiving&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({ expire_in: z.literal(120), token: z.string() })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid meeting ID.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access Webinar information.

// **Error Code:** &#x60;124&#x60; &lt;br&gt;
// This API only supports OAuth2 authorization.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Not allowed to start local archiving. To use this feature, enable the &quot;Archive meetings and webinars&quot; setting in the &quot;Settings&quot; page of the Zoom web portal.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Meeting ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/jointoken/local_recording",
// 		description: `Get a meeting&#x27;s join token to allow for local recording. The join token lets a recording bot implemented using Zoom Meeting SDK to connect to a Zoom meeting. The recording bot can then automatically start locally recording. This supports both regular and raw local recording types. 

// **Prerequisites:** 
// * The **Local recording** user setting enabled in the Zoom web portal.

// **Scopes:** &#x60;meeting_token:read:admin:local_recording&#x60;,&#x60;meeting_token:read:local_recording&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({ expire_in: z.literal(120), token: z.string() })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid meeting ID.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access Webinar information.

// **Error Code:** &#x60;124&#x60; &lt;br&gt;
// This API only supports OAuth2 authorization.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Not allowed to start local recording. To use this feature, enable the &quot;Local Recording&quot; setting in the &quot;Settings&quot; page of the Zoom web portal.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Meeting ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/livestream",
// 		description: `Zoom allows users to [livestream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Get a meeting&#x27;s livestream configuration details such as Stream URL, Stream Key and Page URL.  
   
 
// **Prerequisites:**  
 
// * Meeting host must be a licensed user with a Pro or higher plan.  
 
// * Live streaming details must have been [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the meeting.  
   
 


// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				page_url: z.string(),
// 				stream_key: z.string(),
// 				stream_url: z.string(),
// 				resolution: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Missing meetingId&lt;br&gt;
// Invalid meetingId&lt;br&gt;&lt;br&gt;

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/meetings/:meetingId/livestream",
// 		description: `Update a meeting&#x27;s livestream information. Zoom allows users to [livestream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform.

// **Prerequisites:** 
// * Meeting host must have a Pro license.

// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Meeting`,
// 				type: "Body",
// 				schema: meetingLiveStreamUpdate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}.&lt;br&gt;

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access webinar info.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/meetings/:meetingId/livestream/status",
// 		description: `Zoom allows users to [livestream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Update the status of a meeting&#x27;s livestream.  
   
 
// **Prerequisites:**  
 
// * Meeting host must have a Pro license.  
 


// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Meeting`,
// 				type: "Body",
// 				schema: meetingLiveStreamStatusUpdate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access webinar info.&lt;br&gt;

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} does not exist.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/meeting_summary",
// 		description: `Displays information about a meeting summary.

// **Prerequisites**:
// * Host user type must be Pro or higher plan.
// * The Meeting Summary with AI Companion feature enabled in the host&#x27;s account.
// * E2ee meetings do not have summary feature enabled.

// **Scopes:** &#x60;meeting_summary:read:admin&#x60;,&#x60;meeting_summary:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				meeting_host_id: z.string(),
// 				meeting_host_email: z.string().email(),
// 				meeting_uuid: z.string(),
// 				meeting_id: z.number().int(),
// 				meeting_topic: z.string(),
// 				meeting_start_time: z.string().datetime({ offset: true }),
// 				meeting_end_time: z.string().datetime({ offset: true }),
// 				summary_start_time: z.string().datetime({ offset: true }),
// 				summary_end_time: z.string().datetime({ offset: true }),
// 				summary_created_time: z.string().datetime({ offset: true }),
// 				summary_last_modified_time: z.string().datetime({ offset: true }),
// 				summary_title: z.string(),
// 				summary_overview: z.string(),
// 				summary_details: z.array(
// 					z
// 						.object({ label: z.string(), summary: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 				next_steps: z.array(z.string()),
// 				edited_summary: z
// 					.object({
// 						summary_details: z.string(),
// 						next_steps: z.array(z.string()),
// 					})
// 					.partial()
// 					.passthrough(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/polls",
// 		description: `Polls allow the meeting host to survey attendees. List all [polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) of a meeting.  
   
 

// **Prerequisites**:  
 
// * Host user type must be **Pro** or higher plan.
// * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.

// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "anonymous",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				polls: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							status: z.enum(["notstart", "started", "ended", "sharing"]),
// 							anonymous: z.boolean(),
// 							poll_type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 							questions: z.array(
// 								z
// 									.object({
// 										answer_max_character: z.number().int(),
// 										answer_min_character: z.number().int().gte(1),
// 										answer_required: z.boolean(),
// 										answers: z.array(z.string()).min(2),
// 										case_sensitive: z.boolean(),
// 										name: z.string().max(255),
// 										prompts: z.array(
// 											z
// 												.object({
// 													prompt_question: z.string(),
// 													prompt_right_answers: z.array(z.string()),
// 												})
// 												.partial()
// 												.passthrough()
// 										),
// 										rating_max_label: z.string(),
// 										rating_max_value: z.number().int().lte(10),
// 										rating_min_label: z.string(),
// 										rating_min_value: z.number().int().gte(0),
// 										right_answers: z.array(z.string()).min(1),
// 										show_as_dropdown: z.boolean(),
// 										type: z.enum([
// 											"single",
// 											"multiple",
// 											"matching",
// 											"rank_order",
// 											"short_answer",
// 											"long_answer",
// 											"fill_in_the_blank",
// 											"rating_scale",
// 										]),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							title: z.string().max(64),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;4400&#x60; &lt;br&gt;
// Meeting polls disabled. To enable this feature, enable the &quot;Meeting Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;404&#x60; &lt;br&gt;
// Meeting Poll not found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/meetings/:meetingId/polls",
// 		description: `Polls allow the meeting host to survey attendees. Create a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) for a meeting.  
   
 

// **Prerequisites**:  
 
// * Host user type must be **Pro** or higher plan.
// * Polling feature must be enabled in the host&#x27;s account.
// * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.

// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Meeting poll object`,
// 				type: "Body",
// 				schema: meetingPollCreate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				status: z.enum(["notstart", "started", "ended", "sharing"]),
// 				anonymous: z.boolean(),
// 				poll_type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				questions: z.array(
// 					z
// 						.object({
// 							answer_max_character: z.number().int(),
// 							answer_min_character: z.number().int().gte(1),
// 							answer_required: z.boolean(),
// 							answers: z.array(z.string()).min(2),
// 							case_sensitive: z.boolean(),
// 							name: z.string().max(255),
// 							prompts: z.array(
// 								z
// 									.object({
// 										prompt_question: z.string(),
// 										prompt_right_answers: z.array(z.string()),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							rating_max_label: z.string(),
// 							rating_max_value: z.number().int().lte(10),
// 							rating_min_label: z.string(),
// 							rating_min_value: z.number().int().gte(0),
// 							right_answers: z.array(z.string()).min(1),
// 							show_as_dropdown: z.boolean(),
// 							type: z.enum([
// 								"single",
// 								"multiple",
// 								"matching",
// 								"rank_order",
// 								"short_answer",
// 								"long_answer",
// 								"fill_in_the_blank",
// 								"rating_scale",
// 							]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				title: z.string().max(64),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;4400&#x60; &lt;br&gt;
// * Meeting polls disabled. To enable this feature, enable the &quot;Meeting Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. 
// * Advanced meeting polls disabled. To enable this feature, enable the &quot;Allow host to create advanced polls and quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;404&#x60; &lt;br&gt;
// Meeting not found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/polls/:pollId",
// 		description: `Polls allow the meeting host to survey attendees. Retrieve information about a specific meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings).  
   
 


// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "pollId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				status: z.enum(["notstart", "started", "ended", "sharing"]),
// 				anonymous: z.boolean(),
// 				poll_type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				questions: z.array(
// 					z
// 						.object({
// 							answer_max_character: z.number().int(),
// 							answer_min_character: z.number().int().gte(1),
// 							answer_required: z.boolean(),
// 							answers: z.array(z.string()).min(2),
// 							case_sensitive: z.boolean(),
// 							name: z.string().max(255),
// 							prompts: z.array(
// 								z
// 									.object({
// 										prompt_question: z.string(),
// 										prompt_right_answers: z.array(z.string()),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							rating_max_label: z.string(),
// 							rating_max_value: z.number().int().lte(10),
// 							rating_min_label: z.string(),
// 							rating_min_value: z.number().int().gte(0),
// 							right_answers: z.array(z.string()).min(1),
// 							show_as_dropdown: z.boolean(),
// 							type: z.enum([
// 								"single",
// 								"multiple",
// 								"matching",
// 								"rank_order",
// 								"short_answer",
// 								"long_answer",
// 								"fill_in_the_blank",
// 								"rating_scale",
// 							]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				title: z.string().max(64),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;4400&#x60; &lt;br&gt;
// Meeting polls disabled. To enable this feature, enable the &quot;Meeting Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;404&#x60; &lt;br&gt;
// Meeting Poll not found.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/meetings/:meetingId/polls/:pollId",
// 		description: `Polls allow the meeting host to survey attendees. Update information of a specific meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings)  
   
 


// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Meeting Poll`,
// 				type: "Body",
// 				schema: meetingPollCreate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "pollId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;4400&#x60; &lt;br&gt;
// * Meeting polls disabled. To enable this feature, enable the &quot;Meeting Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. 
// * Advanced meeting polls disabled. To enable this feature, enable the &quot;Allow host to create advanced polls and quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;404&#x60; &lt;br&gt;
// Meeting Poll not found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/meetings/:meetingId/polls/:pollId",
// 		description: `Polls allow the meeting host to survey attendees. Delete a meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings).  
 
// **Prerequisites**:  
 
// * Host user type must be **Pro**.
// * Polling feature should be enabled in the host&#x27;s account.
// * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.

// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "pollId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;4400&#x60; &lt;br&gt;
// Meeting polls disabled. To enable this feature, enable the &quot;Meeting Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;404&#x60; &lt;br&gt;
// Meeting Poll not found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/recordings",
// 		description: `Returns all of a meeting&#x27;s [recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording#h_7420acb5-1897-4061-87b4-5b76e99c03b4).

//  Use the &#x60;download_url&#x60; property listed in the response to download the recording files.  To access a passcode-protected cloud recording, send the user&#x27;s [OAuth access token](https://developers.zoom.us/docs/integrations/oauth/) as a Bearer token in the Authorization header. 
 
//  Example:  &#x60;curl -H &#x27;Authorization: Bearer &lt;ACCESS_TOKEN&gt;&#x27; https://{{base-domain}}/rec/archive/download/xyz&#x60;  

// **Scopes:** &#x60;recording:read&#x60;,&#x60;phone_recording:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "include_fields",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "ttl",
// 				type: "Query",
// 				schema: z.number().int().gte(0).lte(604800).optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				account_id: z.string(),
// 				duration: z.number().int(),
// 				host_id: z.string(),
// 				id: z.number().int(),
// 				recording_count: z.number().int(),
// 				start_time: z.string().datetime({ offset: true }),
// 				topic: z.string(),
// 				total_size: z.number().int(),
// 				type: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "99"]),
// 				uuid: z.string(),
// 				recording_play_passcode: z.string(),
// 				recording_files: z.array(
// 					z
// 						.object({
// 							deleted_time: z.string(),
// 							download_url: z.string(),
// 							file_path: z.string(),
// 							file_size: z.number(),
// 							file_type: z.enum([
// 								"MP4",
// 								"M4A",
// 								"CHAT",
// 								"TRANSCRIPT",
// 								"CSV",
// 								"TB",
// 								"CC",
// 								"CHAT_MESSAGE",
// 								"SUMMARY",
// 							]),
// 							file_extension: z.enum([
// 								"MP4",
// 								"M4A",
// 								"TXT",
// 								"VTT",
// 								"CSV",
// 								"JSON",
// 								"JPG",
// 							]),
// 							id: z.string(),
// 							meeting_id: z.string(),
// 							play_url: z.string(),
// 							recording_end: z.string(),
// 							recording_start: z.string(),
// 							recording_type: z.enum([
// 								"shared_screen_with_speaker_view(CC)",
// 								"shared_screen_with_speaker_view",
// 								"shared_screen_with_gallery_view",
// 								"active_speaker",
// 								"gallery_view",
// 								"shared_screen",
// 								"audio_only",
// 								"audio_transcript",
// 								"chat_file",
// 								"poll",
// 								"host_video",
// 								"closed_caption",
// 								"timeline",
// 								"thumbnail",
// 								"audio_interpretation",
// 								"summary",
// 								"summary_next_steps",
// 								"summary_smart_chapters",
// 								"sign_interpretation",
// 								"production_studio",
// 							]),
// 							status: z.literal("completed"),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				download_access_token: z.string(),
// 				password: z.string(),
// 				participant_audio_files: z.array(
// 					z
// 						.object({
// 							download_url: z.string(),
// 							file_name: z.string(),
// 							file_path: z.string(),
// 							file_size: z.number(),
// 							file_type: z.string(),
// 							id: z.string(),
// 							play_url: z.string(),
// 							recording_end: z.string().datetime({ offset: true }),
// 							recording_start: z.string().datetime({ offset: true }),
// 							status: z.literal("completed"),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User not found on this account: {accountId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User &quot;{userId}&quot; does not exist or does not belong to this account. &lt;br&gt;
// **Error Code:** &#x60;3301&#x60; &lt;br&gt;
//  There is no recording for this meeting. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/meetings/:meetingId/recordings",
// 		description: `Delete all recording files of a meeting.  
   
 

// **Prerequisites**:
// * Cloud Recording should be enabled on the user&#x27;s account.  
 


// **Scopes:** &#x60;recording:write:admin&#x60;,&#x60;recording:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "action",
// 				type: "Query",
// 				schema: z.enum(["trash", "delete"]).optional().default("trash"),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}. &lt;br/&gt;

// **Error Code:** &#x60;3332&#x60; &lt;br&gt;
// This recording was selected for a simulive webinar. You cannot delete or trash it.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} does not exist or does not belong to this account.&lt;br&gt;

// **Error Code:** &#x60;3301&#x60; &lt;br&gt;
// There is no recording for this meeting.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/meetings/:meetingId/recordings/:recordingId",
// 		description: `Delete a specific recording file from a meeting.&amp;lt;p style&#x3D;&amp;quot;background-color:#e1f5fe; color:#01579b; padding:8px&amp;quot;&amp;gt; &amp;lt;b&amp;gt;Note:&amp;lt;/b&amp;gt; To use this API, you must enable the &amp;lt;b&amp;gt;The host can delete cloud recordings&amp;lt;/b&amp;gt; setting. You can find this setting in the &amp;lt;b&amp;gt;Recording&amp;lt;/b&amp;gt; tab of the &amp;lt;b&amp;gt;Settings&amp;lt;/b&amp;gt; interface in the [Zoom web portal](https://zoom.us/).&amp;lt;/p&amp;gt;



// **Scopes:** &#x60;recording:write:admin&#x60;,&#x60;recording:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "recordingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "action",
// 				type: "Query",
// 				schema: z.enum(["trash", "delete"]).optional().default("trash"),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}.&lt;br&gt;

// **Error Code:** &#x60;3303&#x60; &lt;br&gt;
// You can not delete an uncompleted meeting. &lt;br/&gt;

// **Error Code:** &#x60;3332&#x60; &lt;br&gt;
// This recording was selected for a simulive webinar. You cannot delete or trash it. &lt;br&gt;

// **Error Code:** &#x60;3332&#x60; &lt;br&gt;
// Unable to delete this file because this recording is being used for Zoom IQ for Sales.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} does not exist or does not belong to this account.&lt;br&gt;

// **Error Code:** &#x60;3301&#x60; &lt;br&gt;
// There is no recording for this meeting.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/meetings/:meetingId/recordings/:recordingId/status",
// 		description: `Zoom allows users to recover recordings from trash for up to 30 days from the deletion date. Use this API to recover a single recording file from the meeting.  
 


// **Scopes:** &#x60;recording:write:admin&#x60;,&#x60;recording:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: recordingStatusUpdateOne_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "recordingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}.

// **Error Code:** &#x60;3309&#x60; &lt;br&gt;
// Not enough cloud storage available. Either purchase additional storage or delete cloud recordings to free up storage.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} does not exist or does not belong to this account.&lt;br&gt;

// **Error Code:** &#x60;3301&#x60; &lt;br&gt;
// There is no recording for this meeting.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/recordings/analytics_details",
// 		description: `Use this API to return a meeting recording&#x27;s [analytics details](https://support.zoom.us/hc/en-us/articles/205347605-Managing-cloud-recordings#h_0b665029-ce74-4849-9794-d1aa0320d163). **Maximum duration: 1 Month**. To access a password-protected cloud recording, send the user&#x27;s [OAuth access token](https://developers.zoom.us/docs/integrations/oauth/) as a Bearer token in the Authorization header. For example, 

//  &#x60;curl -H &amp;quot;Authorization: Bearer &amp;lt;ACCESS_TOKEN&amp;gt;&amp;quot; https://{{base-domain}}/rec/archive/download/xyz&#x60; 

 

// **Scopes:** &#x60;recording:read:admin&#x60;,&#x60;recording:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["by_view", "by_download"]).optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				next_page_token: z.string(),
// 				page_size: z.number().int().lte(300),
// 				total_records: z.number().int(),
// 				analytics_details: z.array(
// 					z
// 						.object({
// 							date_time: z.string().datetime({ offset: true }),
// 							name: z.string(),
// 							email: z.string(),
// 							duration: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User not found on this account: {accountId}

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User &quot;{userId}&quot; does not exist or does not belong to this account.

// **Error Code:** &#x60;3301&#x60; &lt;br&gt;
// There is no recording for this meeting.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/recordings/analytics_summary",
// 		description: `Use this API to return a meeting recording&#x27;s [analytics summary](https://support.zoom.us/hc/en-us/articles/205347605-Managing-cloud-recordings#h_0b665029-ce74-4849-9794-d1aa0320d163). **Maximum duration: 1 Month**. To access a password-protected cloud recording, send the user&#x27;s [OAuth access token](https://developers.zoom.us/docs/integrations/oauth/) as a Bearer token in the Authorization header. For example, 

//  &#x60;curl -H &amp;quot;Authorization: Bearer &amp;lt;ACCESS_TOKEN&amp;gt;&amp;quot; https://{{base-domain}}/rec/archive/download/xyz&#x60; 

 

// **Scopes:** &#x60;recording:read:admin&#x60;,&#x60;recording:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				analytics_summary: z.array(
// 					z
// 						.object({
// 							date: z.string(),
// 							views_total_count: z.number().int(),
// 							downloads_total_count: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User not found on this account: {accountId}

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User &quot;{userId}&quot; does not exist or does not belong to this account.

// **Error Code:** &#x60;3301&#x60; &lt;br&gt;
// There is no recording for this meeting.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/recordings/registrants",
// 		description: `Use this API to list registrants of a past meeting&#x27;s [on-demand cloud recordings](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-recordings). Users must [register](/docs/api-reference/zoom-api/methods#operation/meetingRecordingRegistrantCreate) to view the recordings. 

 

// **Scopes:** &#x60;recording:read:admin&#x60;,&#x60;recording:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "status",
// 				type: "Query",
// 				schema: z
// 					.enum(["pending", "approved", "denied"])
// 					.optional()
// 					.default("approved"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				registrants: z.array(
// 					z
// 						.object({
// 							id: z.string().optional(),
// 							address: z.string().optional(),
// 							city: z.string().optional(),
// 							comments: z.string().optional(),
// 							country: z.string().optional(),
// 							custom_questions: z
// 								.array(
// 									z
// 										.object({ title: z.string(), value: z.string().max(128) })
// 										.partial()
// 										.passthrough()
// 								)
// 								.optional(),
// 							email: z.string().max(128).email(),
// 							first_name: z.string().max(64),
// 							industry: z.string().optional(),
// 							job_title: z.string().optional(),
// 							last_name: z.string().max(64).optional(),
// 							no_of_employees: z
// 								.enum([
// 									"",
// 									"1-20",
// 									"21-50",
// 									"51-100",
// 									"101-250",
// 									"251-500",
// 									"501-1,000",
// 									"1,001-5,000",
// 									"5,001-10,000",
// 									"More than 10,000",
// 								])
// 								.optional(),
// 							org: z.string().optional(),
// 							phone: z.string().optional(),
// 							purchasing_time_frame: z
// 								.enum([
// 									"",
// 									"Within a month",
// 									"1-3 months",
// 									"4-6 months",
// 									"More than 6 months",
// 									"No timeframe",
// 								])
// 								.optional(),
// 							role_in_purchase_process: z
// 								.enum([
// 									"",
// 									"Decision Maker",
// 									"Evaluator/Recommender",
// 									"Influencer",
// 									"Not involved",
// 								])
// 								.optional(),
// 							state: z.string().optional(),
// 							status: z.enum(["approved", "denied", "pending"]).optional(),
// 							zip: z.string().optional(),
// 						})
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/meetings/:meetingId/recordings/registrants",
// 		description: `Cloud Recordings of past Zoom Meetings can be made [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings). Users should be [registered](/docs/api-reference/zoom-api/methods#operation/meetingRecordingRegistrantCreate) to view these recordings.

// Use this API to register a user to gain access to **On-demand Cloud Recordings** of a past meeting.  
 


// **Scopes:** &#x60;recording:write:admin&#x60;,&#x60;recording:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: meetingRecordingRegistrantCreate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				registrant_id: z.string(),
// 				share_url: z.string(),
// 				topic: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/recordings/registrants/questions",
// 		description: `For [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) meeting recordings, you can include fields with questions that will be shown to registrants when they register to view the recording.

// Use this API to retrieve a list of questions that are displayed for users to complete when registering to view the recording of a specific meeting.  
 


// **Scopes:** &#x60;recording:read:admin&#x60;,&#x60;recording:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				custom_questions: z.array(
// 					z
// 						.object({
// 							answers: z.array(z.string()),
// 							required: z.boolean(),
// 							title: z.string(),
// 							type: z.enum(["short", "single", "multiple"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				questions: z.array(
// 					z
// 						.object({
// 							field_name: z.enum([
// 								"last_name",
// 								"address",
// 								"city",
// 								"country",
// 								"zip",
// 								"state",
// 								"phone",
// 								"industry",
// 								"org",
// 								"job_title",
// 								"purchasing_time_frame",
// 								"role_in_purchase_process",
// 								"no_of_employees",
// 								"comments",
// 							]),
// 							required: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/meetings/:meetingId/recordings/registrants/questions",
// 		description: `For [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) meeting recordings, you can include fields with questions that will be shown to registrants when they register to view the recording.

// Use this API to update registration questions that are to be answered by users while registering to view a recording.  
 


// **Scopes:** &#x60;recording:write:admin&#x60;,&#x60;recording:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Recording Registrant Questions`,
// 				type: "Body",
// 				schema: recordingRegistrantQuestionUpdate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/meetings/:meetingId/recordings/registrants/status",
// 		description: `A registrant can either be approved or denied from viewing the [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) recording. 
// Use this API to update a registrant&#x27;s status.



// **Scopes:** &#x60;recording:write:admin&#x60;,&#x60;recording:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: meetingRecordingRegistrantStatus_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/recordings/settings",
// 		description: `Retrieves settings applied to a meeting&#x27;s [Cloud Recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording).  
   
 


// **Scopes:** &#x60;recording:read:admin&#x60;,&#x60;recording:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				approval_type: z.union([z.literal(0), z.literal(1), z.literal(2)]),
// 				authentication_domains: z.string(),
// 				authentication_option: z.string(),
// 				on_demand: z.boolean(),
// 				password: z.string().min(8).max(10),
// 				recording_authentication: z.boolean(),
// 				send_email_to_host: z.boolean(),
// 				share_recording: z.enum(["publicly", "internally", "none"]),
// 				show_social_share_buttons: z.boolean(),
// 				topic: z.string(),
// 				viewer_download: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/meetings/:meetingId/recordings/settings",
// 		description: `Updates settings applied to a meeting&#x27;s [Cloud Recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording).      

// **Scopes:** &#x60;recording:write&#x60;,&#x60;recording:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: recordingSettingsUpdate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/registrants",
// 		description: `A host or a user with admin permission can require [registration for a Zoom meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings). List users that have registered for a meeting.  
   
 


// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "status",
// 				type: "Query",
// 				schema: z
// 					.enum(["pending", "approved", "denied"])
// 					.optional()
// 					.default("approved"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				registrants: z.array(
// 					z
// 						.object({
// 							id: z.string().optional(),
// 							address: z.string().optional(),
// 							city: z.string().optional(),
// 							comments: z.string().optional(),
// 							country: z.string().optional(),
// 							custom_questions: z
// 								.array(
// 									z
// 										.object({ title: z.string(), value: z.string().max(128) })
// 										.partial()
// 										.passthrough()
// 								)
// 								.optional(),
// 							email: z.string().max(128).email(),
// 							first_name: z.string().max(64),
// 							industry: z.string().optional(),
// 							job_title: z.string().optional(),
// 							last_name: z.string().max(64).optional(),
// 							no_of_employees: z
// 								.enum([
// 									"",
// 									"1-20",
// 									"21-50",
// 									"51-100",
// 									"101-250",
// 									"251-500",
// 									"501-1,000",
// 									"1,001-5,000",
// 									"5,001-10,000",
// 									"More than 10,000",
// 								])
// 								.optional(),
// 							org: z.string().optional(),
// 							phone: z.string().optional(),
// 							purchasing_time_frame: z
// 								.enum([
// 									"",
// 									"Within a month",
// 									"1-3 months",
// 									"4-6 months",
// 									"More than 6 months",
// 									"No timeframe",
// 								])
// 								.optional(),
// 							role_in_purchase_process: z
// 								.enum([
// 									"",
// 									"Decision Maker",
// 									"Evaluator/Recommender",
// 									"Influencer",
// 									"Not involved",
// 								])
// 								.optional(),
// 							state: z.string().optional(),
// 							status: z.enum(["approved", "denied", "pending"]).optional(),
// 							zip: z.string().optional(),
// 							create_time: z.string().datetime({ offset: true }).optional(),
// 							join_url: z.string().optional(),
// 							participant_pin_code: z.number().int().optional(),
// 						})
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account: {accountId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
//  You are not the meeting host.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Cannot access meeting info. &lt;br&gt;
// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  Meeting host does not exist: {userId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/meetings/:meetingId/registrants",
// 		description: `Create and submit a user&#x27;s registration to a meeting. See [Customizing webinar registration](https://support.zoom.us/hc/en-us/articles/202835649-Customizing-webinar-registration) for details on how to set the requirements for these fields. Note that there is a maximum limit of 4,999 registrants per meeting and users will see an error if the meeting&#x27;s capacity is reached. 

//  **Prerequisites:** 
// * The host must be a **Licensed** user type.

// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: meetingRegistrantCreate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_ids",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				join_url: z.string(),
// 				registrant_id: z.string(),
// 				start_time: z.string().datetime({ offset: true }),
// 				topic: z.string().max(200),
// 				occurrences: z.array(
// 					z
// 						.object({
// 							duration: z.number().int(),
// 							occurrence_id: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							status: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				participant_pin_code: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}

// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
// You are not the meeting host.

// **Error Code:** &#x60;3043&#x60; &lt;br&gt;
// Meeting has reached maximum attendee capacity.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access meeting info.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// Meeting host does not exist: {userId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/registrants/:registrantId",
// 		description: `Retrieve details on a specific user who has registered for the meeting. A host or a user with administrative permissions can require [registration for Zoom meetings](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).

// **Prerequisites:** 
// * The account must have a Meeting plan

// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "registrantId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string().optional(),
// 				address: z.string().optional(),
// 				city: z.string().optional(),
// 				comments: z.string().optional(),
// 				country: z.string().optional(),
// 				custom_questions: z
// 					.array(
// 						z
// 							.object({ title: z.string(), value: z.string().max(128) })
// 							.partial()
// 							.passthrough()
// 					)
// 					.optional(),
// 				email: z.string().max(128).email(),
// 				first_name: z.string().max(64),
// 				industry: z.string().optional(),
// 				job_title: z.string().optional(),
// 				last_name: z.string().max(64).optional(),
// 				no_of_employees: z
// 					.enum([
// 						"",
// 						"1-20",
// 						"21-50",
// 						"51-100",
// 						"101-250",
// 						"251-500",
// 						"501-1,000",
// 						"1,001-5,000",
// 						"5,001-10,000",
// 						"More than 10,000",
// 					])
// 					.optional(),
// 				org: z.string().optional(),
// 				phone: z.string().optional(),
// 				purchasing_time_frame: z
// 					.enum([
// 						"",
// 						"Within a month",
// 						"1-3 months",
// 						"4-6 months",
// 						"More than 6 months",
// 						"No timeframe",
// 					])
// 					.optional(),
// 				role_in_purchase_process: z
// 					.enum([
// 						"",
// 						"Decision Maker",
// 						"Evaluator/Recommender",
// 						"Influencer",
// 						"Not involved",
// 					])
// 					.optional(),
// 				state: z.string().optional(),
// 				status: z
// 					.enum([
// 						"approved",
// 						"denied",
// 						"pending",
// 						"approved",
// 						"pending",
// 						"denied",
// 					])
// 					.optional(),
// 				zip: z.string().optional(),
// 				create_time: z.string().datetime({ offset: true }).optional(),
// 				join_url: z.string().optional(),
// 				participant_pin_code: z.number().int().optional(),
// 			})
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account: &quot;{accountId}&quot;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
//  You are not the meeting host.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  &gt;
// Cannot access meeting info. &lt;br&gt;
// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  Meeting host does not exist: &quot;{userId}&quot; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/meetings/:meetingId/registrants/:registrantId",
// 		description: `Delete a meeting registrant.  
   
 


// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "registrantId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid users: {0}.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The value that you entered for the Registrant ID field is invalid. Enter a valid value and try again.&lt;br&gt;

// **Error Code:** &#x60;404&#x60; &lt;br&gt;
// Registration has not been enabled for this meeting: {0}.&lt;br&gt;

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} does not exist or does not belong to this account.&lt;br&gt;

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access webinar info.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {0}.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/registrants/questions",
// 		description: `List registration questions that will be displayed to users while [registering for a meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).  
 



// **Scopes:** &#x60;meeting:read&#x60;,&#x60;meeting:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				custom_questions: z.array(
// 					z
// 						.object({
// 							answers: z.array(z.string()),
// 							required: z.boolean(),
// 							title: z.string(),
// 							type: z.enum(["short", "single"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				questions: z.array(
// 					z
// 						.object({
// 							field_name: z.enum([
// 								"last_name",
// 								"address",
// 								"city",
// 								"country",
// 								"zip",
// 								"state",
// 								"phone",
// 								"industry",
// 								"org",
// 								"job_title",
// 								"purchasing_time_frame",
// 								"role_in_purchase_process",
// 								"no_of_employees",
// 								"comments",
// 							]),
// 							required: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/meetings/:meetingId/registrants/questions",
// 		description: `Update registration questions that will be displayed to users while [registering for a meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).  
   
 


// **Scopes:** &#x60;meeting:write&#x60;,&#x60;meeting:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Meeting Registrant Questions`,
// 				type: "Body",
// 				schema: meetingRegistrantQuestionUpdate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/meetings/:meetingId/registrants/status",
// 		description: `Update a meeting registrant&#x27;s status by either approving, cancelling or denying a registrant from joining the meeting.  
   
 


// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: meetingRegistrantStatus_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}.&lt;br&gt;

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access meeting information.&lt;br&gt;

// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
// You&#x27;re not the meeting host.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: {userId}.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/meetings/:meetingId/sip_dialing",
// 		description: `Get a meeting&#x27;s SIP URI.  The URI consists of the meeting ID, (optional, user-supplied) passcode and participant identifier code.  The API return data also includes additional fields to indicate whether the API caller has a valid Cloud Room Connector subscription, the participant identifier code from the URI, and the SIP URI validity period (in seconds). 



// **Scopes:** &#x60;meeting:write:sip_dialing&#x60;,&#x60;meeting:write:admin:sip_dialing&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ passcode: z.string() }).partial().passthrough(),
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				sip_dialing: z.string(),
// 				paid_crc_plan_participant: z.boolean(),
// 				participant_identifier_code: z.string(),
// 				expire_in: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid meeting ID.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// The meeting&#x27;s SIP URI does not exist: {meetingId}.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Meeting ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/meetings/:meetingId/status",
// 		description: `Update the status of a meeting.  
   
 


// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: meetingStatus_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Cannot access meeting info.

// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
// You&#x27;re not the meeting host.

// **Error Code:** &#x60;3063&#x60; &lt;br&gt;
// Can not end on-premise user&#x27;s meeting: {meetingId}.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// Meeting host does not exist: {userId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/survey",
// 		description: `Display information about a [meeting survey](https://support.zoom.us/hc/en-us/articles/4404969060621-Post-meeting-survey-and-reporting).  **Prerequisites:** * The host has a **Pro** license. * The [**Meeting Survey**](https://support.zoom.us/hc/en-us/articles/4404939095053-Enabling-meeting-surveys) feature is enabled on the host&#x27;s account. * The meeting must be a scheduled meeting. Instant meetings do not have survey features enabled.

// **Scopes:** &#x60;meeting:read&#x60;,&#x60;meeting:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				custom_survey: z
// 					.object({
// 						title: z.string().max(64),
// 						anonymous: z.boolean(),
// 						numbered_questions: z.boolean(),
// 						show_question_type: z.boolean(),
// 						feedback: z.string().max(320),
// 						questions: z
// 							.array(
// 								z
// 									.object({
// 										name: z.string(),
// 										type: z.enum([
// 											"single",
// 											"multiple",
// 											"matching",
// 											"rank_order",
// 											"short_answer",
// 											"long_answer",
// 											"fill_in_the_blank",
// 											"rating_scale",
// 										]),
// 										answer_required: z.boolean(),
// 										show_as_dropdown: z.boolean(),
// 										answers: z.array(z.string()).min(2),
// 										prompts: z
// 											.array(
// 												z
// 													.object({ prompt_question: z.string().max(200) })
// 													.partial()
// 													.passthrough()
// 											)
// 											.min(2)
// 											.max(10),
// 										answer_min_character: z.number().int().gte(1),
// 										answer_max_character: z.number().int(),
// 										rating_min_value: z.number().int().gte(0),
// 										rating_max_value: z.number().int().lte(10),
// 										rating_min_label: z.string().max(50),
// 										rating_max_label: z.string().max(50),
// 									})
// 									.partial()
// 									.passthrough()
// 							)
// 							.min(1)
// 							.max(100),
// 					})
// 					.partial()
// 					.passthrough(),
// 				show_in_the_browser: z.boolean().default(true),
// 				third_party_survey: z.string().max(64),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid meeting ID. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Cannot access Webinar information. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Meeting survey disabled. To enable this feature, enable the &quot;Meeting Survey&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Meeting ID does not exist. &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting does not exist: {meetingId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/meetings/:meetingId/survey",
// 		description: `Delete a [meeting survey](https://support.zoom.us/hc/en-us/articles/4404969060621-Post-meeting-survey-and-reporting). 

//  **Prerequisites:** 
// * The host must be a **Pro** user type. 
// * The [**Meeting Survey**](https://support.zoom.us/hc/en-us/articles/4404939095053-Enabling-meeting-surveys) feature enabled in the host&#x27;s account. 
// * The meeting must be a scheduled meeting. Instant meetings do not have survey features enabled.

// **Scopes:** &#x60;meeting:write&#x60;,&#x60;meeting:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid meeting ID.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// * Cannot access Webinar information. &lt;br&gt;
//  * Meeting survey disabled. To enable this feature, enable the &quot;Meeting Survey&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Meeting ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/meetings/:meetingId/survey",
// 		description: `Update a [meeting survey](https://support.zoom.us/hc/en-us/articles/4404969060621-Post-meeting-survey-and-reporting).  **Prerequisites:** * The host must be a **Pro** user type. * The [**Meeting Survey**](https://support.zoom.us/hc/en-us/articles/4404939095053-Enabling-meeting-surveys) feature is enabled in the host&#x27;s account. * The meeting must be a scheduled meeting. Instant meetings do not have survey features enabled.

// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: meetingSurveyUpdate_Body,
// 			},
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid meeting ID. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid third party survey: {third_party_survey}. &lt;br&gt;
// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Cannot access Webinar information. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Meeting survey disabled. To enable this feature, enable the &quot;Meeting Survey&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Not allowed host to use a 3rd-party survey link. To use this feature, enable the &quot;Allow host to use a 3rd-party survey link&quot; setting in the &quot;Account Settings&quot; page of the Zoom web portal. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Meeting ID does not exist. &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting does not exist: {meetingId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/:meetingId/token",
// 		description: `Get a meeting&#x27;s [closed caption token (caption URL)](https://support.zoom.us/hc/en-us/articles/115002212983-Using-a-third-party-closed-captioning-service). This token lets you use a third-party service to stream text to their closed captioning software to the Zoom meeting. 

// **Prerequisites:** 
// * The **Closed captioning** setting enabled in the Zoom web portal. 
// * The **Allow use of caption API Token to integrate with 3rd-party Closed Captioning services** setting enabled.

// **Scopes:** &#x60;meeting:read&#x60;,&#x60;meeting:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z
// 					.literal("closed_caption_token")
// 					.optional()
// 					.default("closed_caption_token"),
// 			},
// 		],
// 		response: z.object({ token: z.string() }).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid meeting ID.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// * Cannot access Webinar information. &lt;br&gt;
// * Meeting survey disabled. To enable this feature, enable the &quot;Meeting Survey&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface.

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Meeting ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/meetings/:meetingUUID/recordings/status",
// 		description: `Zoom allows users to recover recordings from trash for up to 30 days from the deletion date. Use this API to recover all deleted [Cloud Recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) of a specific meeting.  
   
 
// **Prerequisites**:  
 
// * A Pro user with Cloud Recording enabled.

// **Scopes:** &#x60;recording:write:admin&#x60;,&#x60;recording:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: recordingStatusUpdateOne_Body,
// 			},
// 			{
// 				name: "meetingUUID",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}.

// **Error Code:** &#x60;3309&#x60; &lt;br&gt;
// Not enough cloud storage available. Either purchase additional storage or delete cloud recordings to free up storage.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: {userId}.&lt;br&gt;

// **Error Code:** &#x60;3301&#x60; &lt;br&gt;
// There is no recording for this meeting.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/meetings/meeting_summaries",
// 		description: `Generates a list of all meeting summaries for an account.

// **Prerequisites**
// * Host user type must be Pro or higher plan.
// * The Meeting Summary with AI Companion feature enabled in the host&#x27;s account.
// * E2ee meetings do not have summary feature enabled.

// **Scopes:** &#x60;meeting_summary:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().datetime({ offset: true }).optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().datetime({ offset: true }).optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				page_size: z.number().int().lte(300).default(30),
// 				next_page_token: z.string(),
// 				from: z.string().datetime({ offset: true }),
// 				to: z.string().datetime({ offset: true }),
// 				summaries: z.array(
// 					z
// 						.object({
// 							meeting_host_id: z.string(),
// 							meeting_host_email: z.string().email(),
// 							meeting_uuid: z.string(),
// 							meeting_id: z.number().int(),
// 							meeting_topic: z.string(),
// 							meeting_start_time: z.string().datetime({ offset: true }),
// 							meeting_end_time: z.string().datetime({ offset: true }),
// 							summary_start_time: z.string().datetime({ offset: true }),
// 							summary_end_time: z.string().datetime({ offset: true }),
// 							summary_created_time: z.string().datetime({ offset: true }),
// 							summary_last_modified_time: z.string().datetime({ offset: true }),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Meeting summary disabled. To enable this feature, enable the &quot;Meeting Summary with AI Companion&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 401,
// 				description: `**HTTP Status Code:** &#x60;401&#x60; &lt;br&gt;
//  Unauthorized 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} not exist or not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/chat",
// 		description: `Get [metrics](https://support.zoom.us/hc/en-us/articles/204654719-Dashboard#h_cc7e9749-1c70-4afb-a9a2-9680654821e4) for how users are utilizing Zoom Chat to send messages.

// Use the &#x60;from&#x60; and &#x60;to&#x60; query parameters to specify a monthly date range for the dashboard data. The monthly date range must be within the last six months.

// &amp;gt; **Note:** To query chat metrics from July 1, 2021 and later, use this endpoint instead of the [**Get IM metrics**](/docs/api-reference/zoom-api/methods#operation/dashboardIM) API.

// **Prerequisites:**

// * Business or a higher plan

// **Scopes:** &#x60;dashboard_im:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Resource-intensive&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				next_page_token: z.string(),
// 				page_size: z.number().int().lte(300).default(30),
// 				to: z.string(),
// 				users: z.array(
// 					z
// 						.object({
// 							audio_sent: z.number().int(),
// 							code_sippet_sent: z.number().int(),
// 							email: z.string().email(),
// 							files_sent: z.number().int(),
// 							giphys_sent: z.number().int(),
// 							group_sent: z.number().int(),
// 							images_sent: z.number().int(),
// 							p2p_sent: z.number().int(),
// 							text_sent: z.number().int(),
// 							total_sent: z.number().int(),
// 							user_id: z.string(),
// 							user_name: z.string(),
// 							video_sent: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/client_versions",
// 		description: `Use this API to list all the client versions and its count. 

//  **Prerequisites:** 
// * A Business or a higher plan.

// **Scopes:** &#x60;dashboard:read:admin,dashboard_home:read:admin,zms:dashboard:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		response: z
// 			.object({
// 				client_versions: z.array(
// 					z
// 						.object({
// 							client_version: z.string(),
// 							total_count: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/client/feedback",
// 		description: `Use this API to return [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf) survey results. You can specify a monthly date range for the Dashboard data using the &#x60;from&#x60; and &#x60;to&#x60; query parameters. The month should fall within the last six months. 

// **Prerequisites:** 
// * A Business or higher account. 
// * The &amp;quot;[**Feedback to Zoom**](https://support.zoom.us/hc/en-us/articles/115005838023)&amp;quot; option enabled.

// **Scopes:** &#x60;dashboard_home:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				client_feedbacks: z.array(
// 					z
// 						.object({
// 							feedback_id: z.string(),
// 							feedback_name: z.string(),
// 							participants_count: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				from: z.string(),
// 				to: z.string(),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/client/feedback/:feedbackId",
// 		description: `Retrieve detailed information on a [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf).   
//   You can specify a monthly date range for the dashboard data using the &#x60;from&#x60; and &#x60;to&#x60; query parameters. The month should fall within the last six months.

// **Prerequisites:**
// * Business or higher account
// * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) enabled.



// **Scopes:** &#x60;dashboard_home:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "feedbackId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				next_page_token: z.string(),
// 				page_size: z.number().int().lte(300).default(30),
// 				client_feedback_details: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							meeting_id: z.string(),
// 							participant_name: z.string(),
// 							time: z.string().datetime({ offset: true }),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/client/satisfaction",
// 		description: `If the [End of Meeting Feedback Survey](https://support.zoom.us/hc/en-us/articles/115005855266) option is enabled, attendees will be prompted with a survey window where they can tap either the **Thumbs Up** or **Thumbs Down** button that indicates their Zoom meeting experience. With this API, you can get information on the attendees&#x27; meeting satisfaction. Specify a monthly date range for the query using the from and to query parameters. The month should fall within the last six months.

// To get information on the survey results with negative experiences (indicated by **Thumbs Down**), use the [**Get Zoom meetings client feedback**](/docs/api-reference/zoom-api/methods#operation/dashboardClientFeedbackDetail) API.  
 


// **Scopes:** &#x60;dashboard:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				client_satisfaction: z.array(
// 					z
// 						.object({
// 							date: z.string(),
// 							good_count: z.number().int(),
// 							none_count: z.number().int(),
// 							not_good_count: z.number().int(),
// 							satisfaction_percent: z.number(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				from: z.string(),
// 				to: z.string(),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/crc",
// 		description: `A Cloud Room Connector allows H.323/SIP endpoints to connect to a Zoom meeting. 

// Use this API to get the hour by hour CRC Port usage for a specified period of time. &amp;lt;aside class&#x3D;&#x27;notice&#x27;&amp;gt;We will provide the report for a maximum of one month. For example, if &amp;quot;from&amp;quot; is set to &amp;quot;2017-08-05&amp;quot; and &amp;quot;to&amp;quot; is set to &amp;quot;2017-10-10&amp;quot;, we will adjust &amp;quot;from&amp;quot; to &amp;quot;2017-09-10&amp;quot;.&amp;lt;/aside&amp;gt;  
   
 
// **Prerequisites:**  
 
// * Business, Education or API Plan.
// * Room Connector must be enabled on the account.  
   
 


// **Scopes:** &#x60;dashboard_crc:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				crc_ports_usage: z.array(
// 					z
// 						.object({
// 							crc_ports_hour_usage: z.array(
// 								z
// 									.object({
// 										hour: z.string(),
// 										max_usage: z.number().int(),
// 										total_usage: z.number().int(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							date_time: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/issues/zoomrooms",
// 		description: `Get information on top 25 Zoom Rooms with issues in a month. The month specified with the &amp;quot;from&amp;quot; and &amp;quot;to&amp;quot; range should fall within the last six months.  
 
// **Prerequisites:**  
 
// * Business or a higher plan.
// * Zoom Room must be enabled in the account.

// **Scopes:** &#x60;dashboard_home:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				total_records: z.number().int(),
// 				zoom_rooms: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							issues_count: z.number().int(),
// 							room_name: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/issues/zoomrooms/:zoomroomId",
// 		description: `Use this API to return information about the Zoom Rooms in an account with issues, such as disconnected hardware or bandwidth issues. You can specify a monthly date range for the Dashboard data using the &#x60;from&#x60; and &#x60;to&#x60; query parameters. The month should fall within the last six months. 

// **Prerequisites:** 
// * A Business or a higher plan. 
// * A Zoom Room must be enabled in the account.

// **Scopes:** &#x60;dashboard_home:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "zoomroomId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				issue_details: z.array(
// 					z
// 						.object({
// 							issue: z.string(),
// 							time: z.string().datetime({ offset: true }),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/meetings",
// 		description: `Lists the total live or past meetings that occurred during a specified period of time. This overview shows if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account. Specify a monthly date range for the dashboard data using the &#x60;from&#x60; and &#x60;to&#x60; query parameters. The month should fall within the last six months.   **Prerequisites:**    * Business or a higher plan. 

// **Scopes:** &#x60;dashboard_meetings:read:admin&#x60;,&#x60;dashboard:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;RESOURCE-INTENSIVE&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "pastOne", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "group_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "group_include_participant",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 			{
// 				name: "include_fields",
// 				type: "Query",
// 				schema: z.literal("tracking_fields").optional(),
// 			},
// 			{
// 				name: "query_date_type",
// 				type: "Query",
// 				schema: z.enum(["start_time", "end_time"]).optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				meetings: z.array(
// 					z
// 						.object({
// 							host: z.string(),
// 							audio_quality: z.enum(["good", "fair", "poor", "bad"]),
// 							custom_keys: z.array(
// 								z
// 									.object({
// 										key: z.string().max(64),
// 										value: z.string().max(256),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							dept: z.string(),
// 							duration: z.string(),
// 							email: z.string(),
// 							end_time: z.string().datetime({ offset: true }),
// 							has_3rd_party_audio: z.boolean(),
// 							has_archiving: z.boolean(),
// 							has_pstn: z.boolean(),
// 							has_recording: z.boolean(),
// 							has_screen_share: z.boolean(),
// 							has_sip: z.boolean(),
// 							has_video: z.boolean(),
// 							has_voip: z.boolean(),
// 							has_manual_captions: z.boolean(),
// 							has_automated_captions: z.boolean(),
// 							id: z.number().int(),
// 							in_room_participants: z.number().int(),
// 							participants: z.number().int(),
// 							screen_share_quality: z.enum(["good", "fair", "poor", "bad"]),
// 							session_key: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							topic: z.string(),
// 							tracking_fields: z.array(
// 								z
// 									.object({
// 										field: z.string().max(64),
// 										value: z.string().max(256),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							user_type: z.string(),
// 							uuid: z.string(),
// 							video_quality: z.enum(["good", "fair", "poor", "bad"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;12700&#x60; &lt;br&gt;
//  This account cannot query meetings by &#x60;end_time&#x60;. &lt;br&gt;
// **Error Code:** &#x60;400&#x60; &lt;br&gt;
//  This API is only available for ZMP and Business or higher accounts that have enabled the Dashboard feature. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/meetings/:meetingId",
// 		description: `Get details on live or past meetings. This overview will show if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account.  
//   You can specify a monthly date range for the dashboard data using the &#x60;from&#x60; and &#x60;to&#x60; query parameters. The month should fall within the last six months.    
 
// **Prerequisites:**   
 
// * Business or a higher plan.

// **Scopes:** &#x60;dashboard_meetings:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "pastOne", "live"]).optional().default("live"),
// 			},
// 		],
// 		response: z
// 			.object({
// 				host: z.string(),
// 				custom_keys: z
// 					.array(
// 						z
// 							.object({ key: z.string().max(64), value: z.string().max(256) })
// 							.partial()
// 							.passthrough()
// 					)
// 					.max(10),
// 				dept: z.string(),
// 				duration: z.string(),
// 				email: z.string(),
// 				end_time: z.string().datetime({ offset: true }),
// 				has_3rd_party_audio: z.boolean(),
// 				has_archiving: z.boolean(),
// 				has_pstn: z.boolean(),
// 				has_recording: z.boolean(),
// 				has_screen_share: z.boolean(),
// 				has_sip: z.boolean(),
// 				has_video: z.boolean(),
// 				has_voip: z.boolean(),
// 				has_manual_captions: z.boolean(),
// 				has_automated_captions: z.boolean(),
// 				id: z.number().int(),
// 				in_room_participants: z.number().int(),
// 				participants: z.number().int(),
// 				start_time: z.string().datetime({ offset: true }),
// 				topic: z.string(),
// 				user_type: z.string(),
// 				uuid: z.string(),
// 				has_meeting_summary: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access a meeting a year ago. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting ID is invalid or the meeting has not ended yet.&lt;br&gt;
// This meeting&#x27;s details are not available. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/meetings/:meetingId/participants",
// 		description: `Return a list of participants from live or past meetings. 
//  If you don&#x27;t provide the &#x60;type&#x60; query parameter, the default value is set to the &#x60;live&#x60; value. This API only returns metrics for participants in a live meeting, if any exist. You can specify a monthly date range for the dashboard data using the &#x60;from&#x60; and &#x60;to&#x60; query parameters. The month should fall within the last six months. 

// **Note:** 

// This API may return empty values for participants&#x27; &#x60;user_name&#x60;, &#x60;ip_address&#x60;, &#x60;location&#x60;, and &#x60;email&#x60; responses when the account calling this API: 
// * Does **not** have a signed HIPAA business associate agreement (BAA). 
// * Is a [**legacy** HIPAA BAA account](/docs/api-reference/other-references/legacy-business-associate-agreements). 
// * Displays data for any users who are **not** part of the host&#x27;s account (external users) unless they meet certain conditions. See [Email address display rules](/docs/api-reference/using-zoom-apis#email-address) for details. 

// **Prerequisites:** 
// * A Business or higher plan.

// **Scopes:** &#x60;dashboard_meetings:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "pastOne", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "include_fields",
// 				type: "Query",
// 				schema: z.literal("registrant_id").optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							audio_quality: z.enum(["", "good", "fair", "poor", "bad"]),
// 							camera: z.string(),
// 							connection_type: z.string(),
// 							customer_key: z.string().max(35),
// 							data_center: z.string(),
// 							device: z.enum([
// 								"Phone",
// 								"H.323/SIP",
// 								"Windows",
// 								"Mac",
// 								"iOS",
// 								"Android",
// 							]),
// 							domain: z.string(),
// 							email: z.string().email(),
// 							from_sip_uri: z.string(),
// 							full_data_center: z.string(),
// 							harddisk_id: z.string(),
// 							id: z.string(),
// 							in_room_participants: z.number().int(),
// 							internal_ip_addresses: z.array(z.string()),
// 							ip_address: z.string(),
// 							join_time: z.string().datetime({ offset: true }),
// 							leave_reason: z.enum([
// 								"$name left the meeting.",
// 								"$name got disconnected from the meeting.",
// 								"Host ended the meeting.",
// 								"Host closed the meeting.",
// 								"Host started a new meeting.",
// 								"Network connection error.",
// 								"Host did not join.",
// 								"Exceeded free meeting minutes limit.",
// 								"Removed by host.",
// 								"Unknown reason.",
// 								"Leave waiting room.",
// 								"Removed by host from waiting room.",
// 							]),
// 							leave_time: z.string().datetime({ offset: true }),
// 							location: z.string(),
// 							mac_addr: z.string(),
// 							microphone: z.string(),
// 							network_type: z.enum([
// 								"Wired",
// 								"Wifi",
// 								"PPP",
// 								"Cellular",
// 								"Others",
// 							]),
// 							participant_user_id: z.string(),
// 							pc_name: z.string(),
// 							recording: z.boolean(),
// 							registrant_id: z.string(),
// 							role: z.enum(["host", "attendee"]),
// 							screen_share_quality: z.enum(["", "good", "fair", "poor", "bad"]),
// 							share_application: z.boolean(),
// 							share_desktop: z.boolean(),
// 							share_whiteboard: z.boolean(),
// 							sip_uri: z.string(),
// 							speaker: z.string(),
// 							status: z.enum(["in_meeting", "in_waiting_room"]),
// 							user_id: z.string(),
// 							user_name: z.string(),
// 							version: z.string(),
// 							video_quality: z.enum(["", "good", "fair", "poor", "bad"]),
// 							bo_mtg_id: z.string(),
// 							audio_call: z.array(
// 								z
// 									.object({
// 										call_number: z.string(),
// 										call_type: z.enum(["call-in", "call-out"]),
// 										zoom_number: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							os: z.string(),
// 							os_version: z.string(),
// 							device_name: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access a meeting a year ago. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting ID is invalid or has not ended. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/meetings/:meetingId/participants/:participantId/qos",
// 		description: `Return the quality of service (QoS) report for participants from live or past meetings. The data returned indicates the connection quality for sending/receiving video, audio, and shared content. The API returns this data for either the API request or when the API request was last received. 

// When the sender sends data, a timestamp is attached to the sender&#x27;s data packet. The receiver then returns this timestamp to the sender. This helps determine the upstream and downstream latency, which includes the application processing time. The latency data returned is the five second average and five second maximum. 

//  This API will **not** return data if there is no data being sent or received at the time of request. 

// **Note:** 

// This API may return empty values for participants&#x27; &#x60;user_name&#x60;, &#x60;ip_address&#x60;, &#x60;location&#x60;, and &#x60;email&#x60; responses when the account calling this API: 
// * Does **not** have a signed HIPAA business associate agreement (BAA). 
// * Is a [**legacy** HIPAA BAA account](https://developers.zoom.us/docs/api/rest/other-references/legacy-business-associate-agreements/). 
// * Displays data for any users who are **not** part of the host&#x27;s account (external users) unless they meet certain conditions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. 



// **Scopes:** &#x60;dashboard_meetings:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "participantId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "live"]).optional().default("live"),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				device: z.enum([
// 					"Phone",
// 					"H.323/SIP",
// 					"Windows",
// 					"Mac",
// 					"iOS",
// 					"Android",
// 				]),
// 				domain: z.string(),
// 				harddisk_id: z.string(),
// 				internal_ip_addresses: z.array(z.string()),
// 				ip_address: z.string(),
// 				join_time: z.string().datetime({ offset: true }),
// 				leave_time: z.string().datetime({ offset: true }),
// 				location: z.string(),
// 				mac_addr: z.string(),
// 				pc_name: z.string(),
// 				user_id: z.string(),
// 				user_name: z.string(),
// 				user_qos: z.array(
// 					z
// 						.object({
// 							as_device_from_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_device_to_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_input: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_output: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_device_from_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_device_to_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_input: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_output: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							cpu_usage: z
// 								.object({
// 									system_max_cpu_usage: z.string(),
// 									zoom_avg_cpu_usage: z.string(),
// 									zoom_max_cpu_usage: z.string(),
// 									zoom_min_cpu_usage: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							date_time: z.string().datetime({ offset: true }),
// 							video_device_from_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_device_to_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_input: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_output: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_device_from_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_device_to_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_device_from_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_device_to_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_device_from_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_device_to_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							wifi_rssi: z
// 								.object({
// 									max_rssi: z.number().int(),
// 									avg_rssi: z.number().int(),
// 									min_rssi: z.number().int(),
// 									rssi_unit: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				version: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access a meeting a year ago. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  This meeting&#x27;s detail info is not available.&lt;br&gt;
// This meeting has not ended yet or the Meeting ID is invalid. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/meetings/:meetingId/participants/qos",
// 		description: `Show a list of meeting participants from live or past meetings, and their quality of service received during the meeting. The data returned indicates the connection quality for sending or receiving video, audio, and shared content. 

// **Note:** 

// This API may return empty values for participants&#x27; &#x60;user_name&#x60;, &#x60;ip_address&#x60;, &#x60;location&#x60;, and &#x60;email&#x60; responses when the account calling this API. 
// * Does **not** have a signed HIPAA business associate agreement (BAA). 
// * Is a [**legacy** HIPAA BAA account](https://developers.zoom.us/docs/api/rest/other-references/legacy-business-associate-agreements/). 
// * Displays data for any users who are **not** part of the host&#x27;s account (external users) unless they meet certain conditions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. 

// **Prerequisites:** 
// * A Business or a higher plan.

// **Scopes:** &#x60;dashboard_meetings:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(10).optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(10).default(1),
// 				total_records: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							device: z.enum([
// 								"Phone",
// 								"H.323/SIP",
// 								"Windows",
// 								"Mac",
// 								"iOS",
// 								"Android",
// 							]),
// 							domain: z.string(),
// 							harddisk_id: z.string(),
// 							internal_ip_addresses: z.array(z.string()),
// 							ip_address: z.string(),
// 							join_time: z.string().datetime({ offset: true }),
// 							leave_time: z.string().datetime({ offset: true }),
// 							location: z.string(),
// 							mac_addr: z.string(),
// 							pc_name: z.string(),
// 							user_id: z.string(),
// 							user_name: z.string(),
// 							user_qos: z.array(
// 								z
// 									.object({
// 										as_device_from_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_device_to_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_input: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_output: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_device_from_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_device_to_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_input: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_output: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										cpu_usage: z
// 											.object({
// 												system_max_cpu_usage: z.string(),
// 												zoom_avg_cpu_usage: z.string(),
// 												zoom_max_cpu_usage: z.string(),
// 												zoom_min_cpu_usage: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										date_time: z.string().datetime({ offset: true }),
// 										video_device_from_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_device_to_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_input: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_output: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_device_from_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_device_to_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_device_from_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_device_to_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_device_from_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_device_to_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										wifi_rssi: z
// 											.object({
// 												max_rssi: z.number().int(),
// 												avg_rssi: z.number().int(),
// 												min_rssi: z.number().int(),
// 												rssi_unit: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							version: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access a meeting a year ago. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  This meeting&#x27;s detail info is not available.&lt;br&gt;The meeting ID is not valid or the meeting has not ended yet. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/meetings/:meetingId/participants/satisfaction",
// 		description: `When a meeting ends, each attendee will be prompted to share their meeting experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific meeting. Note that this API only works for meetings scheduled after December 20, 2020.

// **Prerequisites:**
// * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
// * The user making the API request must be enrolled in a Business or a higher plan.

  
  

// **Scopes:** &#x60;dashboard_meetings:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: meetingId,
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "pastOne", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_size: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							date_time: z.string().datetime({ offset: true }),
// 							email: z.string().email(),
// 							quality: z.enum(["GOOD", "NOT GOOD"]),
// 							user_id: z.string(),
// 							comment: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid accounts that have dashboard feature enabled.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting ID is invalid or not end.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/meetings/:meetingId/participants/sharing",
// 		description: `Retrieve the sharing and recording details of participants from live or past meetings.  
 
// **Prerequisites:**   
 
// * Business or a higher plan.

// **Scopes:** &#x60;dashboard_meetings:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: meetingId,
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							details: z.array(
// 								z
// 									.object({
// 										content: z.string(),
// 										end_time: z.string(),
// 										start_time: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							id: z.string(),
// 							user_id: z.string(),
// 							user_name: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
// Can not access a meeting a year ago.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// This meeting&#x27;s detail info is not available or ID is not valid.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/quality",
// 		description: `Use this API to return [meeting quality score](https://support.zoom.us/hc/en-us/articles/360061244651-Meeting-quality-scores-and-network-alerts-on-Dashboard) information. Meeting quality scores are based on the mean opinion score (MOS). The MOS measures a meeting&#x27;s quality on a scale of &amp;quot;Good&amp;quot; (5-4), &amp;quot;Fair&amp;quot; (4-3), &amp;quot;Poor&amp;quot; (3-2), or &amp;quot;Bad&amp;quot; (2-1). 

// **Prerequisites:** 
// * A Business or a higher plan.

// **Scopes:** &#x60;dashboard_home:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z
// 					.enum(["meeting", "participants"])
// 					.optional()
// 					.default("meeting"),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				quality: z
// 					.object({
// 						audio: z
// 							.object({
// 								bad: z.number().int(),
// 								fair: z.number().int(),
// 								good: z.number().int(),
// 								poor: z.number().int(),
// 							})
// 							.partial()
// 							.passthrough(),
// 						screen_share: z
// 							.object({
// 								bad: z.number().int(),
// 								fair: z.number().int(),
// 								good: z.number().int(),
// 								poor: z.number().int(),
// 							})
// 							.partial()
// 							.passthrough(),
// 						video: z
// 							.object({
// 								bad: z.number().int(),
// 								fair: z.number().int(),
// 								good: z.number().int(),
// 								poor: z.number().int(),
// 							})
// 							.partial()
// 							.passthrough(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				to: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/webinars",
// 		description: `List all the live or past webinars from a specified period of time.   
   
 
// **Prerequisites:**  
 
// * Business, Education or API Plan with Webinar add-on.




// **Scopes:** &#x60;dashboard_webinars:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Resource-intensive&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "group_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				webinars: z.array(
// 					z
// 						.object({
// 							host: z.string(),
// 							custom_keys: z
// 								.array(
// 									z
// 										.object({
// 											key: z.string().max(64),
// 											value: z.string().max(256),
// 										})
// 										.partial()
// 										.passthrough()
// 								)
// 								.max(10),
// 							dept: z.string(),
// 							duration: z.string(),
// 							email: z.string(),
// 							end_time: z.string().datetime({ offset: true }),
// 							has_3rd_party_audio: z.boolean(),
// 							has_archiving: z.boolean(),
// 							has_pstn: z.boolean(),
// 							has_recording: z.boolean(),
// 							has_screen_share: z.boolean(),
// 							has_sip: z.boolean(),
// 							has_video: z.boolean(),
// 							has_voip: z.boolean(),
// 							has_manual_captions: z.boolean(),
// 							has_automated_captions: z.boolean(),
// 							id: z.number().int(),
// 							participants: z.number().int(),
// 							start_time: z.string().datetime({ offset: true }),
// 							topic: z.string(),
// 							user_type: z.string(),
// 							uuid: z.string(),
// 							audio_quality: z.enum(["good", "fair", "poor", "bad"]),
// 							video_quality: z.enum(["good", "fair", "poor", "bad"]),
// 							screen_share_quality: z.enum(["good", "fair", "poor", "bad"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/webinars/:webinarId",
// 		description: `Retrieve details from live or past webinars.  
   
 
// **Prerequisites:**  
 
// * Business, Education or API Plan with Webinar add-on.



// **Scopes:** &#x60;dashboard_webinars:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "live"]).optional().default("live"),
// 			},
// 		],
// 		response: z
// 			.object({
// 				host: z.string(),
// 				custom_keys: z
// 					.array(
// 						z
// 							.object({ key: z.string().max(64), value: z.string().max(256) })
// 							.partial()
// 							.passthrough()
// 					)
// 					.max(10),
// 				dept: z.string(),
// 				duration: z.string(),
// 				email: z.string(),
// 				end_time: z.string().datetime({ offset: true }),
// 				has_3rd_party_audio: z.boolean(),
// 				has_archiving: z.boolean(),
// 				has_pstn: z.boolean(),
// 				has_recording: z.boolean(),
// 				has_screen_share: z.boolean(),
// 				has_sip: z.boolean(),
// 				has_video: z.boolean(),
// 				has_voip: z.boolean(),
// 				has_manual_captions: z.boolean(),
// 				has_automated_captions: z.boolean(),
// 				id: z.number().int(),
// 				participants: z.number().int(),
// 				start_time: z.string().datetime({ offset: true }),
// 				topic: z.string(),
// 				user_type: z.string(),
// 				uuid: z.string(),
// 				audio_quality: z.enum(["good", "fair", "poor", "bad"]),
// 				video_quality: z.enum(["good", "fair", "poor", "bad"]),
// 				screen_share_quality: z.enum(["good", "fair", "poor", "bad"]),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
// Can not access a webinar a year ago.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// The webinar has not ended yet or the Webinar ID is not valid.&lt;br&gt;
// This webinar&#x27;s detail is not available.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/webinars/:webinarId/participants",
// 		description: `Returns information about participants from live or past webinars. 
// Displays data for any users who are **not** part of the host&#x27;s account (external users) unless they meet certain conditions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. 

// **Note:** This API might return empty values for participants&#x27; &#x60;user_name&#x60;, &#x60;ip_address&#x60;, &#x60;location&#x60;, and &#x60;email&#x60; responses when the account calls this API.  

// **Prerequisites:** 
// * A Business, Education, or API Plan with Webinar add-on.

// * Any [**legacy** HIPAA BAA account](/docs/api-reference/other-references/legacy-business-associate-agreements). 
// * No signed HIPAA business associate agreement (BAA).




// **Scopes:** &#x60;dashboard_webinars:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "include_fields",
// 				type: "Query",
// 				schema: z.literal("registrant_id").optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							audio_quality: z.enum(["", "good", "fair", "poor", "bad"]),
// 							connection_type: z.string(),
// 							customer_key: z.string().max(35),
// 							data_center: z.string(),
// 							device: z.enum([
// 								"Phone",
// 								"H.323/SIP",
// 								"Windows",
// 								"Mac",
// 								"iOS",
// 								"Android",
// 							]),
// 							domain: z.string(),
// 							email: z.string(),
// 							from_sip_uri: z.string(),
// 							full_data_center: z.string(),
// 							harddisk_id: z.string(),
// 							id: z.string(),
// 							internal_ip_addresses: z.array(z.string()),
// 							ip_address: z.string(),
// 							join_time: z.string().datetime({ offset: true }),
// 							leave_reason: z.enum([
// 								"$name left the webinar.",
// 								"$name got disconnected from the webinar.",
// 								"Host ended the webinar.",
// 								"Host closed the webinar.",
// 								"Host started a new webinar.",
// 								"Network connection error.",
// 								"Host did not join.",
// 								"Exceeded free webinar minutes limit.",
// 								"Removed by host.",
// 								"Unknown reason.",
// 								"Leave waiting room.",
// 								"Removed by host from waiting room.",
// 							]),
// 							leave_time: z.string().datetime({ offset: true }),
// 							location: z.string(),
// 							mac_addr: z.string(),
// 							microphone: z.string(),
// 							network_type: z.enum([
// 								"Wired",
// 								"Wifi",
// 								"PPP",
// 								"Cellular",
// 								"Others",
// 							]),
// 							participant_user_id: z.string(),
// 							pc_name: z.string(),
// 							recording: z.boolean(),
// 							registrant_id: z.string(),
// 							role: z.enum(["host", "attendee", "panelist"]),
// 							screen_share_quality: z.enum(["", "good", "fair", "poor", "bad"]),
// 							share_application: z.boolean(),
// 							share_desktop: z.boolean(),
// 							share_whiteboard: z.boolean(),
// 							sip_uri: z.string(),
// 							speaker: z.string(),
// 							user_id: z.string(),
// 							user_name: z.string(),
// 							version: z.string(),
// 							video_quality: z.enum(["", "good", "fair", "poor", "bad"]),
// 							audio_call: z.array(
// 								z
// 									.object({
// 										call_number: z.string(),
// 										call_type: z.enum(["call-in", "call-out"]),
// 										zoom_number: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							os: z.string(),
// 							os_version: z.string(),
// 							device_name: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Cannot access a webinar a year ago. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  This webinar&#x27;s detail information is not available or the ID is not valid. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/webinars/:webinarId/participants/:participantId/qos",
// 		description: `Return the quality of service (QoS) for participants during live or past webinars. This data returned indicates the connection quality for sending/receiving video, audio, and shared content. The API returns this data for either the API request or when the API request was last received. 

// When the sender sends its data, a timestamp is attached to the sender&#x27;s data packet. The receiver then returns this timestamp to the sender. This helps determine the upstream and downstream latency, which includes the application processing time. The latency data returned is the five second average and five second maximum. 

// This API will **not** return data if there is no data being sent or received at the time of request. 

// **Note:** 

// This API may return empty values for participants&#x27; &#x60;user_name&#x60;, &#x60;ip_address&#x60;, &#x60;location&#x60;, and &#x60;email&#x60; responses when the account calling this API: 
// * Does **not** have a signed HIPAA business associate agreement (BAA). 
// * Is a [**legacy** HIPAA BAA account](https://developers.zoom.us/docs/api/rest/other-references/legacy-business-associate-agreements/). 
// * Displays data for any users who are **not** part of the host&#x27;s account, such as external users, unless they meet certain conditions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. 

// **Prerequisites:** 
// * A Business, Education, or API Plan with Zoom Rooms set up.

// **Scopes:** &#x60;dashboard_webinars:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "participantId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "live"]).optional().default("live"),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				device: z.enum([
// 					"Phone",
// 					"H.323/SIP",
// 					"Windows",
// 					"Mac",
// 					"iOS",
// 					"Android",
// 				]),
// 				domain: z.string(),
// 				harddisk_id: z.string(),
// 				internal_ip_addresses: z.array(z.string()),
// 				ip_address: z.string(),
// 				join_time: z.string().datetime({ offset: true }),
// 				leave_time: z.string().datetime({ offset: true }),
// 				location: z.string(),
// 				mac_addr: z.string(),
// 				pc_name: z.string(),
// 				user_id: z.string(),
// 				user_name: z.string(),
// 				user_qos: z.array(
// 					z
// 						.object({
// 							as_device_from_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_device_to_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_input: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_output: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_device_from_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_device_to_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_input: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_output: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							cpu_usage: z
// 								.object({
// 									system_max_cpu_usage: z.string(),
// 									zoom_avg_cpu_usage: z.string(),
// 									zoom_max_cpu_usage: z.string(),
// 									zoom_min_cpu_usage: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							date_time: z.string().datetime({ offset: true }),
// 							video_device_from_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_device_to_crc: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_input: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_output: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_device_from_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							as_device_to_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_device_from_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							audio_device_to_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_device_from_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							video_device_to_rwg: z
// 								.object({
// 									avg_loss: z.string(),
// 									bitrate: z.string(),
// 									jitter: z.string(),
// 									latency: z.string(),
// 									max_loss: z.string(),
// 									frame_rate: z.string(),
// 									resolution: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							wifi_rssi: z
// 								.object({
// 									max_rssi: z.number().int(),
// 									avg_rssi: z.number().int(),
// 									min_rssi: z.number().int(),
// 									rssi_unit: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				version: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access a webinar a year ago. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  This webinar&#x27;s detail info is not available or ID is not valid. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/webinars/:webinarId/participants/qos",
// 		description: `Show a list of webinar participants from live or past webinars and the quality of service they received during the webinar. The data returned indicates the connection quality for sending/receiving video, audio, and shared content. 

// **Note:** 

// This API may return empty values for participants&#x27; &#x60;user_name&#x60;, &#x60;ip_address&#x60;, &#x60;location&#x60;, and &#x60;email&#x60; responses when the account calling this API: 
// * Does **not** have a signed HIPAA business associate agreement (BAA). 
// * Is a [**legacy** HIPAA BAA account](https://developers.zoom.us/docs/api/rest/other-references/legacy-business-associate-agreements/). 
// * Displays data for any users who are **not** part of the host&#x27;s account, such as external users, unless they meet certain conditions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. 

// **Prerequisites:** 
// * A Business, Education, or API Plan with Webinar add-on.

// **Scopes:** &#x60;dashboard_webinars:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(10).optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(10).default(1),
// 				total_records: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							device: z.enum([
// 								"Phone",
// 								"H.323/SIP",
// 								"Windows",
// 								"Mac",
// 								"iOS",
// 								"Android",
// 							]),
// 							domain: z.string(),
// 							harddisk_id: z.string(),
// 							internal_ip_addresses: z.array(z.string()),
// 							ip_address: z.string(),
// 							join_time: z.string().datetime({ offset: true }),
// 							leave_time: z.string().datetime({ offset: true }),
// 							location: z.string(),
// 							mac_addr: z.string(),
// 							pc_name: z.string(),
// 							user_id: z.string(),
// 							user_name: z.string(),
// 							user_qos: z.array(
// 								z
// 									.object({
// 										as_device_from_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_device_to_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_input: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_output: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_device_from_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_device_to_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_input: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_output: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										cpu_usage: z
// 											.object({
// 												system_max_cpu_usage: z.string(),
// 												zoom_avg_cpu_usage: z.string(),
// 												zoom_max_cpu_usage: z.string(),
// 												zoom_min_cpu_usage: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										date_time: z.string().datetime({ offset: true }),
// 										video_device_from_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_device_to_crc: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_input: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_output: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_device_from_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										as_device_to_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_device_from_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										audio_device_to_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_device_from_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										video_device_to_rwg: z
// 											.object({
// 												avg_loss: z.string(),
// 												bitrate: z.string(),
// 												jitter: z.string(),
// 												latency: z.string(),
// 												max_loss: z.string(),
// 												frame_rate: z.string(),
// 												resolution: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 										wifi_rssi: z
// 											.object({
// 												max_rssi: z.number().int(),
// 												avg_rssi: z.number().int(),
// 												min_rssi: z.number().int(),
// 												rssi_unit: z.string(),
// 											})
// 											.partial()
// 											.passthrough(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							version: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access a webinar a year ago. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  This webinar&#x27;s detail is not available or the Webinar ID is not valid.&lt;br&gt;
// This webinar has not ended yet. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/webinars/:webinarId/participants/satisfaction",
// 		description: `When a Webinar ends, each attendee will be prompted to share their Webinar experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific webinar. Note that this API only works for meetings scheduled after December 20, 2020.

// **Prerequisites:**
// * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
// * The user making the API request must be enrolled in a Business or a higher plan.


  
  

// **Scopes:** &#x60;dashboard_webinars:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "pastOne", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_size: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							date_time: z.string().datetime({ offset: true }),
// 							email: z.string().email(),
// 							quality: z.enum(["GOOD", "NOT GOOD"]),
// 							user_id: z.string(),
// 							comment: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid accounts that have dashboard feature enabled.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar ID is invalid or not end.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/webinars/:webinarId/participants/sharing",
// 		description: `Retrieve the sharing and recording details of participants from live or past webinars.   
   
 
// **Prerequisites:**  
 
// * Business, Education or API Plan with Webinar add-on.



// **Scopes:** &#x60;dashboard_webinars:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["past", "live"]).optional().default("live"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							details: z.array(
// 								z
// 									.object({
// 										content: z.string(),
// 										end_time: z.string(),
// 										start_time: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							id: z.string(),
// 							user_id: z.string(),
// 							user_name: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
// Can not access a webinar a year ago.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// This webinar&#x27;s detail info is not available or ID is not valid.&lt;br&gt;
// This webinar has not ended yet.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/zoomrooms",
// 		description: `List information on all Zoom Rooms in an account.  
   
 
// **Prerequisites:**  
 
// * Business, Education or API Plan with Zoom Rooms set up.




// **Scopes:** &#x60;dashboard_zr:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Resource-intensive&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				zoom_rooms: z.array(
// 					z
// 						.object({
// 							account_type: z.string(),
// 							calender_name: z.string(),
// 							camera: z.string(),
// 							device_ip: z.string(),
// 							email: z.string(),
// 							health: z.string(),
// 							id: z.string(),
// 							issues: z.array(z.string()),
// 							last_start_time: z.string(),
// 							location: z.string(),
// 							location_id: z.string(),
// 							microphone: z.string(),
// 							room_name: z.string(),
// 							speaker: z.string(),
// 							status: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/zoomrooms/:zoomroomId",
// 		description: `The Zoom Rooms dashboard metrics lets you know the type of configuration a Zoom room has and details on the meetings held in that room. 

// Use this API to retrieve information on a specific room.  
   
 
// **Prerequisites:**  
 
// * Business, Education or API Plan with Zoom Rooms set up.


// **Scopes:** &#x60;dashboard_zr:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "zoomroomId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				account_type: z.string(),
// 				calender_name: z.string(),
// 				camera: z.string(),
// 				device_ip: z.string(),
// 				email: z.string(),
// 				health: z.string(),
// 				id: z.string(),
// 				issues: z.array(z.string()),
// 				last_start_time: z.string(),
// 				location: z.string(),
// 				microphone: z.string(),
// 				room_name: z.string(),
// 				speaker: z.string(),
// 				status: z.string(),
// 				live_meeting: z
// 					.object({
// 						host: z.string(),
// 						custom_keys: z
// 							.array(
// 								z
// 									.object({
// 										key: z.string().max(64),
// 										value: z.string().max(256),
// 									})
// 									.partial()
// 									.passthrough()
// 							)
// 							.max(10),
// 						dept: z.string(),
// 						duration: z.string(),
// 						email: z.string(),
// 						end_time: z.string().datetime({ offset: true }),
// 						has_3rd_party_audio: z.boolean(),
// 						has_archiving: z.boolean(),
// 						has_pstn: z.boolean(),
// 						has_recording: z.boolean(),
// 						has_screen_share: z.boolean(),
// 						has_sip: z.boolean(),
// 						has_video: z.boolean(),
// 						has_voip: z.boolean(),
// 						has_manual_captions: z.boolean(),
// 						has_automated_captions: z.boolean(),
// 						id: z.number().int(),
// 						in_room_participants: z.number().int(),
// 						participants: z.number().int(),
// 						start_time: z.string().datetime({ offset: true }),
// 						topic: z.string(),
// 						user_type: z.string(),
// 						uuid: z.string(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				past_meetings: z
// 					.object({
// 						from: z.string(),
// 						to: z.string(),
// 						next_page_token: z.string(),
// 						page_count: z.number().int(),
// 						page_size: z.number().int().lte(300).default(30),
// 						total_records: z.number().int(),
// 						meetings: z.array(
// 							z
// 								.object({
// 									host: z.string(),
// 									custom_keys: z
// 										.array(
// 											z
// 												.object({
// 													key: z.string().max(64),
// 													value: z.string().max(256),
// 												})
// 												.partial()
// 												.passthrough()
// 										)
// 										.max(10),
// 									dept: z.string(),
// 									duration: z.string(),
// 									email: z.string(),
// 									end_time: z.string().datetime({ offset: true }),
// 									has_3rd_party_audio: z.boolean(),
// 									has_archiving: z.boolean(),
// 									has_pstn: z.boolean(),
// 									has_recording: z.boolean(),
// 									has_screen_share: z.boolean(),
// 									has_sip: z.boolean(),
// 									has_video: z.boolean(),
// 									has_voip: z.boolean(),
// 									has_manual_captions: z.boolean(),
// 									has_automated_captions: z.boolean(),
// 									id: z.number().int(),
// 									in_room_participants: z.number().int(),
// 									participants: z.number().int(),
// 									start_time: z.string().datetime({ offset: true }),
// 									topic: z.string(),
// 									user_type: z.string(),
// 									uuid: z.string(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/metrics/zoomrooms/issues",
// 		description: `Get top 25 issues of Zoom Rooms.  
 
// **Prerequisites:**  
 
// * Business, Education or API Plan with Zoom Rooms set up.



// **Scopes:** &#x60;dashboard_zr:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				total_records: z.number().int(),
// 				issues: z.array(
// 					z
// 						.object({
// 							issue_name: z.string(),
// 							zoom_rooms_count: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/past_meetings/:meetingId",
// 		description: `Get information about a past meeting. 

 

// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: meetingId,
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				uuid: z.string(),
// 				duration: z.number().int(),
// 				start_time: z.string().datetime({ offset: true }),
// 				end_time: z.string().datetime({ offset: true }),
// 				host_id: z.string(),
// 				dept: z.string(),
// 				participants_count: z.number().int(),
// 				source: z.string(),
// 				topic: z.string(),
// 				total_minutes: z.number().int(),
// 				type: z.union([
// 					z.literal(0),
// 					z.literal(1),
// 					z.literal(2),
// 					z.literal(3),
// 					z.literal(4),
// 					z.literal(7),
// 					z.literal(8),
// 				]),
// 				user_email: z.string().email(),
// 				user_name: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// * User does not exist: {userId} 
// * User &quot;{userId}&quot; does not exist or does not belong to this account.

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Cannot access meeting information.

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for paid account: {accountId}

// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
// Can not access a meeting a year ago.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// * This meeting is not available or the meeting ID is invalid. 
// * The meeting ID is invalid or the meeting has not ended.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_meetings/:meetingId/instances",
// 		description: `Return a list of past meeting instances. 

 

// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				meetings: z.array(
// 					z
// 						.object({
// 							start_time: z.string().datetime({ offset: true }),
// 							uuid: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_meetings/:meetingId/participants",
// 		description: `Retrieve information on participants from a past meeting. Note the API doesn&#x27;t return results if there&#x27;s only one participant in a meeting.  
   
 
// **Prerequisites:**  
 
// * Paid account on a Pro or higher plan.

  
    
//    **Note**: Please double encode your UUID when using this API if the UUID begins with a &#x27;/&#x27;or contains &#x27;//&#x27; in it.


// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							name: z.string(),
// 							user_id: z.string(),
// 							registrant_id: z.string(),
// 							user_email: z.string(),
// 							join_time: z.string().datetime({ offset: true }),
// 							leave_time: z.string().datetime({ offset: true }),
// 							duration: z.number().int(),
// 							failover: z.boolean(),
// 							status: z.enum(["in_meeting", "in_waiting_room"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User {userId} not exist or not belong to this account.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Cannot access meeting information.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Only available for paid account: {accountId} &lt;br&gt;
// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access a meeting a year ago. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} not exist or not belong to this account.&lt;br&gt;
// User not exist: {userId}&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  This meeting is not available or ID is not valid.&lt;br&gt;
// Meeting ID is invalid or not end. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_meetings/:meetingId/polls",
// 		description: `[Polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) allow the meeting host to survey attendees. List poll results of a meeting.  
   
 

// **Prerequisites**:  
 
// * Host user type must be **Pro**.
// * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.

// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				questions: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							name: z.string(),
// 							question_details: z.array(
// 								z
// 									.object({
// 										answer: z.string(),
// 										date_time: z.string().datetime({ offset: true }),
// 										polling_id: z.string(),
// 										question: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				start_time: z.string().datetime({ offset: true }),
// 				uuid: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access a meeting a year ago. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_meetings/:meetingId/qa",
// 		description: `The question &amp;amp; answer (Q&amp;amp;A) feature for Zoom Meetings lets attendees ask questions during a meeting and lets the other attendees answer those questions.  
 
// List Q&amp;amp;A of a specific meeting.

// **Prerequisites:**  
 
// * 

// **Scopes:** &#x60;meeting:read:admin&#x60;,&#x60;meeting:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				questions: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							name: z.string(),
// 							question_details: z.array(
// 								z
// 									.object({ answer: z.string(), question: z.string() })
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				start_time: z.string().datetime({ offset: true }),
// 				uuid: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 401,
// 				description: `**HTTP Status Code:** &#x60;401&#x60; &lt;br&gt;
//  Unauthorized 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting ID is invalid or not end.&lt;br&gt;
// This Meeting id does not belong to you:{meetingId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_meetings/:meetingUUID/archive_files",
// 		description: `Return a specific meeting instance&#x27;s [archived files](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-indicators). 

//  **Prerequisites:** 
// * The [**Meeting and Webinar Archiving** feature](https://support.zoom.us/hc/en-us/articles/4405656451213--Archiving-for-meetings-and-webinars) enabled for your account by [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).

// **Scopes:** &#x60;recording:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingUUID",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				account_name: z.string(),
// 				archive_files: z.array(
// 					z
// 						.object({
// 							download_url: z.string(),
// 							file_extension: z.string(),
// 							file_path: z.string().optional(),
// 							file_size: z.number().int(),
// 							file_type: z.enum(["MP4", "M4A", "CHAT", "CC", "CHAT_MESSAGE"]),
// 							id: z.string(),
// 							individual: z.boolean(),
// 							participant_email: z.string().email().optional(),
// 							participant_join_time: z.string().datetime({ offset: true }),
// 							participant_leave_time: z.string().datetime({ offset: true }),
// 							recording_type: z.enum([
// 								"shared_screen_with_speaker_view",
// 								"audio_only",
// 								"chat_file",
// 								"closed_caption",
// 								"chat_message",
// 							]),
// 							status: z.enum(["completed", "processing", "failed"]),
// 							encryption_fingerprint: z.string(),
// 							number_of_messages: z.number().int().optional(),
// 							storage_location: z
// 								.enum(["US", "AU", "BR", "CA", "EU", "IN", "JP", "SG", "CH"])
// 								.optional(),
// 							auto_delete: z.boolean().optional(),
// 						})
// 						.passthrough()
// 				),
// 				complete_time: z
// 					.union([z.object({}).partial().passthrough(), z.literal("")])
// 					.datetime({ offset: true }),
// 				duration: z.number().int(),
// 				duration_in_second: z.number().int(),
// 				host_id: z.string(),
// 				id: z.number().int(),
// 				is_breakout_room: z.boolean(),
// 				meeting_type: z.enum(["internal", "external"]),
// 				parent_meeting_id: z.string().optional(),
// 				recording_count: z.number().int(),
// 				start_time: z.string().datetime({ offset: true }),
// 				timezone: z.string(),
// 				topic: z.string(),
// 				total_size: z.number().int(),
// 				type: z.union([
// 					z.literal(1),
// 					z.literal(2),
// 					z.literal(3),
// 					z.literal(4),
// 					z.literal(5),
// 					z.literal(6),
// 					z.literal(7),
// 					z.literal(8),
// 					z.literal(9),
// 					z.literal(100),
// 				]),
// 				uuid: z.string(),
// 				status: z.enum(["completed", "processing"]),
// 			})
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting {meetingUUId} does not exist. &lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/past_meetings/:meetingUUID/archive_files",
// 		description: `Use this API to delete all of a meeting&#x27;s archived files. 

//  **Prerequisites:** 
// * The [**Meeting and Webinar Archiving** feature](https://support.zoom.us/hc/en-us/articles/4405656451213--Archiving-for-meetings-and-webinars) enabled for your account by [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).

// **Scopes:** &#x60;recording:write:admin&#x60;,&#x60;recording:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingUUID",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Only available for Paid account.

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Not available for this account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {0}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_webinars/:webinarId/absentees",
// 		description: `List absentees of a webinar.  
   
 


// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				registrants: z.array(
// 					z
// 						.object({
// 							id: z.string().optional(),
// 							address: z.string().optional(),
// 							city: z.string().optional(),
// 							comments: z.string().optional(),
// 							country: z.string().optional(),
// 							custom_questions: z
// 								.array(
// 									z
// 										.object({ title: z.string(), value: z.string().max(128) })
// 										.partial()
// 										.passthrough()
// 								)
// 								.optional(),
// 							email: z.string().max(128).email(),
// 							first_name: z.string().max(64),
// 							industry: z.string().optional(),
// 							job_title: z.string().optional(),
// 							last_name: z.string().max(64).optional(),
// 							no_of_employees: z
// 								.enum([
// 									"",
// 									"1-20",
// 									"21-50",
// 									"51-100",
// 									"101-250",
// 									"251-500",
// 									"501-1,000",
// 									"1,001-5,000",
// 									"5,001-10,000",
// 									"More than 10,000",
// 								])
// 								.optional(),
// 							org: z.string().optional(),
// 							phone: z.string().optional(),
// 							purchasing_time_frame: z
// 								.enum([
// 									"",
// 									"Within a month",
// 									"1-3 months",
// 									"4-6 months",
// 									"More than 6 months",
// 									"No timeframe",
// 								])
// 								.optional(),
// 							role_in_purchase_process: z
// 								.enum([
// 									"",
// 									"Decision Maker",
// 									"Evaluator/Recommender",
// 									"Influencer",
// 									"Not involved",
// 								])
// 								.optional(),
// 							state: z.string().optional(),
// 							status: z.enum(["approved", "denied", "pending"]).optional(),
// 							zip: z.string().optional(),
// 							create_time: z.string().datetime({ offset: true }).optional(),
// 							join_url: z.string().optional(),
// 						})
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  The request could not be completed because you have provided an invalid occurrence ID: {occurrenceId}&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  This Webinar has not registration required: {webinarUUID} &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting ID is invalid or not end. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_webinars/:webinarId/instances",
// 		description: `List past webinar instances.  
   
 


// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				webinars: z.array(
// 					z
// 						.object({
// 							start_time: z.string().datetime({ offset: true }),
// 							uuid: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_webinars/:webinarId/participants",
// 		description: `Retrieve a list of all the participants who attended a webinar hosted in the past. 

// **Prerequisites:** 
// * A Pro or higher plan with a webinar add-on.

// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				participants: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							name: z.string(),
// 							user_id: z.string(),
// 							registrant_id: z.string(),
// 							user_email: z.string().email(),
// 							join_time: z.string().datetime({ offset: true }),
// 							leave_time: z.string().datetime({ offset: true }),
// 							duration: z.number().int(),
// 							failover: z.boolean(),
// 							status: z.enum(["in_meeting", "in_waiting_room"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  No permission.&lt;br&gt;
// Only available for paid account: {accountId}.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  The next page token is invalid or expired. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_webinars/:webinarId/polls",
// 		description: `The polling feature for webinar lets you create single-choice or multiple-choice polling questions for your webinars. This API endpoint retrieves the results for webinar polls of a specific webinar.

// **Prerequisites:**  
 
// * [Webinar license](https://zoom.us/webinar)  
 


// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				questions: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							name: z.string(),
// 							question_details: z.array(
// 								z
// 									.object({
// 										answer: z.string(),
// 										date_time: z.string().datetime({ offset: true }),
// 										polling_id: z.string(),
// 										question: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				start_time: z.string().datetime({ offset: true }),
// 				uuid: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 401,
// 				description: `**HTTP Status Code:** &#x60;401&#x60; &lt;br&gt;
//  Unauthorized 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar ID is invalid or not end.&lt;br&gt;
// This webinar id does not belong to you:{webinarId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/past_webinars/:webinarId/qa",
// 		description: `List the Q&amp;amp;A of a specific past webinar. 

// The [question &amp;amp; answer (Q&amp;amp;A)](https://support.zoom.us/hc/en-us/articles/203686015-Getting-Started-with-Question-Answer) feature for webinars lets attendees ask questions during the webinar and for the panelists, co-hosts and host to answer their questions. 

// **Prerequisites**  
 
// * [Webinar license](https://zoom.us/webinar)  
 


// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				questions: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							name: z.string(),
// 							question_details: z.array(
// 								z
// 									.object({ answer: z.string(), question: z.string() })
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				start_time: z.string().datetime({ offset: true }),
// 				uuid: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 401,
// 				description: `**HTTP Status Code:** &#x60;401&#x60; &lt;br&gt;
//  Unauthorized 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar ID is invalid or not end.&lt;br&gt;
// This webinar id does not belong to you:{webinarId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/activities",
// 		description: `Retrieve a list of sign in / sign out activity logs [report](https://support.zoom.us/hc/en-us/articles/201363213-Getting-Started-with-Reports) of users under a Zoom account.  
 
// **Prerequisites**  
 
// * Pro or higher plan.  
 


// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().optional(),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				activity_logs: z.array(
// 					z
// 						.object({
// 							client_type: z.string(),
// 							email: z.string().email(),
// 							ip_address: z.string(),
// 							time: z.string().datetime({ offset: true }),
// 							type: z.enum(["Sign in", "Sign out"]),
// 							version: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				from: z.string(),
// 				next_page_token: z.string(),
// 				page_size: z.number().int(),
// 				to: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/billing",
// 		description: `Get department billing reports of a Zoom account.

// **Prerequisites:**  
 
// * Pro or a higher account with Department Billing option enabled. Contact Zoom Support team for details.



// **Scopes:** &#x60;report:read:admin&#x60;,&#x60;report:master&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		response: z
// 			.object({
// 				billing_reports: z.array(
// 					z
// 						.object({
// 							end_date: z.string(),
// 							id: z.string(),
// 							start_date: z.string(),
// 							tax_amount: z.string(),
// 							total_amount: z.string(),
// 							type: z.union([z.literal(0), z.literal(1)]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				currency: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/billing/invoices",
// 		description: `Get department billing invoices reports for a specific billing period. Provide the &#x60;billing_id&#x60; of the billing period for which you would like to retrieve the invoices for. This ID can be retrieved from **Get Billing Reports** API. 

// **Prerequisites:**  
 
// * Pro or a higher account with Department Billing option enabled. Contact the Zoom Support team to enable this feature.



// **Scopes:** &#x60;report:read:admin&#x60;,&#x60;report:master&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "billing_id",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				currency: z.string(),
// 				invoices: z.array(
// 					z
// 						.object({
// 							end_date: z.string(),
// 							invoice_charge_name: z.string(),
// 							invoice_number: z.string(),
// 							quantity: z.number().int(),
// 							start_date: z.string(),
// 							tax_amount: z.string(),
// 							total_amount: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;5010&#x60; &lt;br&gt;
// Report does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/cloud_recording",
// 		description: `Retrieve cloud recording usage report for a specified period. You can only get cloud recording reports that is one day earlier than the current date and for the most recent period of 6 months. The date gap between from and to dates should be smaller or equal to 30 days.   
 
// **Prerequisites**  
 
// * Pro or higher plan.  
 


// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "group_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				cloud_recording_storage: z.array(
// 					z
// 						.object({
// 							date: z.string(),
// 							free_usage: z.string(),
// 							plan_usage: z.string(),
// 							usage: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;
// ’

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/daily",
// 		description: `Retrieve daily report to access the account-wide usage of Zoom services for each day in a given month. It lists the number of new users, meetings, participants, and meeting minutes.  
 
// **Prerequisites**  
 
// * Pro or higher plan.  
 


// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "year",
// 				type: "Query",
// 				schema: z.number().int().optional(),
// 			},
// 			{
// 				name: "month",
// 				type: "Query",
// 				schema: z.number().int().optional(),
// 			},
// 			{
// 				name: "group_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				dates: z.array(
// 					z
// 						.object({
// 							date: z.string(),
// 							meeting_minutes: z.number().int(),
// 							meetings: z.number().int(),
// 							new_users: z.number().int(),
// 							participants: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				month: z.number().int(),
// 				year: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Daily report can only be provided for a month that falls within the recent 6 months.

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;
// ’

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/meetings/:meetingId",
// 		description: `Get a detailed report for a past meeting.   
 
// **Prerequisites:**  
 
// * Pro or a higher plan.  
 
 

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: meetingId,
// 			},
// 		],
// 		response: z
// 			.object({
// 				custom_keys: z
// 					.array(
// 						z
// 							.object({ key: z.string().max(64), value: z.string().max(256) })
// 							.partial()
// 							.passthrough()
// 					)
// 					.max(10),
// 				dept: z.string(),
// 				duration: z.number().int(),
// 				end_time: z.string().datetime({ offset: true }),
// 				id: z.number().int(),
// 				participants_count: z.number().int(),
// 				start_time: z.string().datetime({ offset: true }),
// 				topic: z.string(),
// 				total_minutes: z.number().int(),
// 				tracking_fields: z.array(
// 					z
// 						.object({ field: z.string(), value: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 				type: z.number().int(),
// 				user_email: z.string(),
// 				user_name: z.string(),
// 				uuid: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
// Can not access meeting a year ago.&lt;br&gt;

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting {meetingId} not found or has expired.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/meetings/:meetingId/participants",
// 		description: `Return a report of a past meeting with two or more participants, including the host. To return a report for past meeting with only **one** participant, use the [**List meeting participants**](/docs/api-reference/zoom-api/ma#operation/dashboardMeetingParticipants) API. 

// **Note:** 

// This API may return empty values for participants&#x27; &#x60;user_name&#x60;, &#x60;ip_address&#x60;, &#x60;location&#x60;, and &#x60;email&#x60; responses when the account calling this API: 
// * Does **not** have a signed HIPAA business associate agreement (BAA). 
// * Is a [**legacy** HIPAA BAA account](/docs/api-reference/other-references/legacy-business-associate-agreements). 

// **Prerequisites:** 
// * A Pro or a higher plan.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "include_fields",
// 				type: "Query",
// 				schema: z.literal("registrant_id").optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							customer_key: z.string().max(35),
// 							duration: z.number().int(),
// 							failover: z.boolean(),
// 							id: z.string(),
// 							join_time: z.string().datetime({ offset: true }),
// 							leave_time: z.string().datetime({ offset: true }),
// 							name: z.string(),
// 							registrant_id: z.string(),
// 							status: z.enum(["in_meeting", "in_waiting_room"]),
// 							user_email: z.string(),
// 							user_id: z.string(),
// 							bo_mtg_id: z.string(),
// 							participant_user_id: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access meeting a year ago.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  No permission.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Meeting  {MeetingId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/meetings/:meetingId/polls",
// 		description: `Use this API to get a report of [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) results for a past meeting. 

//  **Prerequisites:** 
// * A Pro or a higher plan.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: meetingId,
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				uuid: z.string(),
// 				start_time: z.string().datetime({ offset: true }),
// 				questions: z.array(
// 					z
// 						.object({
// 							email: z.string().email(),
// 							name: z.string(),
// 							first_name: z.string(),
// 							last_name: z.string(),
// 							question_details: z.array(
// 								z
// 									.object({
// 										answer: z.string(),
// 										date_time: z.string(),
// 										polling_id: z.string(),
// 										question: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
// Can not access meeting a year ago.

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting &quot;{meetingId}&quot; not found or has expired.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/meetings/:meetingId/qa",
// 		description: `The question &amp;amp; answer (Q&amp;amp;A) feature for meetings lets attendees ask questions during the meeting and lets the other attendees answer their questions.

// Use this API to retrieve a report on question and answers from past meetings.   
   
 
// **Prerequisites:**  
 
// * Pro or a higher plan.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "meetingId",
// 				type: "Path",
// 				schema: meetingId,
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				questions: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							name: z.string(),
// 							question_details: z.array(
// 								z
// 									.object({ answer: z.string(), question: z.string() })
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				start_time: z.string().datetime({ offset: true }),
// 				uuid: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: {userId}.&lt;br&gt;

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting {meetingId} not found or has expired.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/operationlogs",
// 		description: `The [Operations Logs](https://support.zoom.us/hc/en-us/articles/360032748331-Operation-Logs) report allows you to audit admin and user activity, such as adding a new user, changing account settings, and deleting recordings.  
 
// Use this API to retrieve operation logs report for a specified period of time.  
 
// **Prerequisites:**  
 
// * Pro or higher plan.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "category_type",
// 				type: "Query",
// 				schema: z
// 					.enum([
// 						"all",
// 						"user",
// 						"user_settings",
// 						"account",
// 						"billing",
// 						"im",
// 						"recording",
// 						"phone_contacts",
// 						"webinar",
// 						"sub_account",
// 						"role",
// 						"zoom_rooms",
// 					])
// 					.optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_size: z.number().int().lte(300).default(30),
// 				operation_logs: z.array(
// 					z
// 						.object({
// 							action: z.string(),
// 							category_type: z.string(),
// 							operation_detail: z.string(),
// 							operator: z.string(),
// 							time: z.string().datetime({ offset: true }),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/telephone",
// 		description: `The [telephone report](https://support.zoom.us/hc/en-us/articles/206514816-Telephone-reports) allows you to view who dialed into meetings via phone (Audio Conferencing or SIP Connected Audio) and which number they dialed into and other details. Use this API to get telephone report for a specified period of time.

// **Prerequisites:**  
 
// * Pro or higher plan.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["1", "2", "3"]).optional().default("1"),
// 			},
// 			{
// 				name: "query_date_type",
// 				type: "Query",
// 				schema: z
// 					.enum([
// 						"start_time",
// 						"end_time",
// 						"meeting_start_time",
// 						"meeting_end_time",
// 					])
// 					.optional()
// 					.default("start_time"),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int(),
// 				to: z.string(),
// 				total_records: z.number().int(),
// 				telephony_usage: z.array(
// 					z
// 						.object({
// 							call_in_number: z.string(),
// 							country_name: z.string(),
// 							dept: z.string(),
// 							duration: z.number().int(),
// 							end_time: z.string().datetime({ offset: true }),
// 							host_email: z.string(),
// 							host_id: z.string(),
// 							host_name: z.string(),
// 							meeting_id: z.number().int(),
// 							meeting_type: z.string(),
// 							phone_number: z.string(),
// 							rate: z.number(),
// 							signaled_number: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							total: z.number(),
// 							type: z.enum([
// 								"toll-free",
// 								"call-out",
// 								"call-in",
// 								"US toll-number",
// 								"global toll-number",
// 								"premium",
// 								"premium call-in",
// 								"Toll",
// 							]),
// 							uuid: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/report/upcoming_events",
// 		description: `Use this API to list upcoming meeting and/or webinar events within a specified period of time. The report&#x27;s time range is limited to one month.

// **Prerequisites:** 
// * A Pro or higher plan

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["meeting", "webinar", "all"]).optional().default("all"),
// 			},
// 			{
// 				name: "group_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				next_page_token: z.string(),
// 				page_size: z.number().int().lte(300).default(30),
// 				to: z.string(),
// 				upcoming_events: z.array(
// 					z
// 						.object({
// 							dept: z.string(),
// 							host_id: z.string(),
// 							host_name: z.string(),
// 							id: z.string(),
// 							start_time: z.string(),
// 							topic: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// This is only available for the paid account: {accountId} &lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The next page token is invalid or expired.

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/users",
// 		description: `Retrieve a host report for a specified period of time within the last six months.  
// The report time range is limited to a month. 

// You can specify the type of report and date range using the query parameters.  


// * The **Active Hosts** report displays a list of meetings, participants, and meeting minutes.
// An **active host** is defined as any user who has hosted at least one meeting during the during the month specified in the &#x60;from&#x60; and &#x60;to&#x60; range.


// * The **Inactive Hosts** report pulls a list of users who were not active during a specific period of time.   
// An **inactive host** is defined as any user who has not hosted any meetings during the specified period of time for the report. to be inactive.  




 
 
 
// **Prerequisites:**  
 
// * Pro or higher plan.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["active", "inactive"]).optional(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "group_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				to: z.string(),
// 				total_records: z.number().int(),
// 				total_meeting_minutes: z.number().int(),
// 				total_meetings: z.number().int(),
// 				total_participants: z.number().int(),
// 				users: z.array(
// 					z
// 						.object({
// 							custom_attributes: z.array(
// 								z
// 									.object({
// 										key: z.string(),
// 										name: z.string(),
// 										value: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							dept: z.string(),
// 							email: z.string(),
// 							id: z.string(),
// 							meeting_minutes: z.number().int(),
// 							meetings: z.number().int(),
// 							participants: z.number().int(),
// 							type: z.number().int(),
// 							user_name: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  No permission.&lt;br&gt;
// ’ &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/users/:userId/meetings",
// 		description: `Retrieve [report](https://support.zoom.us/hc/en-us/articles/216378603-Meeting-Reporting) on past meetings and webinars for a specified time period. The time range for the report is limited to a month and the month must fall within the past six months.

// Meetings and webinars are returned only if they have two or more unique participants.    
   
 
// **Prerequisites:**  
 
// * Pro or higher plan.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: userId,
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z
// 					.enum(["past", "pastOne", "pastJoined"])
// 					.optional()
// 					.default("past"),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				from: z.string(),
// 				meetings: z.array(
// 					z
// 						.object({
// 							custom_keys: z
// 								.array(
// 									z
// 										.object({
// 											key: z.string().max(64),
// 											value: z.string().max(256),
// 										})
// 										.partial()
// 										.passthrough()
// 								)
// 								.max(10),
// 							duration: z.number().int(),
// 							end_time: z.string().datetime({ offset: true }),
// 							id: z.number().int(),
// 							participants_count: z.number().int(),
// 							session_key: z.string(),
// 							source: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							topic: z.string(),
// 							total_minutes: z.number().int(),
// 							type: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 								z.literal(8),
// 								z.literal(9),
// 							]),
// 							user_email: z.string().email(),
// 							user_name: z.string(),
// 							uuid: z.string(),
// 							schedule_time: z.string(),
// 							join_waiting_room_time: z.string(),
// 							join_time: z.string(),
// 							leave_time: z.string(),
// 							host_organization: z.string(),
// 							host_name: z.string(),
// 							has_screen_share: z.boolean(),
// 							has_recording: z.boolean(),
// 							has_chat: z.boolean(),
// 							meeting_encryption_status: z.union([z.literal(1), z.literal(2)]),
// 							participants_count_my_account: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				to: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// This is only available for paid account:{accountId}.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The next page token is invalid or expired.

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} not exist or not belong to this account.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/webinars/:webinarId",
// 		description: `Retrieve a [report](https://support.zoom.us/hc/en-us/articles/201393719-Webinar-Reporting) containing past webinar details.    
   
 
// **Prerequisites:**  
 
// * Pro or higher plan with Webinar add-on.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				custom_keys: z
// 					.array(
// 						z
// 							.object({ key: z.string().max(64), value: z.string().max(256) })
// 							.partial()
// 							.passthrough()
// 					)
// 					.max(10),
// 				dept: z.string(),
// 				duration: z.number().int(),
// 				end_time: z.string().datetime({ offset: true }),
// 				id: z.number().int(),
// 				participants_count: z.number().int(),
// 				start_time: z.string().datetime({ offset: true }),
// 				topic: z.string(),
// 				total_minutes: z.number().int(),
// 				tracking_fields: z.array(
// 					z
// 						.object({ field: z.string(), value: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 				type: z.number().int(),
// 				user_email: z.string(),
// 				user_name: z.string(),
// 				uuid: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account:{accountId}.&lt;br&gt;

// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
// Can not access a webinar a year ago.&lt;br&gt;

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting  {meetingId} not found or has expired.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/webinars/:webinarId/participants",
// 		description: `Get a detailed report on each webinar attendee. You can get webinar participant reports for the last 6 months. 

//  **Prerequisites:** 
// * A Pro or a higher plan with Webinar add-on enabled.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "include_fields",
// 				type: "Query",
// 				schema: z.literal("registrant_id").optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				participants: z.array(
// 					z
// 						.object({
// 							customer_key: z.string().max(35),
// 							duration: z.number().int(),
// 							failover: z.boolean(),
// 							id: z.string(),
// 							join_time: z.string().datetime({ offset: true }),
// 							leave_time: z.string().datetime({ offset: true }),
// 							name: z.string(),
// 							registrant_id: z.string(),
// 							status: z.enum(["in_meeting", "in_waiting_room"]),
// 							user_email: z
// 								.string()
// 								.regex(
// 									/(^\s*$|^[A-Za-z0-9!#$%&''*+/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&''*+/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$)/
// 								),
// 							user_id: z.string(),
// 							participant_user_id: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account: {accountId} &lt;br&gt;
// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
//  Can not access a webinar a year ago.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  No permission.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar &quot;{webinarId}&quot; not found or has expired &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/webinars/:webinarId/polls",
// 		description: `Retrieve a report on past [webinar polls](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).  
   
 
// **Prerequisites:**  
 
// * Pro or a higher plan with Webinar add-on enabled.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				questions: z.array(
// 					z
// 						.object({
// 							email: z.string().email(),
// 							name: z.string(),
// 							first_name: z.string(),
// 							last_name: z.string(),
// 							question_details: z.array(
// 								z
// 									.object({
// 										answer: z.string(),
// 										date_time: z.string(),
// 										polling_id: z.string(),
// 										question: z.string(),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				start_time: z.string().datetime({ offset: true }),
// 				uuid: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account:{accountId}.&lt;br&gt;

// **Error Code:** &#x60;12702&#x60; &lt;br&gt;
// Can not access a webinar a year ago.&lt;br&gt;

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar  {webinarId} not found or has expired.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/report/webinars/:webinarId/qa",
// 		description: `The Question &amp;amp; Answer (Q&amp;amp;A) feature for webinars allows attendees to ask questions during the webinar and for the panelists, co-hosts and host to answer their questions.

// Use this API to retrieve a report on question and answers from past webinars.   
   
 
// **Prerequisites:**  
 
// * Pro or a higher plan with Webinar add-on enabled.

// **Scopes:** &#x60;report:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Heavy&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				questions: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							name: z.string(),
// 							question_details: z.array(
// 								z
// 									.object({ answer: z.string(), question: z.string() })
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				start_time: z.string().datetime({ offset: true }),
// 				uuid: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// No permission.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: {userId}.&lt;br&gt;

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar  {webinarId} not found or has expired.&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/roles",
// 		description: `List [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) on your account

// **Prerequisites** :
// *  Pro or higher plan. 
// *  For setting the initial role, you must be the Account Owner. 
// *  For subsequent role management, you must be the Account Owner or user with role management permissions.

// **Scopes:** &#x60;role:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["common", "iq"]).optional().default("common"),
// 			},
// 		],
// 		response: z
// 			.object({
// 				roles: z.array(
// 					z
// 						.object({
// 							description: z.string(),
// 							id: z.string(),
// 							name: z.string(),
// 							type: z.string(),
// 							total_members: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;4700&#x60; &lt;br&gt;
// Invalid access token, does not contain role:read:admin scope.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/roles",
// 		description: `Each Zoom user automatically has a role which can either be owner, administrator, or member. 

// **Pre-requisites**  
 
// * Pro or higher plan.
// * To set the initial role, you must be the account owner.  
 
// * For subsequent role management, you must be either the account owner or user with role management permissions.  
 


// **Scopes:** &#x60;role:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: createRole_Body,
// 			},
// 		],
// 		response: z.object({}).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1224&#x60; &lt;br&gt;
//  Role name {roleName} has already been used. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/roles/:roleId",
// 		description: `Each Zoom user automatically has a role which can either be owner, administrator, or member. Account owners and users with edit privileges for role management can add customized roles with a list of privileges.

// Use this API to get information including specific privileges assigned to a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control).  
 
// **Pre-requisites**  
 
// * A Pro or higher plan.  
 
// * For role management and updates, you must be either the account owner or a user with role management permissions.



// **Scopes:** &#x60;role:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "roleId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				description: z.string(),
// 				id: z.string(),
// 				name: z.string(),
// 				type: z.string(),
// 				privileges: z.array(z.string()),
// 				sub_account_privileges: z
// 					.object({ second_level: z.number().int() })
// 					.partial()
// 					.passthrough(),
// 				total_members: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1034&#x60; &lt;br&gt;
//  Provided &#x60;role_id&#x60; does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/roles/:roleId",
// 		description: `Each Zoom user automatically has a role which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list.

// Use this API to delete a role.  
 
// **Pre-requisite:**  
 
// * A Pro or higher plan.  
 
// * For role management and updates, you must be the Account Owner or user with role management permissions.



// **Scopes:** &#x60;role:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "roleId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1034&#x60; &lt;br&gt;
// Provided &#x60;role_id&#x60; does not exist.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/roles/:roleId",
// 		description: `Each Zoom user automatically has a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list.

// Use this API to change the privileges, name and description of a specific role.  
 
// **Pre-requisite:**  
 
// * A Pro or higher plan.  
 
// * For role management and updates, you must be the Account Owner or user with role management permissions.  
 

// **Scopes:** &#x60;role:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: updateRole_Body,
// 			},
// 			{
// 				name: "roleId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.object({}).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1224&#x60; &lt;br&gt;
//  Role name {roleName} has already been used.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1034&#x60; &lt;br&gt;
//  Provided &#x60;role_id&#x60; does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/roles/:roleId/members",
// 		description: `User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to list all the members that are assigned a specific role.

// **Prerequisites:**  
 
// * A Pro or a higher plan.

// **Scopes:** &#x60;role:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "roleId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_count",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 		],
// 		response: z
// 			.object({
// 				members: z.array(
// 					z
// 						.object({
// 							department: z.string(),
// 							email: z.string(),
// 							first_name: z.string(),
// 							id: z.string(),
// 							last_name: z.string(),
// 							type: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1034&#x60; &lt;br&gt;
// Provided &#x60;role_id&#x60; does not exist.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/roles/:roleId/members",
// 		description: `User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to [assign a role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control#h_748b6fd8-5057-4cf4-bbfd-787909c09db0) to members.

// **Prerequisites:**  
 
// * A Pro or a higher plan.

// **Scopes:** &#x60;role:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Role members`,
// 				type: "Body",
// 				schema: AddRoleMembers_Body,
// 			},
// 			{
// 				name: "roleId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				add_at: z.string().datetime({ offset: true }),
// 				ids: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1034&#x60; &lt;br&gt;
// Provided &#x60;role_id&#x60; does not exist.&lt;br&gt;&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// RoleId required.&lt;br&gt;
// Can&#x27;t delete or add members for Normal/Owner roles.&lt;br&gt;&lt;br&gt;

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/roles/:roleId/members/:memberId",
// 		description: `User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to unassign a user&#x27;s role.

// **Prerequisites:**  
 
// * A Pro or a higher plan.

// **Scopes:** &#x60;role:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "roleId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "memberId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1034&#x60; &lt;br&gt;
// Provided &#x60;role_id&#x60; does not exist.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/sip_phones",
// 		description: `Zoom&#x27;s Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to list SIP phones on an account.  
   
 
// **Prerequisites**:
// * Currently only supported on Cisco and Avaya PBX systems. 
// * User must enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.  
  

// **Scopes:** &#x60;sip_phone:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "search_key",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().optional(),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int(),
// 				page_size: z.number().int(),
// 				phones: z.array(
// 					z
// 						.object({
// 							authorization_name: z.string(),
// 							domain: z.string(),
// 							id: z.string(),
// 							password: z.string(),
// 							proxy_server: z.string(),
// 							proxy_server2: z.string(),
// 							proxy_server3: z.string(),
// 							register_server: z.string(),
// 							register_server2: z.string(),
// 							register_server3: z.string(),
// 							registration_expire_time: z.number().int(),
// 							transport_protocol: z.enum(["UDP", "TCP", "TLS", "AUTO"]),
// 							transport_protocol2: z.enum(["UDP", "TCP", "TLS", "AUTO"]),
// 							transport_protocol3: z.enum(["UDP", "TCP", "TLS", "AUTO"]),
// 							user_email: z.string().email(),
// 							user_name: z.string(),
// 							voice_mail: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/sip_phones",
// 		description: `Zoom&#x27;s Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to enable a user to use SIP phone.  
   
 
// **Prerequisites**:
// * Currently only supported on Cisco and Avaya PBX systems. 
// * The account owner or account admin must first enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.  
  

// **Scopes:** &#x60;sip_phone:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: createSIPPhone_Body,
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				authorization_name: z.string().max(64),
// 				domain: z.string().max(64),
// 				password: z.string(),
// 				proxy_server: z.string(),
// 				proxy_server2: z.string(),
// 				proxy_server3: z.string(),
// 				register_server: z.string(),
// 				register_server2: z.string(),
// 				register_server3: z.string(),
// 				registration_expire_time: z.number().int().gte(1).lte(127).default(60),
// 				transport_protocol: z.enum(["UDP", "TCP", "TLS", "AUTO"]),
// 				transport_protocol2: z.enum(["UDP", "TCP", "TLS", "AUTO"]),
// 				transport_protocol3: z.enum(["UDP", "TCP", "TLS", "AUTO"]),
// 				user_email: z.string().max(64).email(),
// 				user_name: z.string().max(64),
// 				voice_mail: z.string().max(255),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Permission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// SIP Phone with the same email already exists.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} not exist or not belong to this account.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/sip_phones/:phoneId",
// 		description: `Use this API to delete a Zoom account&#x27;s SIP phone. 

//  **Prerequisites**: 
// * Currently only supported on Cisco and Avaya PBX systems. 
// * The user must enable **SIP Phone Integration** by contacting the [Zoom Sales](https://zoom.us/contactsales) team.

// **Scopes:** &#x60;sip_phone:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "phoneId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 	},
// 	{
// 		method: "patch",
// 		path: "/sip_phones/:phoneId",
// 		description: `Zoom&#x27;s Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to update information of a specific SIP Phone on a Zoom account.  
   
 
// **Prerequisites**:
// * Currently only supported on Cisco and Avaya PBX systems. 
// * The account owner or account admin must first enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.  
  

// **Scopes:** &#x60;sip_phone:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: updateSIPPhone_Body,
// 			},
// 			{
// 				name: "phoneId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/tracking_fields",
// 		description: `Use this API to list all the [tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) on your Zoom account. Tracking fields let you analyze usage by various fields within an organization. 

// **Prerequisites:** 
// * A Business, Education, API or higher plan.

// **Scopes:** &#x60;tracking_fields:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		response: z
// 			.object({
// 				total_records: z.number().int(),
// 				tracking_fields: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							field: z.string(),
// 							recommended_values: z.array(z.string()),
// 							required: z.boolean(),
// 							visible: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "post",
// 		path: "/tracking_fields",
// 		description: `Use this API to create a new [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields). Tracking fields let you analyze usage by various fields within an organization. When scheduling a meeting, tracking fields will be included in the meeting options. 

// **Prerequisites:** 
// * A Business, Education, API or higher plan.

// **Scopes:** &#x60;tracking_fields:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Tracking Field`,
// 				type: "Body",
// 				schema: trackingfieldCreate_Body,
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				field: z.string(),
// 				recommended_values: z.array(z.string()),
// 				required: z.boolean(),
// 				visible: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/tracking_fields/:fieldId",
// 		description: `Use this API to return information about a [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields). 

// **Prerequisites:** 
// * A Business, Education, API or higher plan.

// **Scopes:** &#x60;tracking_fields:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "fieldId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				field: z.string(),
// 				recommended_values: z.array(z.string()),
// 				required: z.boolean(),
// 				visible: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/tracking_fields/:fieldId",
// 		description: `Use this API to delete a [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields). 

// **Prerequisites:** 
// * A Business, Education, API or higher plan.

// **Scopes:** &#x60;tracking_fields:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "fieldId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/tracking_fields/:fieldId",
// 		description: `Use this API to update a [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields). 

// **Prerequisites:** 
// * A Business, Education, API or higher plan.

// **Scopes:** &#x60;tracking_fields:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: trackingfieldCreate_Body,
// 			},
// 			{
// 				name: "fieldId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/tsp",
// 		description: `Get information on Telephony Service Provider on an account level.  
   
 
// **Prerequisites:**  
 
// * A Pro or a higher plan.

// **Scopes:** &#x60;tsp:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		response: z
// 			.object({
// 				dial_in_number_unrestricted: z.boolean(),
// 				dial_in_numbers: z.array(
// 					z
// 						.object({
// 							code: z.string(),
// 							number: z.string().max(16),
// 							type: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				enable: z.boolean(),
// 				master_account_setting_extended: z.boolean(),
// 				modify_credential_forbidden: z.boolean(),
// 				tsp_bridge: z.enum(["US_TSP_TB", "EU_TSP_TB"]),
// 				tsp_enabled: z.boolean(),
// 				tsp_provider: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "patch",
// 		path: "/tsp",
// 		description: `Update information of the Telephony Service Provider set up on an account.  
 
// **Prerequisites**:  
 
// TSP account option should be enabled.  
 


// **Scopes:** &#x60;tsp:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `TSP Account`,
// 				type: "Body",
// 				schema: tspUpdate_Body,
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid parameter: tsp_bridge.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users",
// 		description: `Retrieve a list your account&#x27;s users. 



// **Scopes:** &#x60;user:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "status",
// 				type: "Query",
// 				schema: z
// 					.enum(["active", "inactive", "pending"])
// 					.optional()
// 					.default("active"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "role_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "include_fields",
// 				type: "Query",
// 				schema: z.enum(["custom_attributes", "host_key"]).optional(),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "license",
// 				type: "Query",
// 				schema: z.literal("zoom_workforce_management").optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				users: z.array(
// 					z
// 						.object({
// 							user_created_at: z.string().datetime({ offset: true }).optional(),
// 							created_at: z.string().datetime({ offset: true }).optional(),
// 							custom_attributes: z
// 								.array(
// 									z
// 										.object({
// 											key: z.string(),
// 											name: z.string(),
// 											value: z.string(),
// 										})
// 										.partial()
// 										.passthrough()
// 								)
// 								.optional(),
// 							dept: z.string().optional(),
// 							email: z.string().email(),
// 							employee_unique_id: z.string().optional(),
// 							first_name: z.string().max(64).optional(),
// 							group_ids: z.array(z.string()).optional(),
// 							host_key: z.string().optional(),
// 							id: z.string().optional(),
// 							im_group_ids: z.array(z.string()).optional(),
// 							last_client_version: z.string().optional(),
// 							last_login_time: z.string().datetime({ offset: true }).optional(),
// 							last_name: z.string().max(64).optional(),
// 							plan_united_type: z
// 								.enum([
// 									"1",
// 									"2",
// 									"4",
// 									"8",
// 									"16",
// 									"32",
// 									"64",
// 									"128",
// 									"256",
// 									"512",
// 									"1024",
// 									"2048",
// 									"4096",
// 									"8192",
// 									"16384",
// 									"32768",
// 									"65536",
// 									"131072",
// 								])
// 								.optional(),
// 							pmi: z.number().int().optional(),
// 							role_id: z.string().optional(),
// 							status: z.enum(["active", "inactive", "pending"]).optional(),
// 							timezone: z.string().optional(),
// 							type: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(4),
// 								z.literal(99),
// 							]),
// 							verified: z.union([z.literal(1), z.literal(0)]).optional(),
// 							display_name: z.string().max(128).optional(),
// 						})
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "post",
// 		path: "/users",
// 		description: `Add a new user to your Zoom account. 

// **Note** These rate limits apply when you use the &#x60;create&#x60; value for the &#x60;action&#x60; field: 
// * 50 requests per day for **Free** accounts. 
// * 1,500 requests per day for **Pro** accounts. 
// * 10,000 requests per day for **Business+** accounts. 

// **Prerequisites:** 
// * A Pro or higher plan.

// **Scopes:** &#x60;user:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `User`,
// 				type: "Body",
// 				schema: userCreate_Body,
// 			},
// 		],
// 		response: z
// 			.object({
// 				email: z.string(),
// 				first_name: z.string().max(64),
// 				id: z.string(),
// 				last_name: z.string().max(64),
// 				type: z.union([z.literal(1), z.literal(2), z.literal(99)]),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid parameter: password
//  Your account can&#x27;t set user type as On-prem. &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  No privilege. &lt;br&gt; No permission. &lt;br&gt; Invalid access token, does not contain permissions:[User:Edit]. &lt;br&gt;
// **Error Code:** &#x60;1000&#x60; &lt;br&gt;
//  The user cannot be changed because they are a Call-queue manager or Auto-receptionist operator. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Your request could not be completed because the name contains an invalid word: {name} &lt;br&gt; The value provided for plan_united_type parameter is invalid. Try again with a valid value. &lt;br&gt;
// **Error Code:** &#x60;1009&#x60; &lt;br&gt;
//  The user $email already holds an active account. &lt;br&gt;
// **Error Code:** &#x60;1107&#x60; &lt;br&gt;
//  Email domain is blocked &lt;br&gt;
// **Error Code:** &#x60;2034&#x60; &lt;br&gt;
//  Your request to add a new {0} user could not be approved at this time because your account has reached the permitted maximum number of {1} users. Please purchase additional licenses or contact the Zoom support team to provision additional users in your account. &lt;br&gt;
// **Error Code:** &#x60;2033&#x60; &lt;br&gt;
//  Your request to add a basic user was not approved because you have already reached the maximum basic user limit allowed in your account. For additional help regarding this issue, contact the Zoom Customer Support team. &lt;br&gt;
// **Error Code:** &#x60;3412&#x60; &lt;br&gt;
//  Your request to add a basic user could not be approved at this time because your account has reached the permitted maximum number of $maxAllowedNumber basic users. Please remove existing basic user(s) from your Users list or the Pending Users list before attempting to add another user. &lt;br&gt; Your request to add a new $userType user could not be approved at this time because your account has reached the permitted maximum number of $maxAllowedNumber paying users. Please purchase additional licenses or contact the Zoom support team to provision additional users in your account. &lt;br&gt;
// **Error Code:** &#x60;1108&#x60; &lt;br&gt;
//  Permission requirements to change the user type of this user were not met. &lt;br&gt;
// **Error Code:** &#x60;1116&#x60; &lt;br&gt;
//  Email address $email doesn&#x27;t match limited domains: $domains &lt;br&gt;
// **Error Code:** &#x60;2002&#x60; &lt;br&gt;
//  SSO has not been enabled for this account. Contact the Zoom support team to enable this option. &lt;br&gt;
// **Error Code:** &#x60;2032&#x60; &lt;br&gt;
//  The ssoCreate option is only available for SSO Partners that have enabled the pre-provision option. Contact the Zoom Support team to learn more. &lt;br&gt;
// **Error Code:** &#x60;2035&#x60; &lt;br&gt;
//  GPA accounts cannot add users. &lt;br&gt;
// **Error Code:** &#x60;2036&#x60; &lt;br&gt;
//  Other accounts cannot invite GPA account owners. &lt;br&gt;
// **Error Code:** &#x60;2037&#x60; &lt;br&gt;
//  Force forbidden user can not be invited. &lt;br&gt;
// **Error Code:** &#x60;2038&#x60; &lt;br&gt;
//  Your request to add a new Zoom One user could not be approved at this time because your account has reached the permitted maximum number. Please purchase additional licenses or contact the Zoom support team to provision additional users in your account. &lt;br&gt;
// **Error Code:** &#x60;11321&#x60; &lt;br&gt;
//  Email domain is blocked by Zoom Trust &amp; Safety. &lt;br&gt;
// **Error Code:** &#x60;2016&#x60; &lt;br&gt;
//  No permission, please contact Zoom customer support. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;4130&#x60; &lt;br&gt;
//  Group does not exist: $groupId &lt;br&gt;
// **Error Code:** &#x60;1102&#x60; &lt;br&gt;
//  You cannot enable the &quot;Zoom Phone&quot; feature because you do not have any available licenses. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 409,
// 				description: `**HTTP Status Code:** &#x60;409&#x60; &lt;br&gt;
//  Conflict 

//  **Error Code:** &#x60;1005&#x60; &lt;br&gt;
//  Email &quot;$email&quot; has already been used. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 429,
// 				description: `**HTTP Status Code:** &#x60;429&#x60; &lt;br&gt;
//  Too Many Requests 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId",
// 		description: `View a user&#x27;s information on a Zoom account. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter. 

// **Note** Users who have not activated their account will have a &#x60;pending&#x60; status. These users&#x27; &#x60;created_at&#x60; timestamp will also display the time at which the API call was made, **not** the account&#x27;s creation date. 

// **Note:** The &#x60;user_info:read&#x60; scope is only available when you pass the &#x60;me&#x60; value for the &#x60;$userId&#x60; value. 

// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;,&#x60;user_info:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "login_type",
// 				type: "Query",
// 				schema: z
// 					.union([
// 						z.literal(0),
// 						z.literal(1),
// 						z.literal(11),
// 						z.literal(21),
// 						z.literal(23),
// 						z.literal(24),
// 						z.literal(27),
// 						z.literal(97),
// 						z.literal(98),
// 						z.literal(99),
// 						z.literal(100),
// 						z.literal(101),
// 					])
// 					.optional(),
// 			},
// 			{
// 				name: "encrypted_email",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 			{
// 				name: "search_by_unique_id",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string().optional(),
// 				created_at: z.string().datetime({ offset: true }).optional(),
// 				dept: z.string().optional(),
// 				email: z.string().optional(),
// 				first_name: z.string().max(64).optional(),
// 				last_client_version: z.string().optional(),
// 				last_login_time: z.string().datetime({ offset: true }).optional(),
// 				last_name: z.string().max(64).optional(),
// 				pmi: z.number().int().optional(),
// 				role_name: z.string().optional(),
// 				timezone: z.string().optional(),
// 				type: z.union([z.literal(1), z.literal(2), z.literal(99)]),
// 				use_pmi: z.boolean().optional(),
// 				display_name: z.string().max(128).optional(),
// 				account_id: z.string().optional(),
// 				account_number: z.number().int().optional(),
// 				cms_user_id: z.string().optional(),
// 				company: z.string().optional(),
// 				user_created_at: z.string().datetime({ offset: true }).optional(),
// 				custom_attributes: z
// 					.array(
// 						z
// 							.object({ key: z.string(), name: z.string(), value: z.string() })
// 							.partial()
// 							.passthrough()
// 					)
// 					.optional(),
// 				employee_unique_id: z.string().optional(),
// 				group_ids: z.array(z.string()).optional(),
// 				im_group_ids: z.array(z.string()).optional(),
// 				jid: z.string().optional(),
// 				job_title: z.string().optional(),
// 				language: z.string().optional(),
// 				location: z.string().optional(),
// 				login_types: z
// 					.array(
// 						z.union([
// 							z.literal(0),
// 							z.literal(1),
// 							z.literal(11),
// 							z.literal(21),
// 							z.literal(23),
// 							z.literal(24),
// 							z.literal(27),
// 							z.literal(97),
// 							z.literal(98),
// 							z.literal(99),
// 							z.literal(100),
// 							z.literal(101),
// 						])
// 					)
// 					.optional(),
// 				manager: z.string().email().optional(),
// 				personal_meeting_url: z.string().optional(),
// 				phone_country: z.string().optional(),
// 				phone_number: z.string().optional(),
// 				phone_numbers: z
// 					.array(
// 						z
// 							.object({
// 								code: z.string(),
// 								country: z.string(),
// 								label: z.enum(["Mobile", "Office", "Home", "Fax"]),
// 								number: z.string(),
// 								verified: z.boolean(),
// 							})
// 							.partial()
// 							.passthrough()
// 					)
// 					.optional(),
// 				pic_url: z.string().optional(),
// 				plan_united_type: z
// 					.enum([
// 						"1",
// 						"2",
// 						"4",
// 						"8",
// 						"16",
// 						"32",
// 						"64",
// 						"128",
// 						"256",
// 						"512",
// 						"1024",
// 						"2048",
// 						"4096",
// 						"8192",
// 						"16384",
// 						"32768",
// 						"65536",
// 						"131072",
// 					])
// 					.optional(),
// 				pronouns: z.string().optional(),
// 				pronouns_option: z
// 					.union([z.literal(1), z.literal(2), z.literal(3)])
// 					.optional(),
// 				role_id: z.string().optional(),
// 				status: z.enum(["pending", "active", "inactive"]).optional(),
// 				vanity_url: z.string().optional(),
// 				verified: z.number().int().optional(),
// 				cluster: z.string().optional(),
// 				zoom_one_type: z.number().int().optional(),
// 			})
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1120&#x60; &lt;br&gt;
//  A valid invitation to join the Zoom account was not found for this user.&lt;br&gt; This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/users/:userId",
// 		description: `**Disassociate** (unlink) a user or permanently **delete** a user.  

// **Disassociating** a user unlinks the user from the associated Zoom account and provides the user their own basic free Zoom account. The disassociated user can then purchase their own Zoom licenses. An account owner or account admin can transfer the user&#x27;s meetings, webinars, and cloud recordings to another user before disassociation.


// **Deleting** a user permanently removes the user and their data from Zoom. Users can create a new Zoom account using the same email address. An account owner or an account admin can transfer meetings, webinars, and cloud recordings to another Zoom user account before deleting.


// For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// **Note:** This API does not support the deletion requirements of a [Data Subject Access Request (DSAR)](https://dataprivacymanager.net/what-is-data-subject-access-request-dsar/). For a DSAR request, contact Zoom Support. 




// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "encrypted_email",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 			{
// 				name: "action",
// 				type: "Query",
// 				schema: z
// 					.enum(["disassociate", "delete"])
// 					.optional()
// 					.default("disassociate"),
// 			},
// 			{
// 				name: "transfer_email",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "transfer_meeting",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 			{
// 				name: "transfer_webinar",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 			{
// 				name: "transfer_recording",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 			{
// 				name: "transfer_whiteboard",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  The transfer-to email address cannot be the same as the unlinked or deleted user&#x27;s email address.&lt;br&gt; Unable to unlink API user(s).&lt;br&gt; This user has published events on Zoom Events and cannot be deleted or unlinked.&lt;br&gt; This user has published events on Zoom Events and you do not specify a target user to transfer data.&lt;br&gt; The destination user does not have a Zoom Events license and cannot receive this data.&lt;br&gt; The destination user does not have a $license or higher license and cannot receive this data.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Cannot delete a user out of your account. &lt;br&gt;Cannot delete a Zoom Rooms user. &lt;br&gt;Unable to delete this deactivated user. Please contact Zoom support team for more information. &lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1000&#x60; &lt;br&gt;
//  The user cannot be changed because they are a Call-queue manager or Auto-receptionist operator.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1107&#x60; &lt;br&gt;
//  You can not disassociate a user with managed domain.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1117&#x60; &lt;br&gt;
//  You can not disassociate an Admin user.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1120&#x60; &lt;br&gt;
//  A valid invitation to join the Zoom account was not found for this user. &lt;br&gt;This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/users/:userId",
// 		description: `Update a user&#x27;s [Zoom profile](https://support.zoom.us/hc/en-us/articles/201363203-My-Profile) information. For user-level apps, pass [the &#x60;me&#x60; value](hhttps://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.



// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `The user&#x27;s profile information.`,
// 				type: "Body",
// 				schema: userUpdate_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "login_type",
// 				type: "Query",
// 				schema: z
// 					.union([
// 						z.literal(0),
// 						z.literal(1),
// 						z.literal(11),
// 						z.literal(21),
// 						z.literal(23),
// 						z.literal(24),
// 						z.literal(27),
// 						z.literal(97),
// 						z.literal(98),
// 						z.literal(99),
// 						z.literal(100),
// 						z.literal(101),
// 					])
// 					.optional(),
// 			},
// 			{
// 				name: "remove_tsp_credentials",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  * A Zoom Room user cannot be changed to a free user type: $userId 
// * A Zoom Room user cannot be changed to a no-meeting-license user type: $userId. 
// * You cannot change PMI information for a &quot;No Meetings License&quot; user. 
// * Only an account administrator can change a user&#x27;s name. 
// * Only an account administrator can change the host key. 
// * Only an account administrator can change a Personal Meeting ID (PMI). 
// * Only an account administrator can change a vanity name. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * Your request could not be completed because the name contains an invalid word: {name} 
// * You cannot change the user type to &quot;Basic&quot; because this user has an upcoming Zoom Events scheduled. 
// * Invalid parameter: password 
// * The value provided for &quot;plan_united_type&quot; parameter is invalid. Try again with a valid value. 
// * You can&#x27;t change the &quot;type&quot; or &quot;plan_united_type&quot; or &quot;zoom_one_type&quot; at the same time. 
// * You can&#x27;t turn off your Zoom One license now because you are having Zoom One as your basic plan type. 
// * The &#x60;about_me&#x60; field is illegal and can&#x27;t contain hyperlinks or HTML code. 
// * The &#x60;linkedin_url&#x60; field is illegal. The URL must contain &#x60;linkedin.com&#x60;. 
// * Your account can&#x27;t set user type as On-prem. &lt;br&gt;
// **Error Code:** &#x60;1108&#x60; &lt;br&gt;
//  Permission requirements to change the user type of this user were not met. &lt;br&gt;
// **Error Code:** &#x60;1109&#x60; &lt;br&gt;
//  Host is not a paid user. &lt;br&gt;
// **Error Code:** &#x60;1120&#x60; &lt;br&gt;
//  A valid invitation to join the Zoom account was not found for this user. This error is thrown if you added a user in your account but the user did not accept the invitation and the invitation expired. This makes the &#x60;userId&#x60; invalid. &lt;br&gt;
// **Error Code:** &#x60;2034&#x60; &lt;br&gt;
//  Your request to convert the plan type of this user to &quot;{0}&quot; was not approved at this time because your account has reached the permitted maximum number of &quot;{1}&quot; users. You must purchase additional licenses or contact the Zoom support team to provision additional users in your account. &lt;br&gt;
// **Error Code:** &#x60;2033&#x60; &lt;br&gt;
//  Your request to convert the user type to &quot;Basic&quot; was not approved because you have already reached the maximum basic user limit allowed in your account. For additional help regarding this issue, contact the Zoom Customer Support team. &lt;br&gt;
// **Error Code:** &#x60;3412&#x60; &lt;br&gt;
//  * Your request to convert the user type of this &quot;{$userType}&quot; user to a &quot;Basic&quot; user was not approved at this time because your account has reached the permitted maximum number of &quot;{$maxAllowedNumber}&quot; Basic users. Remove existing basic user(s) from your &quot;Users&quot; list or the &quot;Pending Users&quot; list before attempting to convert a user to a Basic user. 
// * Your request to convert the user type of a &quot;Basic&quot; user to a &quot;{$userType}&quot; user was not approved at this time because your account has reached the permitted maximum number of &quot;{$maxAllowedNumber}&quot; paying users. Please purchase additional licenses or remove existing paying user(s) from your &quot;Users&quot; list or the &quot;Pending Users&quot; list before attempting to convert a user to a paying user. 
// * Your request to convert the user type of a &quot;{$userType}&quot; user to a &quot;No-Meeting License&quot; user was not approved at this time because your account has reached the permitted maximum number of &quot;{$maxAllowedNumber&quot;} No-Meeting License users. Remove the existing No-Meeting License user(s) from your &quot;Users&quot; list or the &quot;Pending Users&quot; list before attempting to convert a user to a No-Meeting License user. &lt;br&gt;
// **Error Code:** &#x60;4100&#x60; &lt;br&gt;
//  User is already taken by a user from your account. Choose another &quot;Personal Link Name&quot;. &lt;br&gt;
// **Error Code:** &#x60;2038&#x60; &lt;br&gt;
//  Your request to convert the plan type of this user was not approved at this time because your account has reached the permitted maximum number. Please purchase additional licenses or contact the Zoom support team to provision additional users in your account. &lt;br&gt;
// **Error Code:** &#x60;2039&#x60; &lt;br&gt;
//  * You can&#x27;t turn off your Zoom United license now because you don&#x27;t have enough basic licenses. 
// * You can&#x27;t turn off your Zoom One license now because you don&#x27;t have enough basic licenses. 
// * No permission &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/assistants",
// 		description: `List a user&#x27;s assistants. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// Assistants are users who the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meetings on behalf of the current user, as well as manage and act as an alternative host for all meetings if the admin has enabled the [co-host option](https://zoom.us/account/setting) on the account.

// **Prerequisites:** 
// * Current user as well as the assistant must have Licensed or an On-prem license.
// * Assistants must be under the current user&#x27;s account.

// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				assistants: z.array(
// 					z
// 						.object({ email: z.string(), id: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/users/:userId/assistants",
// 		description: `Assign assistants to a user. In the request body, provide either the user&#x27;s ID or the user&#x27;s email address. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). Assistants can schedule meetings on behalf of the current user, and can also manage and act as an alternative host for all meetings if the admin has enabled the [co-host option](https://zoom.us/account/setting) on the account.

// **Prerequisites:** 
// * The user as well as the assistant must have Licensed or an On-prem license.
// * Assistants must be under the current user&#x27;s account, or the assistants&#x27; account must be in the same organization as the current user&#x27;s account.

// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `User assistant.`,
// 				type: "Body",
// 				schema: userAssistantCreate_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				add_at: z.string().datetime({ offset: true }),
// 				ids: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Current account must be paid account: $userId &lt;br&gt;
// The user must either be a Licensed user or an On-prem user : $userId. &lt;br&gt;
// Can&#x27;t assign scheduling privilege to yourself.&lt;br&gt;
// Can&#x27;t find user $email.&lt;br&gt;
// User $email has already granted scheduling privilege.&lt;br&gt;
// The user must either be a Licensed user or an On-prem user : $email. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/users/:userId/assistants",
// 		description: `Delete all of the current user&#x27;s assistants. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// Assistants are the users who the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user, and manage and act as an alternative host for all meetings if the admin has enabled [co-host option](https://zoom.us/account/setting) on the account.

// **Prerequisites:** 
// * The user as well as the assistant must have Licensed or an On-prem license.
// * Assistants must be under the current user&#x27;s account.

// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/users/:userId/assistants/:assistantId",
// 		description: `Delete a specific assistant of a user. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// Assistants are the users who the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [co-host option](https://zoom.us/account/setting) on the account.

// **Prerequisites:** 
// * The user as well as the assistant must have Licensed or an On-prem license.
// * Assistants must be under the current user&#x27;s account.

// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "assistantId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/collaboration_devices",
// 		description: `List a user&#x27;s collaboration devices. For user-level apps, pass [the &#x60;me&#x60; value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the &#x60;userId&#x60; parameter.



// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: userId,
// 			},
// 		],
// 		response: z
// 			.object({
// 				total_records: z.number().int(),
// 				collaboration_devices: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							device_name: z.string(),
// 							room_name: z.string(),
// 							room_user_id: z.string(),
// 							status: z.enum(["Online", "Offline"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: $userId

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/collaboration_devices/:collaborationDeviceId",
// 		description: `Get collaboration device detail. For user-level apps, pass [the &#x60;me&#x60; value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the &#x60;userId&#x60; parameter.



// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: userId,
// 			},
// 			{
// 				name: "collaborationDeviceId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				device_name: z.string(),
// 				room_name: z.string(),
// 				room_user_id: z.string(),
// 				status: z.enum(["Online", "Offline"]),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: $userId

// **Error Code:** &#x60;1238&#x60; &lt;br&gt;
// Collaboration Device does not exist: {0}.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/users/:userId/email",
// 		description: `Change a user&#x27;s [email address](https://support.zoom.us/hc/en-us/articles/201362563-How-Do-I-Change-the-Email-on-My-Account-) on a Zoom account that has managed domain set up. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// * If the Zoom account in which the user belongs has multiple [managed domains](https://support.zoom.us/hc/en-us/articles/203395207-What-is-Managed-Domain-), then the email to be updated **must** match one of the managed domains.
// * A user&#x27;s email address can be changed up to 3 times in any 24 hour period.

// **Prerequisites:** 
// * Managed domain must be enabled in the account. 
// * The new email address should not already exist in Zoom.

// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `User email.`,
// 				type: "Body",
// 				schema: z.object({ email: z.string().email() }).passthrough(),
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Only an account administrator can change email.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1000&#x60; &lt;br&gt;
//  Admin can not change other admins email. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $email.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/meeting_templates",
// 		description: `List available [meeting templates](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates) for a user. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.



// **Scopes:** &#x60;meeting:read&#x60;,&#x60;meeting:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				templates: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							name: z.string(),
// 							type: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User not exist: {userId}.&lt;br&gt;
// User {userId} does not exist or does not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/users/:userId/meeting_templates",
// 		description: `Create a meeting template from an existing meeting. 



// **Scopes:** &#x60;meeting:write:admin&#x60;,&#x60;meeting:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: meetingTemplateCreate_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({ id: z.string(), name: z.string() })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// * Meeting ID does not exist. 
// * Invalid meeting ID. 
// * You can only create up to 40 meeting templates.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// * Cannot access webinar information. 
// * Meeting template name already exists: {templateName}.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Meeting does not exist: {meetingId}

// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
// Meeting hosting and scheduling capabilities are not allowed for your user account.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// * User not exist: {userId}. 
// * User {userId} does not exist or does not belong to this account.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/meeting_templates/:meetingTemplateId",
// 		description: `Retrieve a user&#x27;s [meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates). For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.



// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "meetingTemplateId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				name: z.string(),
// 				settings: z
// 					.object({
// 						in_meeting: z
// 							.object({
// 								entry_exit_chime: z.enum(["host", "all", "none"]),
// 								feedback: z.boolean(),
// 								polling: z.boolean(),
// 								post_meeting_feedback: z.boolean(),
// 								screen_sharing: z.boolean(),
// 								who_can_share_screen: z.enum(["host", "all"]),
// 								who_can_share_screen_when_someone_is_sharing: z.enum([
// 									"host",
// 									"all",
// 								]),
// 								disable_screen_sharing_for_host_meetings: z.boolean(),
// 								annotation: z.boolean(),
// 								whiteboard: z.boolean(),
// 								remote_control: z.boolean(),
// 								non_verbal_feedback: z.boolean(),
// 								allow_participants_to_rename: z.boolean(),
// 								breakout_room: z.boolean(),
// 								remote_support: z.boolean(),
// 								manual_captioning: z
// 									.object({
// 										auto_generated_captions: z.boolean(),
// 										allow_to_type: z.boolean(),
// 										manual_captions: z.boolean(),
// 										save_captions: z.boolean(),
// 									})
// 									.partial()
// 									.passthrough(),
// 								closed_captioning: z
// 									.object({
// 										auto_transcribing: z.boolean(),
// 										enable: z.boolean(),
// 										save_caption: z.boolean(),
// 									})
// 									.partial()
// 									.passthrough(),
// 							})
// 							.partial()
// 							.passthrough(),
// 						recording: z
// 							.object({ auto_recording: z.enum(["local", "cloud", "none"]) })
// 							.partial()
// 							.passthrough(),
// 						schedule_meeting: z
// 							.object({
// 								host_video: z.boolean(),
// 								participant_video: z.boolean(),
// 								mute_upon_entry: z.boolean(),
// 							})
// 							.partial()
// 							.passthrough(),
// 						meeting_security: z
// 							.object({ waiting_room: z.boolean() })
// 							.partial()
// 							.passthrough(),
// 					})
// 					.partial()
// 					.passthrough(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/meetings",
// 		description: `List a meeting host user&#x27;s scheduled meetings. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter. 

// **Note** 
// * This API **only** supports scheduled meetings. This API does not return information about instant meetings. 
// * This API only returns a user&#x27;s [unexpired meetings](https://support.zoom.us/hc/en-us/articles/201362373-Meeting-ID#h_c73f9b08-c1c0-4a1a-b538-e01ebb98e844). 

 

// **Scopes:** &#x60;meeting:read&#x60;,&#x60;meeting:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z
// 					.enum([
// 						"scheduled",
// 						"live",
// 						"upcoming",
// 						"upcoming_meetings",
// 						"previous_meetings",
// 					])
// 					.optional()
// 					.default("scheduled"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				meetings: z.array(
// 					z
// 						.object({
// 							agenda: z.string(),
// 							created_at: z.string().datetime({ offset: true }),
// 							duration: z.number().int(),
// 							host_id: z.string(),
// 							id: z.number().int(),
// 							join_url: z.string(),
// 							pmi: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							timezone: z.string(),
// 							topic: z.string(),
// 							type: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(8),
// 							]),
// 							uuid: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} not exist or not belong to this account.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/users/:userId/meetings",
// 		description: `[Create a meeting](https://support.zoom.us/hc/en-us/articles/201362413-Scheduling-meetings) for a user. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// * A meeting&#x27;s &#x60;start_url&#x60; value is the URL a host or an alternative host can use to start a meeting. The expiration time for the &#x60;start_url&#x60; value is **two hours** for all regular users.
// * For &#x60;custCreate&#x60; meeting hosts (users created with the &#x60;custCreate&#x60; parameter via the [**Create users**](https://developers.zoom.us/docs/api/rest/reference/zoom-api/methods/#operation/userCreate) API), the expiration time of the &#x60;start_url&#x60; parameter is **90 days** from the generation of the &#x60;start_url&#x60;.

// **Note:** 

// For security reasons, the recommended way to programmatically get the updated &#x60;start_url&#x60; value after expiry is to call the [**Get a meeting**](/api-reference/zoom-api/methods#operation/meeting) API. Refer to the &#x60;start_url&#x60; value in the response. 

//  **100 requests per day**. The rate limit is applied against the &#x60;userId&#x60; of the **meeting host** used to make the request.

// **Scopes:** &#x60;meeting:write&#x60;,&#x60;meeting:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Meeting object.`,
// 				type: "Body",
// 				schema: meetingCreate_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				assistant_id: z.string(),
// 				host_email: z.string().email(),
// 				id: z.number().int(),
// 				registration_url: z.string(),
// 				agenda: z.string(),
// 				created_at: z.string().datetime({ offset: true }),
// 				duration: z.number().int(),
// 				h323_password: z.string(),
// 				join_url: z.string(),
// 				chat_join_url: z.string(),
// 				occurrences: z.array(
// 					z
// 						.object({
// 							duration: z.number().int(),
// 							occurrence_id: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							status: z.enum(["available", "deleted"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				password: z.string(),
// 				pmi: z.string(),
// 				pre_schedule: z.boolean(),
// 				recurrence: z
// 					.object({
// 						end_date_time: z.string().datetime({ offset: true }).optional(),
// 						end_times: z.number().int().lte(60).optional().default(1),
// 						monthly_day: z.number().int().optional().default(1),
// 						monthly_week: z
// 							.union([
// 								z.literal(-1),
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							])
// 							.optional(),
// 						monthly_week_day: z
// 							.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 							])
// 							.optional(),
// 						repeat_interval: z.number().int().optional(),
// 						type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 						weekly_days: z
// 							.enum(["1", "2", "3", "4", "5", "6", "7"])
// 							.optional()
// 							.default("1"),
// 					})
// 					.passthrough(),
// 				settings: z
// 					.object({
// 						allow_multiple_devices: z.boolean(),
// 						alternative_hosts: z.string(),
// 						alternative_hosts_email_notification: z.boolean().default(true),
// 						alternative_host_update_polls: z.boolean(),
// 						approval_type: z
// 							.union([z.literal(0), z.literal(1), z.literal(2)])
// 							.default(2),
// 						approved_or_denied_countries_or_regions: z
// 							.object({
// 								approved_list: z.array(z.string()),
// 								denied_list: z.array(z.string()),
// 								enable: z.boolean(),
// 								method: z.enum(["approve", "deny"]),
// 							})
// 							.partial()
// 							.passthrough(),
// 						audio: z
// 							.enum(["both", "telephony", "voip", "thirdParty"])
// 							.default("both"),
// 						audio_conference_info: z.string().max(2048),
// 						authentication_domains: z.string(),
// 						authentication_exception: z.array(
// 							z
// 								.object({
// 									email: z.string().email(),
// 									name: z.string(),
// 									join_url: z.string(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						authentication_name: z.string(),
// 						authentication_option: z.string(),
// 						auto_recording: z.enum(["local", "cloud", "none"]).default("none"),
// 						breakout_room: z
// 							.object({
// 								enable: z.boolean(),
// 								rooms: z.array(
// 									z
// 										.object({
// 											name: z.string(),
// 											participants: z.array(z.string()),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						calendar_type: z.union([z.literal(1), z.literal(2)]),
// 						close_registration: z.boolean(),
// 						cn_meeting: z.boolean(),
// 						contact_email: z.string(),
// 						contact_name: z.string(),
// 						custom_keys: z
// 							.array(
// 								z
// 									.object({
// 										key: z.string().max(64),
// 										value: z.string().max(256),
// 									})
// 									.partial()
// 									.passthrough()
// 							)
// 							.max(10),
// 						email_notification: z.boolean().default(true),
// 						encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 						enforce_login: z.boolean(),
// 						enforce_login_domains: z.string(),
// 						focus_mode: z.boolean(),
// 						global_dial_in_countries: z.array(z.string()),
// 						global_dial_in_numbers: z.array(
// 							z
// 								.object({
// 									city: z.string(),
// 									country: z.string(),
// 									country_name: z.string(),
// 									number: z.string(),
// 									type: z.enum(["toll", "tollfree"]),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						host_video: z.boolean(),
// 						in_meeting: z.boolean(),
// 						jbh_time: z.union([z.literal(0), z.literal(5), z.literal(10)]),
// 						join_before_host: z.boolean(),
// 						language_interpretation: z
// 							.object({
// 								enable: z.boolean(),
// 								interpreters: z.array(
// 									z
// 										.object({
// 											email: z.string().email(),
// 											languages: z.string(),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						sign_language_interpretation: z
// 							.object({
// 								enable: z.boolean(),
// 								interpreters: z.array(
// 									z
// 										.object({
// 											email: z.string().email(),
// 											sign_language: z.string(),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						meeting_authentication: z.boolean(),
// 						mute_upon_entry: z.boolean(),
// 						participant_video: z.boolean(),
// 						private_meeting: z.boolean(),
// 						registrants_confirmation_email: z.boolean(),
// 						registrants_email_notification: z.boolean(),
// 						registration_type: z
// 							.union([z.literal(1), z.literal(2), z.literal(3)])
// 							.default(1),
// 						show_share_button: z.boolean(),
// 						use_pmi: z.boolean(),
// 						waiting_room: z.boolean(),
// 						watermark: z.boolean(),
// 						host_save_video_order: z.boolean(),
// 						internal_meeting: z.boolean(),
// 						continuous_meeting_chat: z
// 							.object({
// 								enable: z.boolean(),
// 								auto_add_invited_external_users: z.boolean(),
// 							})
// 							.partial()
// 							.passthrough(),
// 						participant_focused_meeting: z.boolean(),
// 						push_change_to_calendar: z.boolean(),
// 						resources: z.array(
// 							z
// 								.object({
// 									resource_type: z.literal("whiteboard"),
// 									resource_id: z.string(),
// 									permission_level: z
// 										.enum(["editor", "commenter", "viewer"])
// 										.default("editor"),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 					})
// 					.partial()
// 					.passthrough(),
// 				start_time: z.string().datetime({ offset: true }),
// 				start_url: z.string(),
// 				timezone: z.string(),
// 				topic: z.string().max(200),
// 				tracking_fields: z.array(
// 					z
// 						.object({
// 							field: z.string(),
// 							value: z.string(),
// 							visible: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				type: z
// 					.union([z.literal(1), z.literal(2), z.literal(3), z.literal(8)])
// 					.default(2),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  * Instant meetings do not support the schedule_for parameter; you cannot schedule an instant meeting for another user.&lt;br&gt;
// * Users in &#x27;{0}&#x27; have been blocked from joining meetings and webinars. To unblock them, go to the Settings page in the Zoom web portal and update &#x27;Block users in specific domains from joining meetings and webinars&#x27;.&lt;br&gt; 
// * You cannot schedule a meeting for {0}. &lt;br&gt;
// **Error Code:** &#x60;3161&#x60; &lt;br&gt;
//  Meeting hosting and scheduling capabilities are not allowed for your user account. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * The value that you entered for the schedule_for field is invalid. Enter a valid value and try again. &lt;br&gt; 
// * Invalid enforce_login_domains, separate multiple domains by semicolon. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} not exist or not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 429,
// 				description: `**HTTP Status Code:** &#x60;429&#x60; &lt;br&gt;
//  Too Many Requests 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/pac",
// 		description: `Retrieve a list of a user&#x27;s [personal audio conference (PAC)](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) accounts. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter. 

//  PAC allows Pro or higher account holders to host meetings through PSTN (phone dial-in) only. 

//  **Prerequisites** 
// * A Pro or higher plan with an [Audio Conferencing](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) subscription. 
// * The [**Personal Audio Conference**](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference#h_01F5BPM447M6QDJXX50RSFXKJ3) setting enabled in the user&#x27;s profile.

// **Scopes:** &#x60;pac:read:admin&#x60;,&#x60;pac:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				pac_accounts: z.array(
// 					z
// 						.object({
// 							conference_id: z.number().int(),
// 							dedicated_dial_in_number: z.array(
// 								z
// 									.object({ country: z.string(), number: z.string().max(16) })
// 									.partial()
// 									.passthrough()
// 							),
// 							global_dial_in_numbers: z.array(
// 								z
// 									.object({ country: z.string(), number: z.string().max(16) })
// 									.partial()
// 									.passthrough()
// 							),
// 							listen_only_password: z.string().max(6),
// 							participant_password: z.string().max(6),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;2024&#x60; &lt;br&gt;
//  User does not have PAC enabled. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/users/:userId/password",
// 		description: `Update the [password](https://support.zoom.us/hc/en-us/articles/206344385-Change-a-User-s-Password) of a user using which the user can login to Zoom. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// After this request is processed successfully, an email notification is sent to the user saying that the password was changed.  
 
// **Prerequisites:**  
 
// * Owner or admin of the Zoom account.

// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `User password.`,
// 				type: "Body",
// 				schema: z.object({ password: z.string() }).passthrough(),
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Your new password can not match the old password.&lt;br&gt;This password cannot be changed because it has already been changed the maximum number of times over the past 24 hours.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1117&#x60; &lt;br&gt;
//  Can not update Admin&#x27;s password&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1123&#x60; &lt;br&gt;
//  Can only update password of Zoom work email account&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1124&#x60; &lt;br&gt;
//  Minimum of 6 characters.&lt;br&gt; Have at least {lengthRule} characters&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1125&#x60; &lt;br&gt;
//  Have at least 1 letter (a, b, c…)&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1126&#x60; &lt;br&gt;
//  Have at least 1 number (1, 2, 3…)&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1127&#x60; &lt;br&gt;
//  Have at least 1 special character (!, @, #…)&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1128&#x60; &lt;br&gt;
//  Include both Upper case and Lower case characters&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1129&#x60; &lt;br&gt;
//  Users cannot reuse any of the last $formerPwdCount passwords created.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1130&#x60; &lt;br&gt;
//  Password can&#x27;t use the same character.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1131&#x60; &lt;br&gt;
//  Password can&#x27;t use continuation character.Such as &#x27;abcdef&#x27;,&#x27;123456&#x27;.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1136&#x60; &lt;br&gt;
//  Your password is too easy to guess. Try another one. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/permissions",
// 		description: `Get permissions that have been granted to the user. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// Users can be assigned a set of permissions that allows them to access only the pages or information that a user needs to view or edit.



// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({ permissions: z.array(z.string()) })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/users/:userId/picture",
// 		description: `Upload a user&#x27;s profile picture. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// Provide &#x60;multipart/form-data&#x60; as the value of the &#x60;content-type&#x60; header for this request. This API supports &#x60;.jpeg&#x60; and &#x60;.png&#x60; file formats.



// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "form-data",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ pic_file: z.string() }).passthrough(),
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.object({}).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Your request was not accepted because the profile picture contains invalid or explicit content.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Only an account administrator can change a profile picture.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;120&#x60; &lt;br&gt;
//  File is empty.&lt;br&gt;
// File size cannot exceed 2M.&lt;br&gt;
// Only jpg/jpeg or png image file can be uploaded.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/users/:userId/picture",
// 		description: `Delete a user&#x27;s profile picture. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter. 



// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Only an account administrator can change a profile picture.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/users/:userId/presence_status",
// 		description: `Update a user&#x27;s presence status. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// A user&#x27;s status **cannot** be updated more than once per minute. For example, you can only submit a maximum of one update request per minute for a single user.

// Users in the Zoom desktop client and mobile apps are assigned with a [presence status](https://support.zoom.us/hc/en-us/articles/360032554051-Status-Icons). The presence status informs users of their contact&#x27;s availability. Users can also change their own presence status to one the following:
// * **Away**
// * **Do not disturb**
// * **Available**
// * **In a calendar event**
// * **Presenting**
// * **In a Zoom meeting**
// * **On a call**
// * **Out of Office**
// * **Busy**

// Note that a user&#x27;s presence status **cannot** be updated via this API if the user is not logged in to the Zoom client.



// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: updatePresenceStatus_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;5301&#x60; &lt;br&gt;
//  Request to update the presence status of this user failed. &lt;br&gt;
// **Error Code:** &#x60;5411&#x60; &lt;br&gt;
//  Unauthorized request. You do not have permission to update the presence status of this user. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: {userId} &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 429,
// 				description: `**HTTP Status Code:** &#x60;429&#x60; &lt;br&gt;
//  Too Many Requests 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/recordings",
// 		description: `Lists all [cloud recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) for a user.  

// For user-level apps, pass the [&#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.  To access a user&#x27;s passcode protected cloud recording, send the user&#x27;s [OAuth access token](https://developers.zoom.us/docs/integrations/oauth/) as a bearer token in the authorization header.  

// Example:  &#x60;curl -H &quot;Authorization: Bearer &lt;ACCESS_TOKEN&gt;&quot; https://{{base-domain}}/rec/archive/download/xyz&#x60;  

// **Prerequisites:**  
// * Must have a Pro or a higher plan.  
// * Must enable Cloud Recording on the user&#x27;s account.

// **Scopes:** &#x60;recording:read:admin&#x60;,&#x60;recording:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "mc",
// 				type: "Query",
// 				schema: z.string().optional().default("false"),
// 			},
// 			{
// 				name: "trash",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 			{
// 				name: "from",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "to",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "trash_type",
// 				type: "Query",
// 				schema: z.string().optional().default("meeting_recordings"),
// 			},
// 			{
// 				name: "meeting_id",
// 				type: "Query",
// 				schema: z.number().int().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				from: z.string(),
// 				to: z.string(),
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				meetings: z.array(
// 					z
// 						.object({
// 							account_id: z.string(),
// 							duration: z.number().int(),
// 							host_id: z.string(),
// 							id: z.number().int(),
// 							recording_count: z.number().int(),
// 							start_time: z.string().datetime({ offset: true }),
// 							topic: z.string(),
// 							total_size: z.number().int(),
// 							type: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "99"]),
// 							uuid: z.string(),
// 							recording_play_passcode: z.string(),
// 							recording_files: z.array(
// 								z
// 									.object({
// 										deleted_time: z.string(),
// 										download_url: z.string(),
// 										file_path: z.string(),
// 										file_size: z.number(),
// 										file_type: z.enum([
// 											"MP4",
// 											"M4A",
// 											"CHAT",
// 											"TRANSCRIPT",
// 											"CSV",
// 											"TB",
// 											"CC",
// 											"CHAT_MESSAGE",
// 											"SUMMARY",
// 										]),
// 										file_extension: z.enum([
// 											"MP4",
// 											"M4A",
// 											"TXT",
// 											"VTT",
// 											"CSV",
// 											"JSON",
// 											"JPG",
// 										]),
// 										id: z.string(),
// 										meeting_id: z.string(),
// 										play_url: z.string(),
// 										recording_end: z.string(),
// 										recording_start: z.string(),
// 										recording_type: z.enum([
// 											"shared_screen_with_speaker_view(CC)",
// 											"shared_screen_with_speaker_view",
// 											"shared_screen_with_gallery_view",
// 											"active_speaker",
// 											"gallery_view",
// 											"shared_screen",
// 											"audio_only",
// 											"audio_transcript",
// 											"chat_file",
// 											"poll",
// 											"host_video",
// 											"closed_caption",
// 											"timeline",
// 											"thumbnail",
// 											"audio_interpretation",
// 											"summary",
// 											"summary_next_steps",
// 											"summary_smart_chapters",
// 											"sign_interpretation",
// 											"production_studio",
// 										]),
// 										status: z.literal("completed"),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist, or does not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/schedulers",
// 		description: `List all of a user&#x27;s schedulers. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// Schedulers in this context are users who can schedule meetings for the current user. For example, if the current user, the user whose &#x60;userId&#x60; was passed in the &#x60;path&#x60; parameter, is **User A**, this API&#x27;s response will list all users for whom **User A** can schedule and manage meetings. **User A** is the assistant of these users, and thus has scheduling privilege for these users.

// **Prerequisites** 
// * Current user must be under the same account as the scheduler.

// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				schedulers: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							id: z.string(),
// 							pmi: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/users/:userId/schedulers",
// 		description: `Delete all of a user&#x27;s schedulers. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// Schedulers are users on whose behalf the current user (assistant) can schedule meetings for. By calling this API, the current user will no longer be a scheduling assistant of any user. 

// **Prerequisites:** 
// * Current user (assistant) must be under the same account as the scheduler.

// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/users/:userId/schedulers/:schedulerId",
// 		description: `Delete a scheduler. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// Schedulers are users who the current user (assistant) can schedule meetings on their behalf. By calling this API, the current user will no longer be a scheduling assistant of this scheduler.

// **Prerequisites:** 
// * Current user must be under the same account as the scheduler.

// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "schedulerId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/settings",
// 		description: `Retrieve a user&#x27;s settings. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.



// **Scopes:** &#x60;user:read&#x60;,&#x60;user:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "login_type",
// 				type: "Query",
// 				schema: z
// 					.union([
// 						z.literal(0),
// 						z.literal(1),
// 						z.literal(11),
// 						z.literal(21),
// 						z.literal(23),
// 						z.literal(24),
// 						z.literal(27),
// 						z.literal(97),
// 						z.literal(98),
// 						z.literal(99),
// 						z.literal(100),
// 						z.literal(101),
// 					])
// 					.optional(),
// 			},
// 			{
// 				name: "option",
// 				type: "Query",
// 				schema: z
// 					.enum([
// 						"meeting_authentication",
// 						"recording_authentication",
// 						"meeting_security",
// 					])
// 					.optional(),
// 			},
// 			{
// 				name: "custom_query_fields",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.union([
// 			z
// 				.object({
// 					audio_conferencing: z
// 						.object({
// 							toll_free_and_fee_based_toll_call: z
// 								.object({
// 									allow_webinar_attendees_dial: z.boolean(),
// 									enable: z.boolean(),
// 									numbers: z
// 										.array(
// 											z
// 												.object({
// 													code: z.string(),
// 													country_code: z.string(),
// 													country_name: z.string(),
// 													display_number: z.string().max(30),
// 													number: z.string().max(30),
// 												})
// 												.partial()
// 												.passthrough()
// 										)
// 										.max(100),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					email_notification: z
// 						.object({
// 							alternative_host_reminder: z.boolean(),
// 							cancel_meeting_reminder: z.boolean(),
// 							cloud_recording_available_reminder: z.boolean(),
// 							jbh_reminder: z.boolean(),
// 							recording_available_reminder_alternative_hosts: z.boolean(),
// 							recording_available_reminder_schedulers: z.boolean(),
// 							schedule_for_reminder: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					feature: z
// 						.object({
// 							cn_meeting: z.boolean(),
// 							concurrent_meeting: z.enum(["Basic", "Plus", "None"]),
// 							in_meeting: z.boolean(),
// 							large_meeting: z.boolean(),
// 							large_meeting_capacity: z.number().int(),
// 							meeting_capacity: z.number().int(),
// 							webinar: z.boolean(),
// 							webinar_capacity: z.number().int(),
// 							zoom_events: z.boolean(),
// 							zoom_events_capacity: z.union([
// 								z.literal(500),
// 								z.literal(1000),
// 								z.literal(3000),
// 								z.literal(5000),
// 								z.literal(10000),
// 								z.literal(20000),
// 								z.literal(30000),
// 								z.literal(50000),
// 							]),
// 							zoom_events_unlimited: z.boolean(),
// 							zoom_events_unlimited_capacities: z.array(
// 								z.union([
// 									z.literal(100),
// 									z.literal(500),
// 									z.literal(1000),
// 									z.literal(3000),
// 									z.literal(5000),
// 									z.literal(10000),
// 									z.literal(20000),
// 									z.literal(30000),
// 									z.literal(50000),
// 								])
// 							),
// 							zoom_sessions_unlimited: z.boolean(),
// 							zoom_sessions_unlimited_capacities: z.array(
// 								z.union([
// 									z.literal(100),
// 									z.literal(500),
// 									z.literal(1000),
// 									z.literal(3000),
// 									z.literal(5000),
// 									z.literal(10000),
// 									z.literal(20000),
// 									z.literal(30000),
// 									z.literal(50000),
// 								])
// 							),
// 							zoom_events_pay_per_attendee: z.boolean(),
// 							zoom_sessions_pay_per_attendee: z.boolean(),
// 							zoom_phone: z.boolean(),
// 							zoom_iq_for_sales: z.boolean(),
// 							zoom_whiteboard: z.boolean(),
// 							zoom_whiteboard_plus: z.boolean(),
// 							zoom_translated_captions: z.boolean(),
// 							zoom_customer_managed_key: z.boolean(),
// 							zoom_huddles: z.boolean(),
// 							zoom_revenue_accelerator: z.boolean(),
// 							zoom_quality_management: z.boolean(),
// 							zoom_workforce_management: z.boolean(),
// 							zoom_scheduler: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					in_meeting: z
// 						.object({
// 							allow_host_to_enable_focus_mode: z.boolean(),
// 							allow_users_to_delete_messages_in_meeting_chat: z.boolean(),
// 							allow_live_streaming: z.boolean(),
// 							post_meeting_feedback: z.boolean(),
// 							whiteboard: z.boolean(),
// 							allow_participants_chat_with: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							]),
// 							allow_users_save_chats: z.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 							]),
// 							annotation: z.boolean(),
// 							attendee_on_hold: z.boolean(),
// 							attention_mode_focus_mode: z.boolean(),
// 							auto_saving_chat: z.boolean(),
// 							breakout_room: z.boolean(),
// 							breakout_room_schedule: z.boolean(),
// 							chat: z.boolean(),
// 							meeting_question_answer: z.boolean(),
// 							closed_caption: z.boolean(),
// 							closed_captioning: z
// 								.object({
// 									auto_transcribing: z.boolean(),
// 									enable: z.boolean(),
// 									save_caption: z.boolean(),
// 									third_party_captioning_service: z.boolean(),
// 									view_full_transcript: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							co_host: z.boolean(),
// 							custom_data_center_regions: z.boolean(),
// 							custom_live_streaming_service: z.boolean(),
// 							custom_service_instructions: z.string(),
// 							data_center_regions: z.array(
// 								z.enum([
// 									"AU",
// 									"LA",
// 									"CA",
// 									"CN",
// 									"DE",
// 									"HK",
// 									"IN",
// 									"IE",
// 									"TY",
// 									"MX",
// 									"NL",
// 									"SG",
// 									"US",
// 								])
// 							),
// 							disable_screen_sharing_for_host_meetings: z.boolean(),
// 							disable_screen_sharing_for_in_meeting_guests: z.boolean(),
// 							e2e_encryption: z.boolean(),
// 							entry_exit_chime: z.enum(["host", "all", "none"]).default("all"),
// 							far_end_camera_control: z.boolean(),
// 							feedback: z.boolean(),
// 							file_transfer: z.boolean(),
// 							group_hd: z.boolean(),
// 							webinar_group_hd: z.boolean(),
// 							join_from_desktop: z.boolean(),
// 							join_from_mobile: z.boolean(),
// 							language_interpretation: z
// 								.object({
// 									custom_languages: z.array(z.string()),
// 									enable_language_interpretation_by_default: z.boolean(),
// 									allow_participants_to_speak_in_listening_channel: z.boolean(),
// 									allow_up_to_25_custom_languages_when_scheduling_meetings:
// 										z.boolean(),
// 									enable: z.boolean(),
// 									languages: z.array(
// 										z.enum([
// 											"English",
// 											"Chinese",
// 											"Japanese",
// 											"German",
// 											"French",
// 											"Russian",
// 											"Portuguese",
// 											"Spanish",
// 											"Korean",
// 										])
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							sign_language_interpretation: z
// 								.object({
// 									enable: z.boolean(),
// 									enable_sign_language_interpretation_by_default: z.boolean(),
// 									languages: z.array(
// 										z.enum([
// 											"American",
// 											"Chinese",
// 											"French",
// 											"German",
// 											"Japanese",
// 											"Russian",
// 											"Brazilian",
// 											"Spanish",
// 											"Mexican",
// 											"British",
// 										])
// 									),
// 									custom_languages: z.array(z.string()),
// 								})
// 								.partial()
// 								.passthrough(),
// 							live_streaming_facebook: z.boolean(),
// 							live_streaming_youtube: z.boolean(),
// 							manual_captioning: z
// 								.object({
// 									allow_to_type: z.boolean(),
// 									auto_generated_captions: z.boolean(),
// 									full_transcript: z.boolean(),
// 									manual_captions: z.boolean(),
// 									save_captions: z.boolean(),
// 									third_party_captioning_service: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							meeting_reactions: z.boolean(),
// 							meeting_reactions_emojis: z.enum(["all", "selected"]),
// 							allow_host_panelists_to_use_audible_clap: z.boolean(),
// 							webinar_reactions: z.boolean(),
// 							meeting_survey: z.boolean(),
// 							non_verbal_feedback: z.boolean(),
// 							polling: z.boolean(),
// 							private_chat: z.boolean(),
// 							record_play_voice: z.boolean(),
// 							remote_control: z.boolean(),
// 							remote_support: z.boolean(),
// 							request_permission_to_unmute_participants: z.boolean(),
// 							screen_sharing: z.boolean(),
// 							share_dual_camera: z.boolean(),
// 							show_a_join_from_your_browser_link: z.boolean(),
// 							show_meeting_control_toolbar: z.boolean(),
// 							slide_control: z.boolean(),
// 							unchecked_data_center_regions: z.array(
// 								z.enum([
// 									"EU",
// 									"HK",
// 									"AU",
// 									"IN",
// 									"TY",
// 									"CN",
// 									"US",
// 									"CA",
// 									"DE",
// 									"NL",
// 									"LA",
// 								])
// 							),
// 							virtual_background: z.boolean(),
// 							virtual_background_settings: z
// 								.object({
// 									allow_upload_custom: z.boolean(),
// 									allow_videos: z.boolean(),
// 									enable: z.boolean(),
// 									files: z.array(
// 										z
// 											.object({
// 												id: z.string(),
// 												is_default: z.boolean(),
// 												name: z.string(),
// 												size: z.number().int(),
// 												type: z.string(),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							waiting_room: z.boolean(),
// 							webinar_chat: z
// 								.object({
// 									allow_attendees_chat_with: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 										z.literal(3),
// 									]),
// 									allow_auto_save_local_chat_file: z.boolean(),
// 									allow_panelists_chat_with: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									allow_panelists_send_direct_message: z.boolean(),
// 									allow_users_save_chats: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									default_attendees_chat_with: z.union([
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									enable: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_live_streaming: z
// 								.object({
// 									custom_service_instructions: z.string(),
// 									enable: z.boolean(),
// 									live_streaming_reminder: z.boolean(),
// 									live_streaming_service: z.array(
// 										z.enum([
// 											"facebook",
// 											"workplace_by_facebook",
// 											"youtube",
// 											"custom_live_streaming_service",
// 										])
// 									),
// 								})
// 								.partial()
// 								.passthrough(),
// 							meeting_polling: z
// 								.object({
// 									advanced_polls: z.boolean(),
// 									allow_alternative_host_to_add_edit: z.boolean(),
// 									require_answers_to_be_anonymous: z.boolean(),
// 									allow_host_to_upload_image: z.boolean(),
// 									enable: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_polling: z
// 								.object({
// 									advanced_polls: z.boolean(),
// 									allow_alternative_host_to_add_edit: z.boolean(),
// 									require_answers_to_be_anonymous: z.boolean(),
// 									allow_host_to_upload_image: z.boolean(),
// 									enable: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_survey: z.boolean(),
// 							who_can_share_screen: z.enum(["host", "all"]),
// 							who_can_share_screen_when_someone_is_sharing: z.enum([
// 								"host",
// 								"all",
// 							]),
// 							participants_share_simultaneously: z.enum(["multiple", "one"]),
// 							workplace_by_facebook: z.boolean(),
// 							transfer_meetings_between_devices: z.boolean(),
// 							allow_show_zoom_windows: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					profile: z
// 						.object({
// 							recording_storage_location: z
// 								.object({
// 									allowed_values: z.array(z.string()),
// 									value: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					recording: z
// 						.object({
// 							ask_host_to_confirm_disclaimer: z.boolean(),
// 							ask_participants_to_consent_disclaimer: z.boolean(),
// 							auto_delete_cmr: z.boolean(),
// 							auto_delete_cmr_days: z.union([
// 								z.literal(30),
// 								z.literal(60),
// 								z.literal(90),
// 								z.literal(120),
// 							]),
// 							record_files_separately: z
// 								.object({
// 									active_speaker: z.boolean(),
// 									gallery_view: z.boolean(),
// 									shared_screen: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							display_participant_name: z.boolean(),
// 							recording_thumbnails: z.boolean(),
// 							optimize_recording_for_3rd_party_video_editor: z.boolean(),
// 							recording_highlight: z.boolean(),
// 							save_panelist_chat: z.boolean(),
// 							save_poll_results: z.boolean(),
// 							save_close_caption: z.boolean(),
// 							auto_recording: z
// 								.enum(["local", "cloud", "none"])
// 								.default("local"),
// 							cloud_recording: z.boolean(),
// 							host_pause_stop_recording: z.boolean(),
// 							ip_address_access_control: z
// 								.object({
// 									enable: z.boolean(),
// 									ip_addresses_or_ranges: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							local_recording: z.boolean(),
// 							record_audio_file: z.boolean(),
// 							record_gallery_view: z.boolean(),
// 							record_speaker_view: z.boolean(),
// 							recording_audio_transcript: z.boolean(),
// 							recording_disclaimer: z.boolean(),
// 							smart_recording: z
// 								.object({
// 									create_recording_highlights: z.boolean(),
// 									create_smart_chapters: z.boolean(),
// 									create_next_steps: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							recording_password_requirement: z
// 								.object({
// 									have_letter: z.boolean(),
// 									have_number: z.boolean(),
// 									have_special_character: z.boolean(),
// 									length: z.number().int().lte(10),
// 									only_allow_numeric: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							save_chat_text: z.boolean(),
// 							show_timestamp: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					schedule_meeting: z
// 						.object({
// 							audio_type: z
// 								.enum(["both", "telephony", "voip", "thirdParty"])
// 								.default("voip"),
// 							default_password_for_scheduled_meetings: z.string(),
// 							embed_password_in_join_link: z.boolean(),
// 							force_pmi_jbh_password: z.boolean(),
// 							host_video: z.boolean(),
// 							join_before_host: z.boolean(),
// 							meeting_password_requirement: z
// 								.object({
// 									consecutive_characters_length: z.union([
// 										z.literal(0),
// 										z.literal(4),
// 										z.literal(5),
// 										z.literal(6),
// 										z.literal(7),
// 										z.literal(8),
// 									]),
// 									have_letter: z.boolean(),
// 									have_number: z.boolean(),
// 									have_special_character: z.boolean(),
// 									have_upper_and_lower_characters: z.boolean(),
// 									length: z.number().int(),
// 									only_allow_numeric: z.boolean(),
// 									weak_enhance_detection: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							participants_video: z.boolean(),
// 							personal_meeting: z.boolean(),
// 							pmi_password: z.string(),
// 							pstn_password_protected: z.boolean(),
// 							require_password_for_instant_meetings: z.boolean(),
// 							require_password_for_pmi_meetings: z.enum([
// 								"jbh_only",
// 								"all",
// 								"none",
// 							]),
// 							require_password_for_scheduled_meetings: z.boolean(),
// 							require_password_for_scheduling_new_meetings: z.boolean(),
// 							use_pmi_for_instant_meetings: z.boolean(),
// 							use_pmi_for_scheduled_meetings: z.boolean(),
// 							continuous_meeting_chat: z
// 								.object({
// 									enable: z.boolean(),
// 									can_add_external_users: z.boolean(),
// 									auto_add_invited_external_users: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					telephony: z
// 						.object({
// 							audio_conference_info: z.string().max(2048),
// 							show_international_numbers_link: z.boolean(),
// 							telephony_regions: z
// 								.object({
// 									allowed_values: z.array(z.string()),
// 									selection_values: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							third_party_audio: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					tsp: z
// 						.object({
// 							call_out: z.boolean(),
// 							call_out_countries: z.array(z.object({}).partial().passthrough()),
// 							show_international_numbers_link: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 					whiteboard: z
// 						.object({
// 							out_meeting_advanced_whiteboard: z.boolean(),
// 							in_meeting_advanced_whiteboard: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			z
// 				.object({
// 					authentication_options: z
// 						.object({
// 							meeting_authentication: z
// 								.object({
// 									allow_authentication_exception: z.boolean(),
// 									authentication_options: z.array(
// 										z
// 											.object({
// 												default_option: z.boolean(),
// 												domains: z.string(),
// 												id: z.string(),
// 												name: z.string(),
// 												type: z.enum([
// 													"enforce_login",
// 													"enforce_login_with_domains",
// 													"enforce_login_with_same_account",
// 												]),
// 												visible: z.boolean(),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 									meeting_authentication: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							recording_authentication: z
// 								.object({
// 									authentication_options: z.array(
// 										z
// 											.object({
// 												default_option: z.boolean(),
// 												domains: z.string(),
// 												id: z.string(),
// 												name: z.string(),
// 												type: z.enum([
// 													"enforce_login",
// 													"enforce_login_with_domains",
// 													"internally",
// 												]),
// 												visible: z.boolean(),
// 											})
// 											.partial()
// 											.passthrough()
// 									),
// 									recording_authentication: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 			z.union([
// 				z
// 					.object({
// 						allow_authentication_exception: z.boolean(),
// 						authentication_options: z.array(
// 							z
// 								.object({
// 									default_option: z.boolean(),
// 									domains: z.string(),
// 									id: z.string(),
// 									name: z.string(),
// 									type: z.enum([
// 										"enforce_login",
// 										"enforce_login_with_same_account",
// 										"enforce_login_with_domains",
// 									]),
// 									visible: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						meeting_authentication: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				z
// 					.object({
// 						authentication_options: z.array(
// 							z
// 								.object({
// 									default_option: z.boolean(),
// 									domains: z.string(),
// 									id: z.string(),
// 									name: z.string(),
// 									type: z.enum([
// 										"internally",
// 										"enforce_login",
// 										"enforce_login_with_domains",
// 									]),
// 									visible: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough()
// 						),
// 						recording_authentication: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 			]),
// 			z
// 				.object({
// 					meeting_security: z
// 						.object({
// 							auto_security: z.boolean(),
// 							block_user_domain: z.boolean(),
// 							block_user_domain_list: z.array(z.string()).max(20),
// 							embed_password_in_join_link: z.boolean(),
// 							encryption_type: z.enum(["enhanced_encryption", "e2ee"]),
// 							end_to_end_encrypted_meetings: z.boolean(),
// 							meeting_password: z.boolean(),
// 							meeting_password_requirement: z
// 								.object({
// 									consecutive_characters_length: z.union([
// 										z.literal(0),
// 										z.literal(4),
// 										z.literal(5),
// 										z.literal(6),
// 										z.literal(7),
// 										z.literal(8),
// 									]),
// 									have_letter: z.boolean(),
// 									have_number: z.boolean(),
// 									have_special_character: z.boolean(),
// 									have_upper_and_lower_characters: z.boolean(),
// 									length: z.number().int(),
// 									only_allow_numeric: z.boolean(),
// 									weak_enhance_detection: z.boolean(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							only_authenticated_can_join_from_webclient: z.boolean(),
// 							phone_password: z.boolean(),
// 							pmi_password: z.boolean(),
// 							require_password_for_scheduled_meeting: z.boolean(),
// 							require_password_for_scheduled_webinar: z.boolean(),
// 							waiting_room: z.boolean(),
// 							waiting_room_settings: z
// 								.object({
// 									participants_to_place_in_waiting_room: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 										z.literal(2),
// 									]),
// 									users_who_can_admit_participants_from_waiting_room: z.union([
// 										z.literal(0),
// 										z.literal(1),
// 									]),
// 									whitelisted_domains_for_waiting_room: z.string(),
// 								})
// 								.partial()
// 								.passthrough(),
// 							webinar_password: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough(),
// 				})
// 				.partial()
// 				.passthrough(),
// 		]),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1120&#x60; &lt;br&gt;
//  A valid invitation to join the Zoom account was not found for this user. &lt;br&gt;
// This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/users/:userId/settings",
// 		description: `Update a user&#x27;s settings. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.



// **Scopes:** &#x60;user:write&#x60;,&#x60;user:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `User Settings`,
// 				type: "Body",
// 				schema: userSettingsUpdate_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "option",
// 				type: "Query",
// 				schema: z
// 					.enum([
// 						"meeting_authentication",
// 						"recording_authentication",
// 						"meeting_security",
// 					])
// 					.optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1108&#x60; &lt;br&gt;
//  Only Licensed or On-prem users can enable the large meeting feature.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1204&#x60; &lt;br&gt;
//  You can&#x27;t enable the Webinar feature because you already have the Zoom Events feature.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1205&#x60; &lt;br&gt;
//  You can&#x27;t enable the Zoom Events feature because you already have the Webinar feature.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1206&#x60; &lt;br&gt;
//  You can only enable the Zoom Events feature for Licensed or On-prem users.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1120&#x60; &lt;br&gt;
//  A valid invitation to join the Zoom account was not found for this user. &lt;br&gt;
// This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1122&#x60; &lt;br&gt;
//  Webinar feature can only be enabled for Licensed or On-prem users.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  You can&#x27;t add paid users.&lt;br&gt;
// You can add max $maxNumber paid users.&lt;br&gt;
// You can add max $maxNumber free users.&lt;br&gt;
// You can add max $maxNumber Webinar 100 users.&lt;br&gt;
// You can add max $maxNumber Webinar 500 users.&lt;br&gt;
// You can add max $maxNumber Webinar 1000 users.&lt;br&gt;
// You can add max $maxNumber Webinar 3000 users.&lt;br&gt;
// You can add max $maxNumber Webinar 5000 users.&lt;br&gt;
// You can add max $maxNumber Webinar 10000 users.&lt;br&gt;
// You can add max $maxNumber Large 100 users.&lt;br&gt;
// You can add max $maxNumber Large 200 users.&lt;br&gt;
// You can add max $maxNumber Large 300 users.&lt;br&gt;
// You can add max $maxNumber Large 500 users.&lt;br&gt;
// You can add max $maxNumber Large 1000 users.&lt;br&gt;
// You can add max $maxNumber paid users.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  You cannot downgrade the Zoom Events feature to &quot;$downgradeCapacity&quot; capacity because there is an upcoming Zoom Events scheduled with &quot;$maxCapacity&quot; capacity. &lt;br&gt; You cannot remove the Zoom Events feature for this user because the user has an upcoming Zoom Events scheduled. &lt;br&gt; You cannot assign a Zoom Customer Managed Key license for a single user.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1207&#x60; &lt;br&gt;
//  You can only enable the &quot;Concurrent Meeting&quot; feature for Licensed users or On-prem users.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1208&#x60; &lt;br&gt;
//  You can&#x27;t enable the &quot;Concurrent Meeting Basic&quot; feature.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1209&#x60; &lt;br&gt;
//  You can add a maximum of {0} &quot;Concurrent Meeting Basic&quot; users.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1210&#x60; &lt;br&gt;
//  You can&#x27;t enable the &quot;Concurrent Meeting Plus&quot; feature.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1211&#x60; &lt;br&gt;
//  You can add a maximum of {0} &quot;Concurrent Meeting Plus&quot; users.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1228&#x60; &lt;br&gt;
//  Unable to assign &quot;Zoom Revenue Accelerator&quot; license because you have reached the limit of licensed users allowed on this account or this account does not have the &quot;Zoom Revenue Accelerator&quot; plan.&lt;br/&gt;Unable to assign &quot;Zoom Whiteboard&quot; license because you have reached the limit of licensed users allowed on this account or this account does not have the &quot;Zoom Whiteboard&quot; plan.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1233&#x60; &lt;br&gt;
//  You cannot enable the &quot;Zoom Revenue Accelerator&quot; for that Zoom Rooms user. &lt;br&gt;You cannot enable the &quot;Zoom Whiteboard&quot; for that Zoom Rooms user.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1234&#x60; &lt;br&gt;
//  You cannot enable the &quot;Zoom Revenue Accelerator&quot; for an On-Prem user. &lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1242&#x60; &lt;br&gt;
//  You cannot set &quot;Zoom Whiteboard&quot; and &quot;Zoom Whiteboard Plus&quot; at the same time. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/users/:userId/settings/virtual_backgrounds",
// 		description: `Use this API to [upload a Virtual Background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background) to a user&#x27;s profile. For user-level apps, pass [the &#x60;me&#x60; value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the &#x60;userId&#x60; parameter. 

//  **Note:** 
// * A user profile cannot exceed more than 10 Virtual Background files. 
// * You can only upload image files that are in JPG/JPEG, GIF or PNG format. 
// * Video files must be in MP4 or MOV file format with a minimum resolution of 480 by 360 pixels (360p) and a maximum resolution of 1920 by 1080 pixels (1080p). 
// * The Virtual Background file size cannot exceed 15 megabytes (MB). 

//  **Prerequisites:** 
// * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.

// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "form-data",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ file: z.string() }).partial().passthrough(),
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				is_default: z.boolean(),
// 				name: z.string(),
// 				size: z.number().int(),
// 				type: z.enum(["image", "video"]),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;120&#x60; &lt;br&gt;
//  No file uploaded, verify that a file has been uploaded.&lt;br&gt;
// File size cannot exceed 15M.&lt;br&gt;
// A maximum of 10 files are allowed for a user.&lt;br&gt;
// Only jpg/jpeg, gif or png image file can be uploaded. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/users/:userId/settings/virtual_backgrounds",
// 		description: `Use this API to delete a user&#x27;s Virtual Background files. For user-level apps, pass [the &#x60;me&#x60; value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the &#x60;userId&#x60; parameter. 

//  **Prerequisites:** 
// * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.

// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "file_ids",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid parameter: file_ids &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  * User does not exist. 
// * User &quot;{userId}&quot; does not exist or does not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/users/:userId/status",
// 		description: `[Deactivate](https://support.zoom.us/hc/en-us/articles/115005269946-Remove-User-from-your-Account#h_6a9bc1c3-d739-4945-b1f2-00b3b88fb5cc) an active user or to [reactivate](https://support.zoom.us/hc/en-us/articles/115005269946-Remove-User-from-your-Account#h_16319724-d120-4be6-af5d-31582d134ea0) a deactivated user. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// An account owner or admins can deactivate as well as activate a user in a Zoom account. Deactivating a user removes all licenses associated with a user, and prevents the deactivated user from logging into their Zoom account. A deactivated user can be reactivated. Reactivating a user grants the user access to log in to their Zoom account.



// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `User status.`,
// 				type: "Body",
// 				schema: userStatus_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.object({}).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Zoom Room and Admin users&#x27; status cannot be activated or deactivated. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  You cannot deactivate this user because the user has an upcoming Zoom Events scheduled. &lt;br&gt;
// **Error Code:** &#x60;3412&#x60; &lt;br&gt;
//  * Your request to activate the user was not approved at this time because your account has reached the permitted maximum number of $maxAllowedNumber &quot;Basic&quot; users. Remove the existing &quot;Basic&quot; user(s) from your &quot;Users&quot; list or the &quot;Pending Users&quot; list before attempting to activate this user. 
// * Your request to activate the user was not approved at this time because your account has reached the permitted maximum number of $maxAllowedNumber no-meeting-license users. Remove the existing no-meeting-license user(s) from your &quot;Users&quot; list or the &quot;Pending Users&quot; list before attempting to activate this user. &lt;br&gt;
// **Error Code:** &#x60;2033&#x60; &lt;br&gt;
//  Your request to activate the &quot;Basic&quot; user was not approved because you have already reached the maximum &quot;Basic&quot; user limit allowed in your account. For additional help regarding this issue, contact the Zoom Customer Support team. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/token",
// 		description: `Get a user&#x27;s Zoom token or Zoom Access Key (ZAK). For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter. 

 

// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z.enum(["token", "zak"]).optional().default("token"),
// 			},
// 			{
// 				name: "ttl",
// 				type: "Query",
// 				schema: z.number().int().optional().default(7200),
// 			},
// 		],
// 		response: z.object({ token: z.string() }).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/users/:userId/token",
// 		description: `Revoke a user&#x27;s SSO token. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter.

// After calling this API, the SSO user will be logged out of their current Zoom session.



// **Scopes:** &#x60;user:write:admin&#x60;,&#x60;user:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: $userId. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/tsp",
// 		description: `A user can have a maximum of two TSP accounts. Use this API to list all TSP accounts of a user.  
   
 


// **Scopes:** &#x60;tsp:read:admin&#x60;,&#x60;tsp:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: userId,
// 			},
// 		],
// 		response: z
// 			.object({
// 				tsp_accounts: z.array(
// 					z
// 						.object({
// 							conference_code: z.string().min(1).max(16),
// 							dial_in_numbers: z
// 								.array(
// 									z
// 										.object({
// 											code: z.string().max(6),
// 											country_label: z.string().max(10),
// 											number: z.string().min(1).max(16),
// 											type: z.enum(["toll", "tollfree", "media_link"]),
// 										})
// 										.partial()
// 										.passthrough()
// 								)
// 								.optional(),
// 							id: z.enum(["1", "2"]).optional(),
// 							leader_pin: z.string().min(1).max(16),
// 							tsp_bridge: z.enum(["US_TSP_TB", "EU_TSP_TB"]).optional(),
// 						})
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;2024&#x60; &lt;br&gt;
// Account has not enabled TSP.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: $userId.&lt;br&gt;

// **Error Code:** &#x60;1120&#x60; &lt;br&gt;
// A valid invitation to join the Zoom account was not found for this user.&lt;br&gt;
// This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/users/:userId/tsp",
// 		description: `Add a user&#x27;s TSP account.  
   
 


// **Scopes:** &#x60;tsp:write:admin&#x60;,&#x60;tsp:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `TSP account.`,
// 				type: "Body",
// 				schema: userTSPCreate_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: userId,
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string().optional(),
// 				conference_code: z.string().min(1).max(16),
// 				dial_in_numbers: z
// 					.array(
// 						z
// 							.object({
// 								code: z.string().max(6),
// 								country_label: z.string().max(10),
// 								number: z.string().min(1).max(16),
// 								type: z.enum(["toll", "tollfree", "media_link"]),
// 							})
// 							.partial()
// 							.passthrough()
// 					)
// 					.optional(),
// 				leader_pin: z.string().min(1).max(16),
// 				tsp_bridge: z.enum(["US_TSP_TB", "EU_TSP_TB"]).optional(),
// 			})
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;2024&#x60; &lt;br&gt;
// Account has not enabled TSP.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Media link is required for AT&amp;T TSP accounts.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// You can add a max of two tsp configs.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: $userId.&lt;br&gt;

// **Error Code:** &#x60;1120&#x60; &lt;br&gt;
// A valid invitation to join the Zoom account was not found for this user.&lt;br&gt;
// This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/tsp/:tspId",
// 		description: `Each user can have a maximum of two TSP accounts. Use this API to retrieve details of a specific TSP account enabled for a specific user.  
   
 


// **Scopes:** &#x60;tsp:read:admin&#x60;,&#x60;tsp:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: userId,
// 			},
// 			{
// 				name: "tspId",
// 				type: "Path",
// 				schema: z.enum(["1", "2"]),
// 			},
// 		],
// 		response: z
// 			.object({
// 				conference_code: z.string().min(1).max(16),
// 				dial_in_numbers: z
// 					.array(
// 						z
// 							.object({
// 								code: z.string().max(6),
// 								country_label: z.string().max(10),
// 								number: z.string().min(1).max(16),
// 								type: z.enum(["toll", "tollfree", "media_link"]),
// 							})
// 							.partial()
// 							.passthrough()
// 					)
// 					.optional(),
// 				id: z.string().optional(),
// 				leader_pin: z.string().min(1).max(16),
// 				tsp_bridge: z.enum(["US_TSP_TB", "EU_TSP_TB"]).optional(),
// 			})
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The TSP id provided does not exist.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// TSP Config does not exist.&lt;br&gt;

// **Error Code:** &#x60;2024&#x60; &lt;br&gt;
// Account has not enabled TSP.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: $userId.&lt;br&gt;

// **Error Code:** &#x60;1120&#x60; &lt;br&gt;
// A valid invitation to join the Zoom account was not found for this user.&lt;br&gt;
// This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/users/:userId/tsp/:tspId",
// 		description: `Delete a user&#x27;s TSP account.  
   
 


// **Scopes:** &#x60;tsp:write:admin&#x60;,&#x60;tsp:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: userId,
// 			},
// 			{
// 				name: "tspId",
// 				type: "Path",
// 				schema: z.enum(["1", "2"]),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;2024&#x60; &lt;br&gt;
// Account not enable TSP.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The TSP id provided does not exist.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// TSP Config does not exist.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// At least one tsp config must be available.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: $userId.&lt;br&gt;

// **Error Code:** &#x60;1120&#x60; &lt;br&gt;
// A valid invitation to join the Zoom account was not found for this user.&lt;br&gt;
// This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/users/:userId/tsp/:tspId",
// 		description: `Update a user&#x27;s TSP account.  
   
 


// **Scopes:** &#x60;tsp:write:admin&#x60;,&#x60;tsp:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `TSP account.`,
// 				type: "Body",
// 				schema: userTSPCreate_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: userId,
// 			},
// 			{
// 				name: "tspId",
// 				type: "Path",
// 				schema: z.enum(["1", "2"]),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;2024&#x60; &lt;br&gt;
// Account has not enabled TSP.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// The TSP id provided does not exist.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// TSP Config does not exist.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// At least one tsp config must be available.&lt;br&gt;

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Media link is required for AT&amp;T TSP accounts.

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid parameter: tsp_bridge.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: $userId.&lt;br&gt;

// **Error Code:** &#x60;1120&#x60; &lt;br&gt;
// A valid invitation to join the Zoom account was not found for this user.&lt;br&gt;
// This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/users/:userId/tsp/settings",
// 		description: `A global dial-in page can provide a list of global access numbers using which audio conferencing can be conducted. By calling this API, you can set the url for the global dial-in page of a user whose Zoom account has TSP and special TSP with third-party audio conferencing options enabled. &amp;lt;p&amp;gt;&amp;lt;/p&amp;gt;


// **Scopes:** &#x60;tsp:write:admin&#x60;,&#x60;tsp:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Global dial-in URL of the user.`,
// 				type: "Body",
// 				schema: z
// 					.object({ audio_url: z.string().max(512) })
// 					.partial()
// 					.passthrough(),
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;2000&#x60; &lt;br&gt;
// Not TSP special account.&lt;br&gt;

// Ths error means that the account does not have special TSP privilege. Contact Zoom Developer Support for details.&lt;br&gt;

// **Error Code:** &#x60;2024&#x60; &lt;br&gt;
// Account not enable TSP

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User {userId} not exist or not belong to this account.

// **Error Code:** &#x60;1120&#x60; &lt;br&gt;
// Invite not exist.

// This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/webinar_templates",
// 		description: `Display a list of a user&#x27;s [webinar templates](https://support.zoom.us/hc/en-us/articles/115001079746-Webinar-Templates). For user-level apps, pass [the &#x60;me&#x60; value](/docs/api-reference/using-zoom-apis#mekeyword) instead of the &#x60;userId&#x60; parameter. When you schedule a webinar, save the settings for that webinar as a template for scheduling future webinars.  To use a template when scheduling a webinar, use the &#x60;id&#x60; value in this API response in the &#x60;template_id&#x60; field of the [**Create a webinar**](/docs/api-reference/zoom-api/methods#operation/webinarCreate) API. **Prerequisites:** * A Pro or a higher account with the [Zoom Webinar plan](https://zoom.us/pricing/webinar).

// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				templates: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							name: z.string(),
// 							type: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Cannot use webinar API, you need to subscribe webinar plan and then enable webinar for this user:{userId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  * User not exist: {userId}.
// * User {userId} does not exist or does not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/users/:userId/webinar_templates",
// 		description: `Use this API to create a webinar template from an existing webinar. 



// **Scopes:** &#x60;webinar:write:admin&#x60;,&#x60;webinar:write&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: webinarTemplateCreate_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({ id: z.string(), name: z.string() })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;200&#x60; &lt;br&gt;
// Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// You can only create up to 40 webinar templates.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// * Cannot access meeting info. 
// * Webinar template name already exists: {templateName}.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar does not exist: {webinarId}.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// * User does not exist. 
// * User {userId} does not exist or does not belong to this account.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/:userId/webinars",
// 		description: `List all the webinars scheduled by or on behalf a webinar host. For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter. 

//  Zoom users with a [webinar plan](https://zoom.us/webinar) have access to creating and managing webinars. Webinars let a host broadcast a Zoom meeting to up to 10,000 attendees. 

// **Note** This API only returns a user&#x27;s [unexpired webinars](https://support.zoom.us/hc/en-us/articles/201362373-Meeting-ID#h_c73f9b08-c1c0-4a1a-b538-e01ebb98e844). 

//  **Prerequisites** 
// * A Pro or higher plan with the webinar add-on.

// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z
// 					.enum(["scheduled", "upcoming"])
// 					.optional()
// 					.default("scheduled"),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				webinars: z.array(
// 					z
// 						.object({
// 							agenda: z.string(),
// 							created_at: z.string().datetime({ offset: true }),
// 							duration: z.number().int(),
// 							host_id: z.string(),
// 							id: z.number().int(),
// 							join_url: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							timezone: z.string(),
// 							topic: z.string(),
// 							type: z
// 								.union([z.literal(5), z.literal(6), z.literal(9)])
// 								.default(5),
// 							uuid: z.string(),
// 							is_simulive: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} not exist or not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/users/:userId/webinars",
// 		description: `Schedule a webinar for a user (webinar host). For user-level apps, pass [the &#x60;me&#x60; value](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#the-me-keyword) instead of the &#x60;userId&#x60; parameter. 

// Zoom users with a [Webinar plan](https://zoom.us/webinar) have access to creating and managing webinars. Webinars allow a host to broadcast a Zoom meeting to up to 10,000 attendees. 

// **100 requests per day**. The rate limit is applied to the &#x60;userId&#x60; of the **webinar host** used to make the request. 

// **Prerequisites:** 
// * A Pro or higher plan with a Webinar add-on.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: webinarCreate_Body,
// 			},
// 			{
// 				name: "userId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				host_email: z.string().email(),
// 				host_id: z.string(),
// 				id: z.number().int(),
// 				registrants_confirmation_email: z.boolean(),
// 				template_id: z.string(),
// 				uuid: z.string(),
// 				agenda: z.string(),
// 				created_at: z.string().datetime({ offset: true }),
// 				duration: z.number().int(),
// 				join_url: z.string(),
// 				occurrences: z.array(
// 					z
// 						.object({
// 							duration: z.number().int(),
// 							occurrence_id: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							status: z.enum(["available", "deleted"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				password: z.string().max(10),
// 				recurrence: z
// 					.object({
// 						end_date_time: z.string().datetime({ offset: true }).optional(),
// 						end_times: z.number().int().lte(60).optional().default(1),
// 						monthly_day: z.number().int().optional(),
// 						monthly_week: z
// 							.union([
// 								z.literal(-1),
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							])
// 							.optional(),
// 						monthly_week_day: z
// 							.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 							])
// 							.optional(),
// 						repeat_interval: z.number().int().optional(),
// 						type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 						weekly_days: z.string().optional(),
// 					})
// 					.passthrough(),
// 				settings: z
// 					.object({
// 						allow_multiple_devices: z.boolean(),
// 						alternative_hosts: z.string(),
// 						alternative_host_update_polls: z.boolean(),
// 						approval_type: z
// 							.union([z.literal(0), z.literal(1), z.literal(2)])
// 							.default(2),
// 						attendees_and_panelists_reminder_email_notification: z
// 							.object({
// 								enable: z.boolean(),
// 								type: z.union([
// 									z.literal(0),
// 									z.literal(1),
// 									z.literal(2),
// 									z.literal(3),
// 									z.literal(4),
// 									z.literal(5),
// 									z.literal(6),
// 									z.literal(7),
// 								]),
// 							})
// 							.partial()
// 							.passthrough(),
// 						audio: z
// 							.enum(["both", "telephony", "voip", "thirdParty"])
// 							.default("both"),
// 						audio_conference_info: z.string().max(2048),
// 						authentication_domains: z.string(),
// 						authentication_name: z.string(),
// 						authentication_option: z.string(),
// 						auto_recording: z.enum(["local", "cloud", "none"]).default("none"),
// 						close_registration: z.boolean(),
// 						contact_email: z.string(),
// 						contact_name: z.string(),
// 						email_language: z.string(),
// 						enforce_login: z.boolean(),
// 						enforce_login_domains: z.string(),
// 						follow_up_absentees_email_notification: z
// 							.object({
// 								enable: z.boolean(),
// 								type: z.union([
// 									z.literal(0),
// 									z.literal(1),
// 									z.literal(2),
// 									z.literal(3),
// 									z.literal(4),
// 									z.literal(5),
// 									z.literal(6),
// 									z.literal(7),
// 								]),
// 							})
// 							.partial()
// 							.passthrough(),
// 						follow_up_attendees_email_notification: z
// 							.object({
// 								enable: z.boolean(),
// 								type: z.union([
// 									z.literal(0),
// 									z.literal(1),
// 									z.literal(2),
// 									z.literal(3),
// 									z.literal(4),
// 									z.literal(5),
// 									z.literal(6),
// 									z.literal(7),
// 								]),
// 							})
// 							.partial()
// 							.passthrough(),
// 						global_dial_in_countries: z.array(z.string()),
// 						hd_video: z.boolean(),
// 						hd_video_for_attendees: z.boolean(),
// 						host_video: z.boolean(),
// 						language_interpretation: z
// 							.object({
// 								enable: z.boolean(),
// 								interpreters: z.array(
// 									z
// 										.object({
// 											email: z.string().email(),
// 											languages: z.string(),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						sign_language_interpretation: z
// 							.object({
// 								enable: z.boolean(),
// 								interpreters: z.array(
// 									z
// 										.object({
// 											email: z.string().email(),
// 											sign_language: z.string(),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						panelist_authentication: z.boolean(),
// 						meeting_authentication: z.boolean(),
// 						add_watermark: z.boolean(),
// 						add_audio_watermark: z.boolean(),
// 						notify_registrants: z.boolean(),
// 						on_demand: z.boolean(),
// 						panelists_invitation_email_notification: z.boolean(),
// 						panelists_video: z.boolean(),
// 						post_webinar_survey: z.boolean(),
// 						practice_session: z.boolean(),
// 						question_and_answer: z
// 							.object({
// 								allow_submit_questions: z.boolean(),
// 								allow_anonymous_questions: z.boolean(),
// 								answer_questions: z.enum(["only", "all"]),
// 								attendees_can_comment: z.boolean(),
// 								attendees_can_upvote: z.boolean(),
// 								allow_auto_reply: z.boolean(),
// 								auto_reply_text: z.string(),
// 								enable: z.boolean(),
// 							})
// 							.partial()
// 							.passthrough(),
// 						registrants_confirmation_email: z.boolean(),
// 						registrants_email_notification: z.boolean(),
// 						registrants_restrict_number: z.number().int().gte(0).lte(20000),
// 						registration_type: z
// 							.union([z.literal(1), z.literal(2), z.literal(3)])
// 							.default(1),
// 						send_1080p_video_to_attendees: z.boolean(),
// 						show_share_button: z.boolean(),
// 						survey_url: z.string(),
// 						enable_session_branding: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				start_time: z.string().datetime({ offset: true }),
// 				start_url: z.string(),
// 				timezone: z.string(),
// 				topic: z.string().max(200),
// 				tracking_fields: z.array(
// 					z
// 						.object({ field: z.string(), value: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 				type: z.union([z.literal(5), z.literal(6), z.literal(9)]).default(5),
// 				is_simulive: z.boolean(),
// 				record_file_id: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Subscription plan for webinar is missing. Enable webinar for this user once the subscription plan is added:{userId}.&lt;br&gt;
// * Users in &#x27;{0}&#x27; have been blocked from joining meetings and webinars. To unblock them, go to the Settings page in the Zoom web portal and update &#x27;Block users in specific domains from joining meetings and webinars&#x27;. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * The value that you entered for the schedule_for field is invalid. Enter a valid value and try again.&lt;br&gt;
// * Can not schedule simulive webinar for others.&lt;br&gt;
// * Account hasn&#x27;t enabled Simulive Webinar.&lt;br&gt;
// * Record file does not exist. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} not exist or not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/email",
// 		description: `Verify if a user&#x27;s email is registered with Zoom.  
   
 

// &amp;lt;b&amp;gt;Note: &amp;lt;/b&amp;gt;You can successfully check if a user is a registered Zoom user only if the user **signed up for Zoom via email and is within your account.** If you provide an email address of a user who is not in your account, the value of &amp;quot;existed_email&amp;quot; parameter will be &amp;quot;false&amp;quot; irrespective of whether or not the user is registered with Zoom. The response of this API call will not include users who joined Zoom using options such as &amp;quot;Sign in with SSO&amp;quot;, &amp;quot;Sign in with Google&amp;quot; or &amp;quot;Sign in with Facebook&amp;quot; even if they are in the same account as yours.



// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "email",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.object({ existed_email: z.boolean() }).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Email is required.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: $userId.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/users/features",
// 		description: `Bulk update features. 



// **Scopes:** &#x60;user:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `User feature`,
// 				type: "Body",
// 				schema: bulkUpdateFeature_Body,
// 			},
// 		],
// 		response: z
// 			.object({
// 				success_user_ids: z.array(z.string()),
// 				fail_details: z.array(
// 					z
// 						.object({
// 							user_ids: z.array(z.string()),
// 							reason: z.enum([
// 								"Users not found",
// 								"Have upcoming events",
// 								"Unpaid user",
// 								"Not enough seats",
// 								"Can't update for Zoom One users",
// 								"Can't update for free users",
// 								"Can't update for Zoom United users",
// 								"Can't update for Zoom Room users",
// 								"Not allowed to add basic users",
// 								"Can't update for non-SSO users",
// 								"No need to update",
// 							]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  * Current account must be a paid account. 
// * Current account does not enable this feature. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * Your account can&#x27;t set user type as On-prem. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/me/zak",
// 		description: `Get the Zoom Access Key (ZAK) for the authenticated user associated with the access token in the API request. Use a ZAK to start or join a meeting on behalf of this user.

// ZAKs obtained with this endpoint expire five minutes after receipt.

// To get a ZAK for a different user or with a different expiration, use the [Get a user token](https://marketplace.zoom.us/docs/api-reference/zoom-api/methods#operation/userToken) API with the &#x60;zak&#x60; &#x60;type&#x60; query parameter.

// See [Getting a Zoom Access Key (ZAK)](https://developers.zoom.us/docs/meeting-sdk/auth/#start-meetings-and-webinars-with-a-zoom-users-zak-token) for details.



// **Scopes:** &#x60;user_zak:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		response: z.object({ token: z.string() }).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User not exist.&lt;br&gt;
// User {userId} does not exist or does not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/users/summary",
// 		description: `Use this API to get a summary of users, including the number and types of users in the account.

 

// **Scopes:** &#x60;user:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		response: z
// 			.object({
// 				licensed_users_count: z.number().int(),
// 				basic_users_count: z.number().int(),
// 				on_prem_users_count: z.number().int(),
// 				room_users_count: z.number().int(),
// 				pending_users_count: z.number().int(),
// 				join_only_users_count: z.number().int(),
// 				total_users_count: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "get",
// 		path: "/users/vanity_name",
// 		description: `A personal meeting room is a virtual meeting room that can be permanently assigned to a user.
// Use this API to check if a personal meeting room with the given name exists or not.  
   
 


// **Scopes:** &#x60;user:read:admin&#x60;,&#x60;user:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "vanity_name",
// 				type: "Query",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.object({ existed: z.boolean() }).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Vanity name is required.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId",
// 		description: `Get details of a scheduled Zoom Webinar.
  
   
 
// **Prerequisites:**
// * Pro or higher plan with a Webinar add-on.

// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "show_previous_occurrences",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				host_email: z.string().email(),
// 				host_id: z.string(),
// 				id: z.number().int(),
// 				uuid: z.string(),
// 				agenda: z.string(),
// 				created_at: z.string().datetime({ offset: true }),
// 				duration: z.number().int(),
// 				join_url: z.string(),
// 				occurrences: z.array(
// 					z
// 						.object({
// 							duration: z.number().int(),
// 							occurrence_id: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							status: z.enum(["available", "deleted"]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				password: z.string().max(10),
// 				recurrence: z
// 					.object({
// 						end_date_time: z.string().datetime({ offset: true }).optional(),
// 						end_times: z.number().int().lte(60).optional().default(1),
// 						monthly_day: z.number().int().optional(),
// 						monthly_week: z
// 							.union([
// 								z.literal(-1),
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 							])
// 							.optional(),
// 						monthly_week_day: z
// 							.union([
// 								z.literal(1),
// 								z.literal(2),
// 								z.literal(3),
// 								z.literal(4),
// 								z.literal(5),
// 								z.literal(6),
// 								z.literal(7),
// 							])
// 							.optional(),
// 						repeat_interval: z.number().int().optional(),
// 						type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 						weekly_days: z.string().optional(),
// 					})
// 					.passthrough(),
// 				settings: z
// 					.object({
// 						allow_multiple_devices: z.boolean(),
// 						alternative_hosts: z.string(),
// 						alternative_host_update_polls: z.boolean(),
// 						approval_type: z
// 							.union([z.literal(0), z.literal(1), z.literal(2)])
// 							.default(2),
// 						attendees_and_panelists_reminder_email_notification: z
// 							.object({
// 								enable: z.boolean(),
// 								type: z.union([
// 									z.literal(0),
// 									z.literal(1),
// 									z.literal(2),
// 									z.literal(3),
// 									z.literal(4),
// 									z.literal(5),
// 									z.literal(6),
// 									z.literal(7),
// 								]),
// 							})
// 							.partial()
// 							.passthrough(),
// 						audio: z
// 							.enum(["both", "telephony", "voip", "thirdParty"])
// 							.default("both"),
// 						audio_conference_info: z.string().max(2048),
// 						authentication_domains: z.string(),
// 						authentication_name: z.string(),
// 						authentication_option: z.string(),
// 						auto_recording: z.enum(["local", "cloud", "none"]).default("none"),
// 						close_registration: z.boolean(),
// 						contact_email: z.string(),
// 						contact_name: z.string(),
// 						email_language: z.string(),
// 						enforce_login: z.boolean(),
// 						enforce_login_domains: z.string(),
// 						follow_up_absentees_email_notification: z
// 							.object({
// 								enable: z.boolean(),
// 								type: z.union([
// 									z.literal(0),
// 									z.literal(1),
// 									z.literal(2),
// 									z.literal(3),
// 									z.literal(4),
// 									z.literal(5),
// 									z.literal(6),
// 									z.literal(7),
// 								]),
// 							})
// 							.partial()
// 							.passthrough(),
// 						follow_up_attendees_email_notification: z
// 							.object({
// 								enable: z.boolean(),
// 								type: z.union([
// 									z.literal(0),
// 									z.literal(1),
// 									z.literal(2),
// 									z.literal(3),
// 									z.literal(4),
// 									z.literal(5),
// 									z.literal(6),
// 									z.literal(7),
// 								]),
// 							})
// 							.partial()
// 							.passthrough(),
// 						global_dial_in_countries: z.array(z.string()),
// 						hd_video: z.boolean(),
// 						hd_video_for_attendees: z.boolean(),
// 						host_video: z.boolean(),
// 						language_interpretation: z
// 							.object({
// 								enable: z.boolean(),
// 								interpreters: z.array(
// 									z
// 										.object({
// 											email: z.string().email(),
// 											languages: z.string(),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						sign_language_interpretation: z
// 							.object({
// 								enable: z.boolean(),
// 								interpreters: z.array(
// 									z
// 										.object({
// 											email: z.string().email(),
// 											sign_language: z.string(),
// 										})
// 										.partial()
// 										.passthrough()
// 								),
// 							})
// 							.partial()
// 							.passthrough(),
// 						panelist_authentication: z.boolean(),
// 						meeting_authentication: z.boolean(),
// 						add_watermark: z.boolean(),
// 						add_audio_watermark: z.boolean(),
// 						notify_registrants: z.boolean(),
// 						on_demand: z.boolean(),
// 						panelists_invitation_email_notification: z.boolean(),
// 						panelists_video: z.boolean(),
// 						post_webinar_survey: z.boolean(),
// 						practice_session: z.boolean(),
// 						question_and_answer: z
// 							.object({
// 								allow_submit_questions: z.boolean(),
// 								allow_anonymous_questions: z.boolean(),
// 								answer_questions: z.enum(["only", "all"]),
// 								attendees_can_comment: z.boolean(),
// 								attendees_can_upvote: z.boolean(),
// 								allow_auto_reply: z.boolean(),
// 								auto_reply_text: z.string(),
// 								enable: z.boolean(),
// 							})
// 							.partial()
// 							.passthrough(),
// 						registrants_confirmation_email: z.boolean(),
// 						registrants_email_notification: z.boolean(),
// 						registrants_restrict_number: z.number().int().gte(0).lte(20000),
// 						registration_type: z
// 							.union([z.literal(1), z.literal(2), z.literal(3)])
// 							.default(1),
// 						send_1080p_video_to_attendees: z.boolean(),
// 						show_share_button: z.boolean(),
// 						survey_url: z.string(),
// 						enable_session_branding: z.boolean(),
// 					})
// 					.partial()
// 					.passthrough(),
// 				start_time: z.string().datetime({ offset: true }),
// 				start_url: z.string(),
// 				timezone: z.string(),
// 				topic: z.string().max(200),
// 				tracking_fields: z.array(
// 					z
// 						.object({ field: z.string(), value: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 				type: z.union([z.literal(5), z.literal(6), z.literal(9)]).default(5),
// 				is_simulive: z.boolean(),
// 				record_file_id: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/webinars/:webinarId",
// 		description: `Delete a webinar. 


// **Prerequisites:**  
 
// * Pro or higher plan with the webinar add-on.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "cancel_webinar_reminder",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3002&#x60; &lt;br&gt;
//  Sorry, you cannot delete this webinar since it is in progress.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
//  You are not the webinar host.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3007&#x60; &lt;br&gt;
//  Sorry, you cannot delete this webinar since it has ended.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3018&#x60; &lt;br&gt;
//  Not allowed to delete PMI.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3037&#x60; &lt;br&gt;
//  Not allowed to delete PAC.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/webinars/:webinarId",
// 		description: `Make updates to a scheduled webinar. 

// **100 requests per day**. The rate limit is applied to the &#x60;userId&#x60; of the **webinar host** used to make the request. 

// **Prerequisites** 
// * A Pro or higher plan with a webinar add-on.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Webinar.`,
// 				type: "Body",
// 				schema: webinarUpdate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account: {accountId} &lt;br&gt;
// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
//  * You are not the meeting host. 
// * Users in &quot;{0}&quot; have been blocked from joining meetings and webinars. To unblock them, go to the &quot;Settings&quot; page in the Zoom web portal and update the &quot;Block users in specific domains from joining meetings and webinars&quot; setting. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  You cannot update or delete simulive webinars that have started using this method. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  The value that you entered for the schedule_for field is invalid. Enter a valid value and try again. &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/webinars/:webinarId/batch_registrants",
// 		description: `Register up to 30 registrants at once for a scheduled webinar that requires [registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-webinar-with-registration).   
 

// **Prerequisites:**  
 
// * The webinar host must be a licensed user.
// * The webinar should be type &#x60;5&#x60;, a scheduled webinar. Other types of webinars are not supported by this API.  
   
 


// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;HEAVY&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: addBatchWebinarRegistrants_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				registrants: z.array(
// 					z
// 						.object({
// 							email: z.string(),
// 							join_url: z.string(),
// 							registrant_id: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Webinar plan is missing. You must subscribe to the Webinar plan and enable webinars for the &quot;{0}&quot; user to perform this action. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  This API can only be used for scheduled webinars (type 5). Batch registration is not supported for other webinar types. &lt;br&gt;
// **Error Code:** &#x60;3038&#x60; &lt;br&gt;
//  The webinar is over. You cannot register now. If you have any questions, contact the Webinar host. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Registration not enabled for this webinar: {0} &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  You have reached the limit for the number of attendees you can add. Contact Zoom Support for more information. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  The Zoom REST API does not support paid registration. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar does not exist: {0}.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3043&#x60; &lt;br&gt;
//  Webinar has reached maximum attendee capacity.&lt;br&gt;&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;404&#x60; &lt;br&gt;
//  Registration has not been enabled for this meeting: {meetingId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 429,
// 				description: `**HTTP Status Code:** &#x60;429&#x60; &lt;br&gt;
//  Too Many Requests 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/branding",
// 		description: `Use this API to get the webinar&#x27;s [Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) information. Session branding lets hosts visually customize a webinar by setting a webinar wallpaper that displays behind video tiles. Session branding also lets hosts set the Virtual Background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers. 

//  **Prerequisites:** 
// * A Pro or higher plan with the Webinar add-on. 
// * The **Webinar Session Branding** setting enabled.

// **Scopes:** &#x60;webinar:read&#x60;,&#x60;webinar:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				wallpaper: z.object({ id: z.string() }).partial().passthrough(),
// 				virtual_backgrounds: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							name: z.string(),
// 							is_default: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				name_tags: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							name: z.string(),
// 							text_color: z.string(),
// 							accent_color: z.string(),
// 							background_color: z.string(),
// 							is_default: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// You cannot enable session branding for this webinar.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User &quot;{userId}&quot; does not exist or does not belong to this account.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar &quot;{webinarId}&quot; not found or has expired.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/webinars/:webinarId/branding/name_tags",
// 		description: `Use this API to create a webinar&#x27;s [Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) name tag. There&#x27;s a limit of 20 name tags per webinar. **Prerequisites:** 
// *  The **Webinar Session Branding** setting enabled.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: createWebinarBrandingNameTag_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				name: z.string(),
// 				text_color: z.string(),
// 				accent_color: z.string(),
// 				background_color: z.string(),
// 				is_default: z.boolean(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// This webinar does not have session branding enabled.&lt;br&gt;
// You have reached the limit for the number of name tags you can add for this webinar. The limit is 20.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/webinars/:webinarId/branding/name_tags",
// 		description: `Use this API to delete a webinar&#x27;s [Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) name tag. 

//  **Prerequisites:** 
// * The **Webinar Session Branding** setting enabled.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "name_tag_ids",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid parameter: name_tag_ids

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// This webinar does not have session branding enabled.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/webinars/:webinarId/branding/name_tags/:nameTagId",
// 		description: `Use this API to update a webinar&#x27;s [Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) name tag. **Prerequisites:** 
// *  The **Webinar Session Branding** setting enabled.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: updateWebinarBrandingNameTag_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "nameTagId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// This webinar does not have session branding enabled.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/webinars/:webinarId/branding/virtual_backgrounds",
// 		description: `Use this API to upload a webinar&#x27;s session branding [Virtual Background](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background). Hosts and panelists can select and use these Virtual Backgrounds during the webinar. Branding Virtual Background files have the following restrictions: 
// * A webinar cannot exceed more than 10 Virtual Background files. 
// * You can only upload image files that are in JPG/JPEG, GIF or PNG format. 
// * The Virtual Background file size cannot exceed 15 megabytes (MB). 

//  **Prerequisites:** 
// *  The **Webinar Session Branding** setting enabled.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "form-data",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: uploadWebinarBrandingVB_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				name: z.string(),
// 				is_default: z.boolean(),
// 				size: z.number().int(),
// 				type: z.literal("image"),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// This webinar does not have session branding enabled.

// **Error Code:** &#x60;120&#x60; &lt;br&gt;
// * No file uploaded. Verify that a file has been uploaded. 
// * File size cannot exceed 15M. 
// * A maximum of 10 files are allowed for a webinar. 
// * Only JPG/JPEG, GIF, or PNG image files can be uploaded.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User &quot;{userId}&quot; does not exist or does not belong to this account.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar &quot;{webinarId}&quot; not found or has expired.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/webinars/:webinarId/branding/virtual_backgrounds",
// 		description: `Use this API to delete a webinar&#x27;s session branding [Virtual Background](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background). 

//  **Prerequisites:** 
// * The **Webinar Session Branding** setting enabled.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "ids",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid parameter: ids

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// This webinar does not have session branding enabled.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User &quot;{userId}&quot; does not exist or does not belong to this account.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar &quot;{webinarId}&quot; not found or has expired.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/webinars/:webinarId/branding/virtual_backgrounds",
// 		description: `Use this API to set a webinar&#x27;s default session branding [Virtual Background](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background). 

//  **Prerequisites:** 
// * The **Webinar Session Branding** setting enabled.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "set_default_for_all_panelists",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid parameter: {id}

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// This webinar does not have session branding enabled.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User &quot;{userId}&quot; does not exist or does not belong to this account.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar &quot;{webinarId}&quot; not found or has expired.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/webinars/:webinarId/branding/wallpaper",
// 		description: `Use this API to upload a webinar&#x27;s session branding wallpaper file. Webinar branding wallpaper files have the following requirements: 
// * A webinar can only have one wallpaper file. 
// * You can only upload image files that are in JPG/JPEG, GIF, or PNG format. 
// * Image files must be 16:9 ratio. The recommended image size is 1920 x 1080 pixels (px). 
// * The wallpaper file size cannot exceed 15 megabytes (MB). 

//  **Prerequisites:** 
// *  The **Webinar Session Branding** setting enabled.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "form-data",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: z.object({ file: z.instanceof(File) }).passthrough(),
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				name: z.string(),
// 				size: z.number().int(),
// 				type: z.literal("image"),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// This webinar does not have session branding enabled.

// **Error Code:** &#x60;120&#x60; &lt;br&gt;
// * No file uploaded. Verify that a file has been uploaded. 
// * File size cannot exceed 15M. 
// * A maximum of 10 files are allowed for a webinar. 
// * Only JPG/JPEG, GIF, or PNG image files can be uploaded.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User &quot;{userId}&quot; does not exist or does not belong to this account.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar &quot;{webinarId}&quot; not found or has expired.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/webinars/:webinarId/branding/wallpaper",
// 		description: `Use this API to delete a webinar&#x27;s session branding wallpaper file. 

//  **Prerequisites:** 
// * The **Webinar Session Branding** setting enabled.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;1010&#x60; &lt;br&gt;
// User does not belong to this account: {accountId}

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid parameter: {id}

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// This webinar does not have session branding enabled.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User &quot;{userId}&quot; does not exist or does not belong to this account.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar &quot;{webinarId}&quot; not found or has expired.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/webinars/:webinarId/invite_links",
// 		description: `Create a batch of invitation links for a webinar.

// **Prerequisites:**

// * Business, Education or API Plan with the Webinar add-on.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Webinar invite link object.`,
// 				type: "Body",
// 				schema: meetingInviteLinksCreate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				attendees: z.array(
// 					z
// 						.object({ join_url: z.string(), name: z.string() })
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * Webinar Id does not exist.&lt;br&gt;
// * Invalid Webinar Id.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar does not exist: {webinarId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: {userId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/jointoken/live_streaming",
// 		description: `Use this API to get a webinar&#x27;s archive token to allow live streaming. The join token allows a recording bot implemented using Zoom meeting SDK to connect to a Zoom meeting &amp;quot;hosted by the issuer of the token&amp;quot;, and can call the streaming method automatically. It supports both regular live streaming, and raw streaming. 

//  **Prerequisites:** 
// * A Pro or higher plan with a Webinar Add-on. 
// * The **Allow livestreaming of webinars** user setting enabled in the Zoom web portal.

// **Scopes:** &#x60;webinar_token:read:admin:live_streaming&#x60;,&#x60;webinar_token:read:live_streaming&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({ expire_in: z.literal(120), token: z.string() })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid webinar ID.

// **Error Code:** &#x60;124&#x60; &lt;br&gt;
// This API only supports OAuth2 authorization.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Not allowed to start live streaming. To use this feature, enable the &quot;Allow livestreaming of webinars&quot; setting in the &quot;Settings&quot; page of the Zoom web portal.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Webinar ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar does not exist: {webinarId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/jointoken/local_archiving",
// 		description: `Use this API to get a webinar&#x27;s archive token to allow local archiving. The archive token allows a meeting SDK app or bot to get archive permission to access the webinar&#x27;s raw audio and video media stream in real-time. 

//  **Prerequisites:** 
// * A Pro or higher plan with a Webinar Add-on. 
// * The **Archive meetings and webinars** account setting enabled in the Zoom web portal.

// **Scopes:** &#x60;webinar_token:read:admin:local_archiving&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({ expire_in: z.literal(120), token: z.string() })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid webinar ID.

// **Error Code:** &#x60;124&#x60; &lt;br&gt;
// This API only supports OAuth2 authorization.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Not allowed to start local archiving. To use this feature, enable the &quot;Archive meetings and webinars&quot; setting in the &quot;Settings&quot; page of the Zoom web portal.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Webinar ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar does not exist: {webinarId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/jointoken/local_recording",
// 		description: `Use this API to get a webinar&#x27;s join token to allow for local recording. The join token lets a recording bot implemented using Zoom Meeting SDK to connect to a Zoom webinar. The recording bot can then automatically start locally recording. This supports both regular and raw local recording types. 

//  **Prerequisites:** 
// * A Pro or higher plan with a Webinar Add-on. 
// * The **Local recording** user setting enabled in the Zoom web portal.

// **Scopes:** &#x60;webinar_token:read:admin:local_recording&#x60;,&#x60;webinar_token:read:local_recording&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({ expire_in: z.literal(120), token: z.string() })
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid webinar ID.

// **Error Code:** &#x60;124&#x60; &lt;br&gt;
// This API only supports OAuth2 authorization.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Not allowed to start local recording. To use this feature, enable the &quot;Local Recording&quot; setting in the &quot;Settings&quot; page of the Zoom web portal.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Webinar ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar does not exist: {webinarId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/livestream",
// 		description: `Get a webinar&#x27;s live stream configuration details, such as Stream URL, Stream Key and Page URL.

// Zoom allows users to [live stream a webinar](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform.

 
// **Prerequisites:**  
 
// * Pro or higher plan with the webinar add-on.  
 
// * Live streaming details must have been [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the webinar.  




// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				page_url: z.string(),
// 				stream_key: z.string(),
// 				stream_url: z.string(),
// 				resolution: z.string(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * Webinar ID does not exist.&lt;br&gt;* Invalid Webinar ID.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} does not exist.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  * Webinar plan is missing. Subscribe to the webinar plan and enable webinars for user  {userId} in order to perform this action.&lt;br&gt;* The current user has not enabled the custom live streaming feature of the webinar. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/webinars/:webinarId/livestream",
// 		description: `Update a webinar&#x27;s live stream information. 
   
 
// **Prerequisites:**  
 
// * Pro or higher plan with the webinar add-on.  
 
// * Live streaming details must be [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the webinar.  
   
 


// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Webinar`,
// 				type: "Body",
// 				schema: meetingLiveStreamUpdate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * Webinar Id does not exist.&lt;br&gt;
// * Invalid Webinar Id.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar does not exist: {webinarId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: {userId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  * Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.&lt;br&gt;
// * The current user has not enabled the custom live streaming feature of the webinar. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/webinars/:webinarId/livestream/status",
// 		description: `Let users [live stream a webinar](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Update the status of a webinar&#x27;s live stream.  
   
 
// **Prerequisites:**  
 
// * Pro or higher plan with a Webinar Add-on.  
 
// * Live streaming details must be [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the webinar.  
   
 


// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Webinar`,
// 				type: "Body",
// 				schema: meetingLiveStreamStatusUpdate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  * Webinar Id does not exist.&lt;br&gt;
// * Invalid Webinar Id.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar does not exist: {webinarId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User does not exist: {userId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  * Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.&lt;br&gt;
// * The current user has not enabled the custom live streaming feature of the webinar.&lt;br&gt;
// * Webinar {0} has not started. &lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  The current webinar is not configured with a custom streaming service. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/panelists",
// 		description: `List all of a webinar&#x27;s panelists.  

// Webinar panelists can view and send video, screen share, annotate, and do much more compared to webinar attendees. 


// **Prerequisites:**  
 
// * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).  
  

// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				panelists: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							email: z.string().email(),
// 							name: z.string(),
// 							join_url: z.string(),
// 							virtual_background_id: z.string(),
// 							name_tag_id: z.string(),
// 							name_tag_name: z.string(),
// 							name_tag_pronouns: z.string(),
// 							name_tag_description: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/webinars/:webinarId/panelists",
// 		description: `Panelists in a webinar can view and send video, screen share, annotate, and do much more compared to attendees in a webinar.  
//  [Add panelists](https://support.zoom.us/hc/en-us/articles/115005657826-Inviting-Panelists-to-a-Webinar#h_7550d59e-23f5-4703-9e22-e76bded1ed70) to a scheduled webinar.  
   
 
// **Prerequisites:**
// * Pro or a higher plan with the [Webinar Add-on](https://zoom.us/webinar).  
  

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: webinarPanelistCreate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				updated_at: z.string().datetime({ offset: true }),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  You have reached the limit for the number of panelists you can add. Contact Zoom Support for more information.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 429,
// 				description: `**HTTP Status Code:** &#x60;429&#x60; &lt;br&gt;
//  Too Many Requests 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/webinars/:webinarId/panelists",
// 		description: `Remove all the panelists from a webinar.  
 
// **Prerequisites:**  
 
// * Pro or a higher plan with the [webinar add-on](https://zoom.us/webinar).  
  

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/webinars/:webinarId/panelists/:panelistId",
// 		description: `[Remove](https://support.zoom.us/hc/en-us/articles/115005657826-Inviting-Panelists-to-a-Webinar#h_de31f237-a91c-4fb2-912b-ecfba8ec5ffb) a single panelist from a webinar.  
//   Retrieve the &#x60;panelistId&#x60; by calling **List Panelists API**.  
   
 
// **Prerequisites:**  
 
// * Pro or a higher plan with the [webinar add-on](https://zoom.us/webinar).  
  

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "panelistId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User  {accountId} does not belong to this account. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {email} does not exist or does not belong to this account. &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/polls",
// 		description: `List all the [polls](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) of a Webinar.  
   
 


// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "anonymous",
// 				type: "Query",
// 				schema: z.boolean().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				polls: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							status: z.enum(["notstart", "started", "ended", "sharing"]),
// 							anonymous: z.boolean(),
// 							poll_type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 							questions: z.array(
// 								z
// 									.object({
// 										answer_max_character: z.number().int(),
// 										answer_min_character: z.number().int().gte(1),
// 										answer_required: z.boolean(),
// 										answers: z.array(z.string()).min(2),
// 										case_sensitive: z.boolean(),
// 										name: z.string().max(255),
// 										prompts: z.array(
// 											z
// 												.object({
// 													prompt_question: z.string(),
// 													prompt_right_answers: z.array(z.string()),
// 												})
// 												.partial()
// 												.passthrough()
// 										),
// 										rating_max_label: z.string(),
// 										rating_max_value: z.number().int().lte(10),
// 										rating_min_label: z.string(),
// 										rating_min_value: z.number().int().gte(0),
// 										right_answers: z.array(z.string()).min(1),
// 										show_as_dropdown: z.boolean(),
// 										type: z.enum([
// 											"single",
// 											"multiple",
// 											"matching",
// 											"rank_order",
// 											"short_answer",
// 											"long_answer",
// 											"fill_in_the_blank",
// 											"rating_scale",
// 										]),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							title: z.string().max(64),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				total_records: z.number().int(),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;4400&#x60; &lt;br&gt;
//  Webinar polls disabled. To enable this feature, enable the &quot;Webinar Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/webinars/:webinarId/polls",
// 		description: `Create a [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) for a webinar.  
   
 


// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Webinar poll object.`,
// 				type: "Body",
// 				schema: meetingPollCreate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				status: z.enum(["notstart", "started", "ended", "sharing"]),
// 				anonymous: z.boolean(),
// 				poll_type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				questions: z.array(
// 					z
// 						.object({
// 							answer_max_character: z.number().int(),
// 							answer_min_character: z.number().int().gte(1),
// 							answer_required: z.boolean(),
// 							answers: z.array(z.string()).min(2),
// 							case_sensitive: z.boolean(),
// 							name: z.string().max(255),
// 							prompts: z.array(
// 								z
// 									.object({
// 										prompt_question: z.string(),
// 										prompt_right_answers: z.array(z.string()),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							rating_max_label: z.string(),
// 							rating_max_value: z.number().int().lte(10),
// 							rating_min_label: z.string(),
// 							rating_min_value: z.number().int().gte(0),
// 							right_answers: z.array(z.string()).min(1),
// 							show_as_dropdown: z.boolean(),
// 							type: z.enum([
// 								"single",
// 								"multiple",
// 								"matching",
// 								"rank_order",
// 								"short_answer",
// 								"long_answer",
// 								"fill_in_the_blank",
// 								"rating_scale",
// 							]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				title: z.string().max(64),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;4400&#x60; &lt;br&gt;
//  * Webinar polls disabled. To enable this feature, enable the &quot;Webinar Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. 
// * Advanced webinar polls disabled. To enable this feature, enable the &quot;Allow host to create advanced polls and quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/polls/:pollId",
// 		description: `Get a webinar&#x27;s [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) details.  
   
 


// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "pollId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string(),
// 				status: z.enum(["notstart", "started", "ended", "sharing"]),
// 				anonymous: z.boolean(),
// 				poll_type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
// 				questions: z.array(
// 					z
// 						.object({
// 							answer_max_character: z.number().int(),
// 							answer_min_character: z.number().int().gte(1),
// 							answer_required: z.boolean(),
// 							answers: z.array(z.string()).min(2),
// 							case_sensitive: z.boolean(),
// 							name: z.string().max(255),
// 							prompts: z.array(
// 								z
// 									.object({
// 										prompt_question: z.string(),
// 										prompt_right_answers: z.array(z.string()),
// 									})
// 									.partial()
// 									.passthrough()
// 							),
// 							rating_max_label: z.string(),
// 							rating_max_value: z.number().int().lte(10),
// 							rating_min_label: z.string(),
// 							rating_min_value: z.number().int().gte(0),
// 							right_answers: z.array(z.string()).min(1),
// 							show_as_dropdown: z.boolean(),
// 							type: z.enum([
// 								"single",
// 								"multiple",
// 								"matching",
// 								"rank_order",
// 								"short_answer",
// 								"long_answer",
// 								"fill_in_the_blank",
// 								"rating_scale",
// 							]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				title: z.string().max(64),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;4400&#x60; &lt;br&gt;
//  Webinar polls disabled. To enable this feature, enable the &quot;Webinar Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/webinars/:webinarId/polls/:pollId",
// 		description: `Update a webinar&#x27;s [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).  
   
 


// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Webinar Poll`,
// 				type: "Body",
// 				schema: meetingPollCreate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "pollId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;4400&#x60; &lt;br&gt;
//  * Webinar polls disabled. To enable this feature, enable the &quot;Webinar Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. 
// * Advanced webinar polls disabled. To enable this feature, enable the &quot;Allow host to create advanced polls and quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/webinars/:webinarId/polls/:pollId",
// 		description: `Delete a webinar&#x27;s [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).  
   
 


// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "pollId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;4400&#x60; &lt;br&gt;
//  Webinar polls disabled. To enable this feature, enable the &quot;Webinar Polls/Quizzes&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/registrants",
// 		description: `List all users that have registered for a given webinar. Zoom users with a [webinar plan](https://zoom.us/webinar) have access to creating and managing webinars. The webinar functionality lets a host broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the webinar.  


// **Prerequisites**
// * Pro or higher plan with a Webinar Add-on.  
 


// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "status",
// 				type: "Query",
// 				schema: z
// 					.enum(["pending", "approved", "denied"])
// 					.optional()
// 					.default("approved"),
// 			},
// 			{
// 				name: "tracking_source_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 			{
// 				name: "page_size",
// 				type: "Query",
// 				schema: z.number().int().lte(300).optional().default(30),
// 			},
// 			{
// 				name: "page_number",
// 				type: "Query",
// 				schema: z.number().int().optional().default(1),
// 			},
// 			{
// 				name: "next_page_token",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				next_page_token: z.string(),
// 				page_count: z.number().int(),
// 				page_number: z.number().int().default(1),
// 				page_size: z.number().int().lte(300).default(30),
// 				total_records: z.number().int(),
// 				registrants: z.array(
// 					z
// 						.object({
// 							id: z.string().optional(),
// 							address: z.string().optional(),
// 							city: z.string().optional(),
// 							comments: z.string().optional(),
// 							country: z.string().optional(),
// 							custom_questions: z
// 								.array(
// 									z
// 										.object({ title: z.string(), value: z.string().max(128) })
// 										.partial()
// 										.passthrough()
// 								)
// 								.optional(),
// 							email: z.string().max(128).email(),
// 							first_name: z.string().max(64),
// 							industry: z.string().optional(),
// 							job_title: z.string().optional(),
// 							last_name: z.string().max(64).optional(),
// 							no_of_employees: z
// 								.enum([
// 									"",
// 									"1-20",
// 									"21-50",
// 									"51-100",
// 									"101-250",
// 									"251-500",
// 									"501-1,000",
// 									"1,001-5,000",
// 									"5,001-10,000",
// 									"More than 10,000",
// 								])
// 								.optional(),
// 							org: z.string().optional(),
// 							phone: z.string().optional(),
// 							purchasing_time_frame: z
// 								.enum([
// 									"",
// 									"Within a month",
// 									"1-3 months",
// 									"4-6 months",
// 									"More than 6 months",
// 									"No timeframe",
// 								])
// 								.optional(),
// 							role_in_purchase_process: z
// 								.enum([
// 									"",
// 									"Decision Maker",
// 									"Evaluator/Recommender",
// 									"Influencer",
// 									"Not involved",
// 								])
// 								.optional(),
// 							state: z.string().optional(),
// 							status: z.enum(["approved", "denied", "pending"]).optional(),
// 							zip: z.string().optional(),
// 							create_time: z.string().datetime({ offset: true }).optional(),
// 							join_url: z.string().optional(),
// 						})
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "post",
// 		path: "/webinars/:webinarId/registrants",
// 		description: `Create and submit a user&#x27;s registration for a webinar. Zoom users with a [Webinar plan](https://zoom.us/webinar) have access to creating and managing webinars. Webinars allow hosts to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the webinar. 

// **Prerequisites:** 
// * A Pro or higher plan with the Webinar add-on.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: webinarRegistrantCreate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_ids",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.number().int(),
// 				join_url: z.string(),
// 				registrant_id: z.string(),
// 				start_time: z.string().datetime({ offset: true }),
// 				topic: z.string().max(200),
// 				occurrences: z.array(
// 					z
// 						.object({
// 							duration: z.number().int(),
// 							occurrence_id: z.string(),
// 							start_time: z.string().datetime({ offset: true }),
// 							status: z.string(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account: {accountId} &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  This webinar does not have registration as required: {webinarId}. &lt;br&gt;
// **Error Code:** &#x60;3027&#x60; &lt;br&gt;
//  Host cannot register. &lt;br&gt;
// **Error Code:** &#x60;3034&#x60; &lt;br&gt;
//  If you have been invited, please input your work email address. &lt;br&gt;
// **Error Code:** &#x60;3038&#x60; &lt;br&gt;
//  Webinar is over, you cannot register now. If you have any questions, contact the webinar host. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  You have reached the limit for the number of attendees you can add. Contact Zoom Support for more information. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  The Zoom REST API does not support paid registration. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User &quot;{userId}&quot; does not exist or does not belong to this account. &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar &quot;{webinarId}&quot; not found or has expired. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 429,
// 				description: `**HTTP Status Code:** &#x60;429&#x60; &lt;br&gt;
//  Too Many Requests 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/registrants/:registrantId",
// 		description: `Zoom users with a [webinar plan](https://zoom.us/webinar) have access to creating and managing webinars. The webinar feature lets a host broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the webinar.  
//  Use this API to get details on a specific user who has registered for the webinar.  
   
 
// **Prerequisites:**  
 
// * The account must have a webinar plan.

// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "registrantId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				id: z.string().optional(),
// 				address: z.string().optional(),
// 				city: z.string().optional(),
// 				comments: z.string().optional(),
// 				country: z.string().optional(),
// 				custom_questions: z
// 					.array(
// 						z
// 							.object({ title: z.string(), value: z.string().max(128) })
// 							.partial()
// 							.passthrough()
// 					)
// 					.optional(),
// 				email: z.string().max(128).email(),
// 				first_name: z.string().max(64),
// 				industry: z.string().optional(),
// 				job_title: z.string().optional(),
// 				last_name: z.string().max(64).optional(),
// 				no_of_employees: z
// 					.enum([
// 						"",
// 						"1-20",
// 						"21-50",
// 						"51-100",
// 						"101-250",
// 						"251-500",
// 						"501-1,000",
// 						"1,001-5,000",
// 						"5,001-10,000",
// 						"More than 10,000",
// 					])
// 					.optional(),
// 				org: z.string().optional(),
// 				phone: z.string().optional(),
// 				purchasing_time_frame: z
// 					.enum([
// 						"",
// 						"Within a month",
// 						"1-3 months",
// 						"4-6 months",
// 						"More than 6 months",
// 						"No timeframe",
// 					])
// 					.optional(),
// 				role_in_purchase_process: z
// 					.enum([
// 						"",
// 						"Decision Maker",
// 						"Evaluator/Recommender",
// 						"Influencer",
// 						"Not involved",
// 					])
// 					.optional(),
// 				state: z.string().optional(),
// 				status: z.enum(["approved", "denied", "pending"]).optional(),
// 				zip: z.string().optional(),
// 				language: z
// 					.enum([
// 						"en-US",
// 						"de-DE",
// 						"es-ES",
// 						"fr-FR",
// 						"jp-JP",
// 						"pt-PT",
// 						"ru-RU",
// 						"zh-CN",
// 						"zh-TW",
// 						"ko-KO",
// 						"it-IT",
// 						"vi-VN",
// 						"pl-PL",
// 						"Tr-TR",
// 					])
// 					.optional(),
// 				create_time: z.string().datetime({ offset: true }).optional(),
// 				join_url: z.string().optional(),
// 			})
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/webinars/:webinarId/registrants/:registrantId",
// 		description: `Delete a webinar registrant.  
   
 


// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "registrantId",
// 				type: "Path",
// 				schema: z.string(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;200&#x60; &lt;br&gt;
//  Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {0}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  The value that you entered for the Registrant ID field is invalid. Enter a valid value and try again.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;404&#x60; &lt;br&gt;
//  Registration has not been enabled for this webinar: {0}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Registrant {0} was not found.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar does not exist: {0}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/registrants/questions",
// 		description: `List registration questions and fields that are to be answered by users while registering for a webinar. 

//  Scheduling a [webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form with fields and questions before they can receive the link to join the webinar.  
  
// **Prerequisites:**  
  
// * Pro or higher plan with the webinar add-on.


// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				custom_questions: z.array(
// 					z
// 						.object({
// 							answers: z.array(z.string()),
// 							required: z.boolean(),
// 							title: z.string(),
// 							type: z.enum([
// 								"short",
// 								"single_radio",
// 								"single_dropdown",
// 								"multiple",
// 							]),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 				questions: z.array(
// 					z
// 						.object({
// 							field_name: z.enum([
// 								"last_name",
// 								"address",
// 								"city",
// 								"country",
// 								"zip",
// 								"state",
// 								"phone",
// 								"industry",
// 								"org",
// 								"job_title",
// 								"purchasing_time_frame",
// 								"role_in_purchase_process",
// 								"no_of_employees",
// 								"comments",
// 							]),
// 							required: z.boolean(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/webinars/:webinarId/registrants/questions",
// 		description: `Update registration questions and fields of a scheduled webinar for users to answer during webinar registration. Scheduling a [webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form with fields and questions before they can receive the link to join the webinar.  
   
 
// **Prerequisites:**  
   
// * Pro or higher plan with a Webinar Add-on.
// * Registration option for Webinar should be set as required to use this API. 


// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				description: `Webinar registrant questions`,
// 				type: "Body",
// 				schema: webinarRegistrantQuestionUpdate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/webinars/:webinarId/registrants/status",
// 		description: `Update webinar registrants&#x27; registration status. You can approve or deny a registrant, or revoke a registrant&#x27;s approval. 

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: webinarRegistrantStatus_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "occurrence_id",
// 				type: "Query",
// 				schema: z.string().optional(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account: {accountId}. &lt;br&gt;
// **Error Code:** &#x60;3035&#x60; &lt;br&gt;
//  Webinar has reached maximum attendee capacity. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account. &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 429,
// 				description: `**HTTP Status Code:** &#x60;429&#x60; &lt;br&gt;
//  Too Many Requests 

//  `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "put",
// 		path: "/webinars/:webinarId/status",
// 		description: `Update a webinar&#x27;s status. Use this API to end an ongoing webinar.  
   
 
// **Prerequisites:**  
 
// * The account must hold a valid [Webinar plan](https://zoom.us/webinar).

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: webinarStatus_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.object({}).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;1010&#x60; &lt;br&gt;
//  User does not belong to this account:{accountId}.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3003&#x60; &lt;br&gt;
//  You are not the meeting host.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3063&#x60; &lt;br&gt;
//  Can not end on-premise user&#x27;s meeting:{meetingId}.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;1001&#x60; &lt;br&gt;
//  User {userId} does not exist or does not belong to this account.&lt;br&gt; &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar {webinarId} not found or has expired.&lt;br&gt; &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/survey",
// 		description: `Return information about a [webinar survey](https://support.zoom.us/hc/en-us/articles/360048745651). 

//  **Prerequisites:** 
// * A Pro or higher plan with the Webinar add-on. 
// * The [**Webinar Survey**](https://support.zoom.us/hc/en-us/articles/360061293191-Enabling-webinar-survey) feature enabled in the host&#x27;s account.

// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				custom_survey: z
// 					.object({
// 						title: z.string().max(64),
// 						anonymous: z.boolean(),
// 						numbered_questions: z.boolean(),
// 						show_question_type: z.boolean(),
// 						feedback: z.string().max(320),
// 						questions: z
// 							.array(
// 								z
// 									.object({
// 										name: z.string(),
// 										type: z.enum([
// 											"single",
// 											"multiple",
// 											"matching",
// 											"rank_order",
// 											"short_answer",
// 											"long_answer",
// 											"fill_in_the_blank",
// 											"rating_scale",
// 										]),
// 										answer_required: z.boolean(),
// 										show_as_dropdown: z.boolean(),
// 										answers: z.array(z.string()).min(2),
// 										prompts: z
// 											.array(
// 												z
// 													.object({ prompt_question: z.string().max(200) })
// 													.partial()
// 													.passthrough()
// 											)
// 											.min(2)
// 											.max(10),
// 										answer_min_character: z.number().int().gte(1),
// 										answer_max_character: z.number().int(),
// 										rating_min_value: z.number().int().gte(0),
// 										rating_max_value: z.number().int().lte(10),
// 										rating_min_label: z.string().max(50),
// 										rating_max_label: z.string().max(50),
// 									})
// 									.partial()
// 									.passthrough()
// 							)
// 							.min(1)
// 							.max(100),
// 					})
// 					.partial()
// 					.passthrough(),
// 				show_in_the_browser: z.boolean().default(true),
// 				show_in_the_follow_up_email: z.boolean(),
// 				third_party_survey: z.string().max(64),
// 			})
// 			.partial()
// 			.passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid webinar ID. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Webinar survey disabled. To enable this feature, enable the &quot;Webinar Survey&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Webinar ID does not exist. &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar does not exist: {webinarId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "delete",
// 		path: "/webinars/:webinarId/survey",
// 		description: `Use this API to delete a [webinar survey](https://support.zoom.us/hc/en-us/articles/360048745651). 

//  **Prerequisites:** 
// * A Pro or higher plan with the Webinar Add-on. 
// * The [**Webinar Survey**](https://support.zoom.us/hc/en-us/articles/360061293191-Enabling-webinar-survey) feature enabled in the host&#x27;s account.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid webinar ID. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Webinar survey disabled. To enable this feature, enable the &quot;Webinar Survey&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Webinar ID does not exist. &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar does not exist: {webinarId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "patch",
// 		path: "/webinars/:webinarId/survey",
// 		description: `Update a [webinar survey](https://support.zoom.us/hc/en-us/articles/360048745651).  **Prerequisites:** * A Pro or higher plan with the Webinar add-on. * Enable the [**Webinar Survey**](https://support.zoom.us/hc/en-us/articles/360061293191-Enabling-webinar-survey) feature in the host&#x27;s account.

// **Scopes:** &#x60;webinar:write&#x60;,&#x60;webinar:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;LIGHT&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: webinarSurveyUpdate_Body,
// 			},
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z.void(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid webinar ID. &lt;br&gt;
// **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Invalid third party survey: {third_party_survey}. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  Webinar survey disabled. To use this feature, enable the &quot;Webinar Survey&quot; setting in the Zoom web portal&#x27;s &quot;Settings&quot; interface. &lt;br&gt;
// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
//  The host isn&#x27;t allowed to use a third party survey link. To use this feature, enable the &quot;Allow host to use a 3rd-party survey link&quot; setting in the &quot;Account Settings&quot; page of the Zoom web portal. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found 

//  **Error Code:** &#x60;300&#x60; &lt;br&gt;
//  Webinar ID does not exist. &lt;br&gt;
// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
//  Webinar does not exist: {webinarId}. &lt;br&gt;
// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/token",
// 		description: `Use this API to get a webinar&#x27;s [closed caption token (caption URL)](https://support.zoom.us/hc/en-us/articles/115002212983-Using-a-third-party-closed-captioning-service). This token lets you use a third-party service to stream text to their closed captioning software to the Zoom webinar. 

// **Prerequisites:** 
// * A Pro or higher plan with the Webinar add-on. 
// * The **Closed captioning** setting enabled in the Zoom web portal. 
// * 
// * The **Allow use of caption API Token to integrate with 3rd-party Closed Captioning services** setting enabled.

// **Scopes:** &#x60;webinar:read&#x60;,&#x60;webinar:read:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Light&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 			{
// 				name: "type",
// 				type: "Query",
// 				schema: z
// 					.literal("closed_caption_token")
// 					.optional()
// 					.default("closed_caption_token"),
// 			},
// 		],
// 		response: z.object({ token: z.string() }).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid webinar ID.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Closed captioning disabled. To enable this feature, enable the &quot;Closed captioning&quot; and &quot;Allow use of caption API Token to integrate with 3rd-party Closed Captioning services&quot; settings in the Zoom web portal&#x27;s &quot;Settings&quot; interface.

// **Error Code:** &#x60;3000&#x60; &lt;br&gt;
// Webinar {webinarId} has not started.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Webinar ID does not exist.

// **Error Code:** &#x60;3001&#x60; &lt;br&gt;
// Webinar does not exist: {webinarId}

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// 	{
// 		method: "get",
// 		path: "/webinars/:webinarId/tracking_sources",
// 		description: `[Webinar Registration Tracking Sources](https://support.zoom.us/hc/en-us/articles/360000315683-Webinar-Registration-Source-Tracking) allow you to see where your registrants are coming from if you share the webinar registration page in multiple platforms. You can then use the source tracking to see the number of registrants generated from each platform.  
//   Use this API to list information on all the tracking sources of a Webinar.  
 
// **Prerequisites**:  
 
// * [Webinar license](https://zoom.us/webinar).
// * Registration must be required for the Webinar.


// **Scopes:** &#x60;webinar:read:admin&#x60;,&#x60;webinar:read&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;MEDIUM&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "webinarId",
// 				type: "Path",
// 				schema: z.number().int(),
// 			},
// 		],
// 		response: z
// 			.object({
// 				total_records: z.number().int(),
// 				tracking_sources: z.array(
// 					z
// 						.object({
// 							id: z.string(),
// 							registration_count: z.number().int(),
// 							source_name: z.string(),
// 							tracking_url: z.string(),
// 							visitor_count: z.number().int(),
// 						})
// 						.partial()
// 						.passthrough()
// 				),
// 			})
// 			.partial()
// 			.passthrough(),
// 	},
// 	{
// 		method: "post",
// 		path: "/zoomapp/deeplink",
// 		description: `Create an app deeplink. 

 

// **Scopes:** &#x60;app:deeplink:write&#x60;,&#x60;app:deeplink:write:admin&#x60;

// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** &#x60;Medium&#x60;`,
// 		requestFormat: "json",
// 		parameters: [
// 			{
// 				name: "body",
// 				type: "Body",
// 				schema: generateAppDeeplink_Body,
// 			},
// 		],
// 		response: z.object({ deeplink: z.string() }).partial().passthrough(),
// 		errors: [
// 			{
// 				status: 400,
// 				description: `**HTTP Status Code:** &#x60;400&#x60; &lt;br&gt;
//  Bad Request

// **Error Code:** &#x60;124&#x60; &lt;br&gt;
// Invalid access token.

// **Error Code:** &#x60;300&#x60; &lt;br&gt;
// Invalid action. The maximum length of the value is 256.

// `,
// 				schema: z.void(),
// 			},
// 			{
// 				status: 404,
// 				description: `**HTTP Status Code:** &#x60;404&#x60; &lt;br&gt;
//  Not Found

// **Error Code:** &#x60;1001&#x60; &lt;br&gt;
// User does not exist: $userId.

// `,
// 				schema: z.void(),
// 			},
// 		],
// 	},
// ]);
