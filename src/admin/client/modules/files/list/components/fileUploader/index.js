import React from 'react';
import Dropzone from 'react-dropzone';
import messages from 'lib/text';
import heic2any from 'heic2any';

import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import style from './style.css';

export default class MultiUploader extends React.Component {
	onDrop = async files => {
		for (let j = 0; j < files.length; j++) {
			const form = new FormData();
			let file = files[j];

			if (file.type.match('image/heic')) {
				let blob = new Blob([file], { type: 'image/jpeg' });
				if (blob.type.match('image/heic')) {
					blob = await heic2any({
						blob,
						toType: 'image/jpeg',
						quality: 0.1,
						gifInterval: 0.2
					});
				}
				file = new File([blob], `${file.name.split('.')[0]}.jpeg`);
			}
			form.append('file', file);
			this.props.onUpload(form);
		}
		console.log('done total:', files.length);
	};

	render() {
		const { uploading } = this.props;
		return (
			<div>
				<Dropzone
					onDrop={this.onDrop}
					multiple
					disableClick
					ref={node => {
						this.dropzone = node;
					}}
					style={{}}
					className={style.dropzone + (uploading ? ` ${style.uploading}` : '')}
					activeClassName={style.dropzoneActive}
					rejectClassName={style.dropzoneReject}
				>
					<div className={style.dropzoneEmpty}>
						{messages.help_dropHere}
						<FlatButton
							label={messages.chooseImage}
							className={style.button}
							onClick={() => {
								this.dropzone.open();
							}}
						/>
					</div>
				</Dropzone>

				<Snackbar open={uploading} message={messages.messages_uploading} />
			</div>
		);
	}
}
