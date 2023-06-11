import { vi } from "vitest";

const mockAxios = {
	get: vi.fn(),
	post: vi.fn(),
	delete: vi.fn(),
};

export default mockAxios;
