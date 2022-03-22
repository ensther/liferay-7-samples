import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
	render() {		
		Liferay.provide(window, 'callControlPanel', () => {
			const redirectURL = new Liferay.PortletURL.createURL('/group/guest/~/control_panel/manage');

			redirectURL.setParameter('p_p_id', 'com_liferay_journal_web_portlet_JournalPortlet');
			redirectURL.setParameter('p_p_state', 'maximized');
			redirectURL.setParameter('p_v_l_s_g_id', '20121');
			redirectURL.setParameter('p_p_auth', 'WIyBUZsc');

			window.open(redirectURL.toString());
		}, ['liferay-portlet-url']);

		return (
            <div>
				<div>
        	        <span className="tag">{Liferay.Language.get('portlet-namespace')}:</span> 
					<span className="value">{this.props.portletNamespace}</span>
				</div>
				<div>
    	            <span className="tag">{Liferay.Language.get('context-path')}:</span>
					<span className="value">{this.props.contextPath}</span>
				</div>
				<div>
	                <span className="tag">{Liferay.Language.get('portlet-element-id')}:</span>
					<span className="value">{this.props.portletElementId}</span>
				</div>
				
				<div>
					<span className="tag">{Liferay.Language.get('configuration')}:</span>
					<span className="value pre">{JSON.stringify(this.props.configuration, null, 2)}</span>
				</div>

				<button tye="button" onClick={callControlPanel} className="btn ">Call Control Panel</button>				
			</div>
		);
	}	
}