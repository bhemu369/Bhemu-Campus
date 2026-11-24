type DownloadCompleteEvent = {
	downloadId: number;
	uri: string;
};

/**
 * APK installation is Android-only. Keep the shared update service import-safe
 * on iOS so Expo can start the app before its Android-only code is reached.
 */
const BhemuUpdaterModule = {
	addListener(
		_eventName: "onDownloadComplete",
		_listener: (event: DownloadCompleteEvent) => void
	) {
		void _eventName;
		void _listener;
		return { remove: () => {} };
	},
	async canInstallPackages(): Promise<boolean> {
		return false;
	},
	async getDownloadStatus(_downloadId: number): Promise<null> {
		void _downloadId;
		return null;
	},
	async downloadApk(
		_url: string,
		_filename: string,
		_title: string,
		_description: string,
		_mimeType: string
	): Promise<number> {
		void _url;
		void _filename;
		void _title;
		void _description;
		void _mimeType;
		throw new Error("APK updates are only available on Android.");
	},
};

export default BhemuUpdaterModule;
