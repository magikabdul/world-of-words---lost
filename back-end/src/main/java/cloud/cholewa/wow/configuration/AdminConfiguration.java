package cloud.cholewa.wow.configuration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@ConfigurationProperties(prefix = "application.config.admin")
public class AdminConfiguration {

    private String username;
    private String firstName;
    private String lastName;
    private String password;
    private String mail;
}
