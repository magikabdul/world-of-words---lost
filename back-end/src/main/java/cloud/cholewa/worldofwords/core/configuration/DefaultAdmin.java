package cloud.cholewa.worldofwords.core.configuration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@Getter
@Setter
@ConfigurationProperties(prefix = "application.config.admin")
public class DefaultAdmin {

    private String userName;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
}
