import {Container} from 'reactstrap';

export const Footer = () => (
    <footer>
        <div>
            <small>
                <a class="text-white" href="@{/public/releasenotes}">project.version</a>
                <span>application.build.time</span>
            </small>
        </div>
        <div>
            <small>lbl.footer.poweredby</small>
        </div>
    </footer>
)